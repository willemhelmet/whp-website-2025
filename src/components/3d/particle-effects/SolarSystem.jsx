import { useRef, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import resolveLygia from "../../../utils/resolve-lygia.js";
import PropTypes from "prop-types";

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
    `)
);
extend({ SolarSystemShader });
export default function SolarSystem({ count, radius, size }) {
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

SolarSystem.propTypes = {
  count: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};
