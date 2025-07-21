import { Plane, Text } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { LayerMaterial, Depth } from "lamina";
import { Abstract } from "lamina/vanilla";
import resolveLygia from "../utils/resolve-lygia.js";

class MyFirstCustomLayer extends Abstract {
  static vertexShader = resolveLygia(
    `
    varying vec2 v_uv;
    void main() {
      v_uv = uv;
      return position;
    }
    `,
  );
  static fragmentShader = resolveLygia(
    `
      varying vec2 v_uv;
      void main() {
        vec3 color = vec3(v_uv.x, v_uv.y, 1.0);
        return vec4(color, 1.0);
      }
    `,
  );

  constructor(props) {
    super(MyFirstCustomLayer, {
      name: "MyFirstCustomLayer",
      ...props,
    });
  }
}
extend({ MyFirstCustomLayer });

export function LaminaCustomLayer(props) {
  return (
    <group {...props}>
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
  );
}
