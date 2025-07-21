import { shaderMaterial, Plane, Text } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

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
  `,
);

extend({ DreiShader });

export function DreiShaderComponent(props) {
  const dreiShaderMesh = useRef();

  useFrame((state) => {
    const { clock } = state;
    if (dreiShaderMesh.current) {
      dreiShaderMesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  return (
    <group {...props}>
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
  );
}
