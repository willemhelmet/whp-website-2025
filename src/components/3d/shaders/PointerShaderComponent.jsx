import { shaderMaterial, Plane, Text } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import resolveLygia from "../../../utils/resolve-lygia.js";

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
    `,
  ),
  resolveLygia(
    `
    uniform vec2 u_cursorPos;
    varying vec2 vUv;
    void main() {
      vec3 color = 1.0 - vec3(step(distance(vUv, u_cursorPos), 0.125));
      gl_FragColor = vec4(color, 1.0);
    }
    `,
  ),
);
extend({ PointerShader });

export function PointerShaderComponent(props) {
  const pointerRef = useRef();
  const pointerUVRef = useRef(new THREE.Vector2());

  useFrame(() => {
    if (pointerRef.current) {
      pointerRef.current.material.uniforms.u_cursorPos.value = pointerUVRef.current;
    }
  });

  return (
    <group {...props}>
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
  );
}
