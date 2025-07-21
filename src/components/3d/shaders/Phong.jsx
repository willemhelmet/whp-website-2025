import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

export const Phong = shaderMaterial(
  {},
  /*glsl*/ `
  // vert
  void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  /*glsl*/ `
    // frag
    void main() {
      gl_FragColor.rgba = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `
);
