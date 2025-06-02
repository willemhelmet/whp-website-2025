import DefaultWorld from "../components/3d/DefaultWorld.jsx";
import { useRef, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Text, shaderMaterial, useFBO } from "@react-three/drei";

function ParticlesOnSphere() {
  return (
    <>
      <group position={[8, 2, 0]}>
        <Text fontSize={0.125} maxWidth={1.5} textAlign="center">
          Particles on Sphere
        </Text>
        <points>
          <sphereGeometry args={[1, 48, 48]} />
          <pointsMaterial color="#f00" size={0.015} sizeAttenuation />
        </points>
      </group>
    </>
  );
}

function ParticlesOnCustomGeometry({ count, shape }) {
  const points = useRef();
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;
        positions.set([x, y, z], i * 3);
      }
    }
    if (shape === "sphere") {
      const distance = 1;
      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        let x = distance * Math.sin(theta) * Math.cos(phi);
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, shape]);

  return (
    <>
      <group position={[6, 2, 0]}>
        <Text fontSize={0.125} maxWidth={1.5} textAlign="center">
          Random Particles with Custom Geometry
        </Text>
        <points ref={points}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particlesPosition.length / 3}
              array={particlesPosition}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="#f00" size={0.015} sizeAttenuation />
        </points>
      </group>
    </>
  );
}

const DreiParticleShader = shaderMaterial(
  { u_particleSize: 0.3 },
  resolveLygia(`
    uniform float u_particleSize;
    void main() {
			vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
			gl_PointSize = u_particleSize * ( 300.0 / -mvPosition.z );
	    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `),
  resolveLygia(`
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
    `),
);
extend({ DreiParticleShader });

function AnimateParticlesUsingAttributes({ size }) {
  const points = useRef();
  const particleCount = useRef(0);

  // WHP: This isn't very efficient. Every frame we need to loop through EVERY
  //      vertex to update its position
  useFrame((state) => {
    const { clock } = state;

    if (points.current && particleCount.current == 0) {
      particleCount.current =
        points.current.geometry.attributes.position.array.length;
    }

    const count = particleCount.current;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      points.current.geometry.attributes.position.array[i3] +=
        Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
      points.current.geometry.attributes.position.array[i3 + 1] +=
        Math.cos(clock.elapsedTime + Math.random() * 10) * 0.01;
      points.current.geometry.attributes.position.array[i3 + 2] +=
        Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
    }

    // WHP: You need to set this whenever you update the attributes,
    //      if you don't the scene will remain static!
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <group position={[4, 2, 0]}>
        <Text fontSize={0.125} maxWidth={1.5} textAlign="center">
          Random Particles with Custom Shader
        </Text>
        <points ref={points}>
          <sphereGeometry />
          <dreiParticleShader u_particleSize={size} radius={2} />
        </points>
      </group>
    </>
  );
}

const SolarSystemShader = shaderMaterial(
  { u_time: 0.0, u_radius: 1.0, u_particleSize: 0.05 },
  resolveLygia(`
    uniform float u_time;
    uniform float u_radius;
    uniform float u_particleSize;

    varying float v_distanceFactor;

    mat3 rotation3dY(float angle) {
      float s = sin(angle);
      float c = cos(angle);
      return mat3(
        c, 0.0, -s,
        0.0, 1.0, 0.0,
        s, 0.0, c
      );
    }

    void main() {
			float distanceFactor = pow(u_radius - distance(position, vec3(0.0, 0.0, 0.0)), 1.5);
      v_distanceFactor = distanceFactor;
      //float size = distanceFactor * 1.5 + 3.0;
      vec3 particlePosition = position * rotation3dY(u_time * 0.3 * distanceFactor);

      vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
	    gl_Position = projectedPosition;

      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
			gl_PointSize = u_particleSize * ( 300.0 / -mvPosition.z );
    }
    `),
  resolveLygia(`
    varying float v_distanceFactor;
    void main() {
      vec3 color1 = vec3(1.0, 0.0, 0.0);
      vec3 color2 = vec3(1.0, 1.0, 0.0);
      vec3 finalColor = mix(color1, color2, v_distanceFactor);

      float strength = distance(gl_PointCoord, vec2(0.5));
      strength = 1.0 - strength;
      strength = pow(strength, 5.0);

      gl_FragColor = vec4(finalColor, strength);
    }
    `),
);
extend({ SolarSystemShader });

function FBOExample() {
  return (
    <>
      <group></group>
    </>
  );
}

function TinySolarSystem({ count, radius, size }) {
  const points = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt(Math.random()) * radius;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, [count, radius]);

  useFrame((state) => {
    points.current.material.uniforms.u_time.value = state.clock.elapsedTime;
  });

  return (
    <>
      <group position={[2, 2, 0]}>
        <Text fontSize={0.125} maxWidth={1.5} textAlign="center">
          Tiny Galaxy
        </Text>
        <points ref={points}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={particlesPosition.length / 3}
              array={particlesPosition}
              itemSize={3}
            />
          </bufferGeometry>
          <solarSystemShader
            key={SolarSystemShader.key}
            transparent={true}
            depthTest={false}
            blending={THREE.AdditiveBlending}
            u_radius={radius}
            u_particleSize={size}
          />
        </points>
      </group>
    </>
  );
}

function MyFirstParticleSystem() {
  return (
    <>
      <DefaultWorld />
      <ParticlesOnSphere />
      <ParticlesOnCustomGeometry count={5000} shape="box" />
      <AnimateParticlesUsingAttributes size={0.03} />
      <TinySolarSystem count={10000} radius={1} size={0.03} />
    </>
  );
}

export default MyFirstParticleSystem;
