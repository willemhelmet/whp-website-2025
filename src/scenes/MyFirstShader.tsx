import DefaultWorld from "../components/3d/DefaultWorld.jsx";
import { Plane, Text, shaderMaterial } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  DebugLayerMaterial,
  LayerMaterial,
  Depth,
  Fresnel,
  Color,
} from "lamina";
import { Abstract } from "lamina/vanilla";
import * as THREE from "three";
import { Ghostie } from "../components/3d/Ghostie.jsx";
import resolveLygia from "../utils/resolve-lygia.js";

const colorfulPlane = {
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      modelPosition.y += sin(modelPosition.x * 4.0) * 0.25;
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
    
      gl_Position = projectedPosition;
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    vec3 colorA = vec3(0.912,0.191,0.652);
    vec3 colorB = vec3(1.000,0.777,0.052);
    void main() {
      vec3 color = mix(colorA, colorB, vUv.x);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

const myFirstUniformsShader = {
  vertexShader: `
  uniform float u_time;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(modelPosition.x * 6.0 + u_time * 2.0) * 0.25;
    // modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
  }
  `,
  fragmentShader: `
    varying vec2 vUv;
    vec3 colorA = vec3(0.912,0.191,0.652);
    vec3 colorB = vec3(1.000,0.777,0.052);
    void main() {
      vec3 color = mix(colorA, colorB, vUv.x);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

const DreiShader = shaderMaterial(
  {
    color1: new THREE.Color().setHex(0xffe486),
    color2: new THREE.Color().setHex(0xfeb3d9),
    u_time: 0.0,
  },
  `
  uniform float u_time; // Declare the uniform
  varying vec2 vUv;
  varying float vY;

  void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    // Add time-based deformation
    modelPosition.y += sin(modelPosition.x * 2.5 + u_time * 3.0) * 0.25;
    modelPosition.y += sin(modelPosition.z * 3.0 + u_time * 2.0) * 0.25;
    vY = modelPosition.y - 2.0;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
  }
  `,
  `
  varying vec2 vUv;
  varying float vY;
  uniform vec3 color1;
  uniform vec3 color2;

  void main() {
    vec3 color = mix(color1, color2, vY);
    gl_FragColor = vec4(color, 1.0);
  }
  `
);

extend({ DreiShader });

const HelloLygiaShader = shaderMaterial(
  {
    u_intensity: 0.1,
    u_time: 0.0,
  },
  resolveLygia(`
    uniform float u_time;
    uniform float u_intensity;
    varying vec2 vUv;
    varying float vDisplacement;
    #include "lygia/generative/pnoise.glsl"
    void main() {
      vUv = uv;
      vDisplacement = pnoise(vec2(uv * 5.0 + u_time), vec2(1.2, 3.4) * 0.5 + 0.5);
      vec3 newPosition = position + normal * (u_intensity * vDisplacement);
      vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
    }
    `),
  resolveLygia(`
    uniform float u_intensity;
    uniform float u_time;

    varying vec2 vUv;
    varying float vDisplacement;

    void main() {
      float distort = 2.0 * vDisplacement * u_intensity;
      vec3 color = vec3(abs(vUv - 0.5) * 2.0 * (1.0 - distort), 1.0);
      gl_FragColor = vec4(color, 1.0);
    }
  `)
);
extend({ HelloLygiaShader });

const PointerShader = shaderMaterial(
  { u_cursorPos: new THREE.Vector2(0.5, 0.5) },
  resolveLygia(
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
    }
    `
  ),
  resolveLygia(
    `
    uniform vec2 u_cursorPos;
    varying vec2 vUv;
    void main() {
      vec3 color = 1.0 - vec3(step(distance(vUv, u_cursorPos), 0.125));
      gl_FragColor = vec4(color, 1.0);
    }
    `
  )
);
extend({ PointerShader });

class MyFirstCustomLayer extends Abstract {
  // WHP: Notice how you don't need to do that annoying vertex boiler plate!
  // But, if I ever need it I can write it myself.
  // need to include 'return position'
  static vertexShader = resolveLygia(
    `
    varying vec2 v_uv;
    void main() {
      v_uv = uv;
      return position;
    }
    `
  );
  // WHP: And see here that I am returning a vec4(), instead of calling gl_FragColor
  static fragmentShader = resolveLygia(
    `
      varying vec2 v_uv;
      //varying vec3 v_color;
      void main() {
        vec3 color = vec3(v_uv.x, v_uv.y, 1.0);
        return vec4(color, 1.0);
      }
    `
  );

  constructor(props) {
    super(MyFirstCustomLayer, {
      name: "MyFirstCustomLayer",
      ...props,
    });
  }
}
extend({ MyFirstCustomLayer });

