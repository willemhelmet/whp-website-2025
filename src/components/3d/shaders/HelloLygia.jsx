import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import resolveLygia from "../../../utils/resolve-lygia.js";

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
  `),
);
extend({ HelloLygiaShader });

export function HelloLygia(props) {
  const blobRef = useRef();
  const hoverRef = useRef(false);

  useFrame(() => {
    if (blobRef.current) {
      blobRef.current.material.uniforms.u_time.value += 0.01;
      blobRef.current.material.uniforms.u_intensity.value =
        THREE.MathUtils.lerp(
          blobRef.current.material.uniforms.u_intensity.value,
          hoverRef.current ? 0.85 : 0.15,
          0.02,
        );
    }
  });

  return (
    <group {...props}>
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
  );
}
