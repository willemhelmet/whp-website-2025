import { Plane, Text } from "@react-three/drei";

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

export function ColorfulPlane(props) {
  return (
    <group {...props}>
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
  );
}