export default function MyFirstShader() {
  // WHP: This is the sans-Drei method of creating uniforms.
  //      It's very clear to me that using Drei will be preferred.
  const myFirstUniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  const myFirstUniformMesh = useRef();
  const dreiShaderMesh = useRef();
  const blobRef = useRef();
  const hoverRef = useRef(false);
  const pointerRef = useRef();
  const pointerUVRef = useRef(new THREE.Vector2());

  useFrame((state) => {
    const { clock } = state;
    const elapsedTime = clock.getElapsedTime();

    // Update time uniform for the first uniform shader
    if (myFirstUniformMesh.current) {
      myFirstUniformMesh.current.material.uniforms.u_time.value = elapsedTime;
    }

    // Update time uniform for the DreiShader
    if (dreiShaderMesh.current) {
      dreiShaderMesh.current.material.uniforms.u_time.value = elapsedTime;
    }
    if (blobRef.current) {
      blobRef.current.material.uniforms.u_time.value = elapsedTime;
      blobRef.current.material.uniforms.u_intensity.value =
        THREE.MathUtils.lerp(
          blobRef.current.material.uniforms.u_intensity.value,
          hoverRef.current ? 0.85 : 0.15,
          0.02
        );
    }
    if (pointerRef.current) {
      pointerRef.current.material.uniforms.u_cursorPos.value =
        pointerUVRef.current;
    }
  });

  return (
    <>
      <DefaultWorld />

      <group position={[30, 0, 0]} className="colorful plane">
        <Text position={[0, 2.5, -1]} fontSize={0.25}>
          My first shader
        </Text>
        <Plane
          position={[0, 2, 0]}
          rotation={[-Math.PI * 0.5, 0, 0]}
          args={[3, 3, 32, 32]}
        >
          <shaderMaterial
            fragmentShader={colorfulPlane.fragmentShader}
            vertexShader={colorfulPlane.vertexShader}
            wireframe
          />
        </Plane>
      </group>

      <group position={[25, 0, 0]} className="my first uniform">
        <Text position={[0, 2.5, -1]} fontSize={0.25}>
          Uniforms!
        </Text>
        <Plane
          position={[0, 2, 0]}
          rotation={[-Math.PI * 0.5, 0, 0]}
          args={[3, 3, 32, 32]}
          ref={myFirstUniformMesh}
        >
          <shaderMaterial
            vertexShader={myFirstUniformsShader.vertexShader}
            fragmentShader={myFirstUniformsShader.fragmentShader}
            uniforms={myFirstUniforms}
          />
        </Plane>
      </group>

      <group position={[20, 0, 0]} className="varying and uniforms">
        <Text position={[0, 2.5, -1]} fontSize={0.25}>
          Varyings and Uniforms
        </Text>
        <Plane
          position={[0, 2, 0]}
          rotation={[-Math.PI * 0.5, 0, 0]}
          args={[3, 3, 32, 32]}
          ref={dreiShaderMesh}
        >
          <dreiShader />
        </Plane>
      </group>

      <group position={[20, 0, 0]} className="blob">
        <Text position={[0, 2.5, 1]} fontSize={0.25}>
          Blob With Hover
        </Text>
        <mesh
          position={[0, 2, 0]}
          rotation={[0, Math.PI * 0.25, 0]}
          ref={blobRef}
          onPointerOver={() => (hoverRef.current = true)}
          onPointerOut={() => (hoverRef.current = false)}
        >
          <icosahedronGeometry args={[1, 50]} />
          <helloLygiaShader />
        </mesh>
      </group>

      <group position={[15, 0, 0]} className="pointer">
        <Text position={[0, 3.25, 0]} fontSize={0.25}>
          Follow pointer
        </Text>
        <Plane
          position={[0, 2, 0]}
          args={[2, 2, 32, 32]}
          ref={pointerRef}
          onPointerMove={(e) => (pointerUVRef.current = e.uv)}
        >
          <pointerShader />
        </Plane>
      </group>

      <group position={[10, 0, 0]} className="hello lamina">
        <Text position={[0, 3.25, 0]} fontSize={0.25}>
          Distance (Lamina)
        </Text>
        <Plane position={[0, 2, 0]} args={[2, 2]}>
          <LayerMaterial transmission={0}>
            <myFirstCustomLayer mode="normal" />
            <Depth
              near={0}
              far={10}
              alpha={1}
              mapping="camera"
              mode="multiply"
            />
          </LayerMaterial>
        </Plane>
      </group>
      <group position={[5, 0, 0]} className="lamina example">
        <Text position={[0, 3.25, 0]} fontSize={0.25}>
          Lamina Example
        </Text>
        <mesh
          position={[0, 1.8, 0]}
          castShadow
          receiveShadow
          rotation-y={Math.PI / 2}
          scale={[2, 2, 2]}
        >
          <torusKnotGeometry args={[0.4, 0.05, 400, 8, 3, 7]} />

          <LayerMaterial color="#ff4eb8" name={"Flower"}>
            <Color color={"#ff4eb8"} />
            <Depth
              far={3}
              origin={[1, 1, 1]}
              colorA="#ff00e3"
              colorB="#00ffff"
              alpha={0.5}
              mode={"multiply"}
              mapping="camera"
            />
            <Depth
              near={0.25}
              far={2}
              colorA={"#ffe100"}
              alpha={0.5}
              mode={"lighten"}
              mapping={"vector"}
            />
            <Fresnel mode={"softlight"} />
          </LayerMaterial>
        </mesh>
      </group>

      <group position={[0, 0, 0]}>
        {/*<Text position={[0, 3.25, 0]} fontSize={0.25}>
          Dotgrid drawing
        </Text>*/}
        <Ghostie position={[0, 2, 0]} rotation={[Math.PI * 0.5, 0, 0]} />
        <Plane position={[0, 2, -0.15]} args={[6, 9]}>
          <meshPhongMaterial color="grey" />
        </Plane>
        <pointLight intensity={0.2} position={[0, 2, 0.45]} color="pink" />
        <pointLight intensity={0.75} position={[0, 1, 0.45]} color="green" />
        <pointLight intensity={0.75} position={[0, 3, 0.45]} color="green" />
      </group>
    </>
  );
}
