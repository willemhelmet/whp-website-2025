import DefaultWorld from "../components/3d/DefaultWorld.jsx";
import { Billboard, Plane, shaderMaterial } from "@react-three/drei";
import { extend, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, Texture } from "three";
import { useRef } from "react";

const SpookyFaceShader = shaderMaterial(
  { u_time: 0, u_texture1: new Texture(), u_texture2: new Texture() },
  `
  uniform float u_time;
  uniform sampler2D u_texture1;
  uniform sampler2D u_texture2;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    float sin_time = 0.5 + 0.5 * sin(u_time);
    float displacement1 = texture2D(u_texture1, uv).r;
    float displacement2 = texture2D(u_texture2, uv).r;
    float displacement = mix(displacement1, displacement2, sin_time);
    vec3 newPosition = position + normal * displacement * 0.2;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }`,
  `
  uniform float u_time;
  uniform sampler2D u_texture1;
  uniform sampler2D u_texture2;
  varying vec2 vUv;
  void main() {
    float sin_time = 0.5 + 0.5 * sin(u_time);
    vec3 texture1 = texture2D(u_texture1, fract(vUv)).rgb;
    vec3 texture2 = texture2D(u_texture2, vUv).rgb;
    vec3 color = mix(texture1, texture2, sin_time);
    gl_FragColor = vec4(color.rgb, 1.0);

  }`
);

extend({ SpookyFaceShader });

function SpookyFace() {
  const spookyFaceTexture1 = useLoader(
    TextureLoader,
    "/textures/spooky-face/spooky-face-1.png"
  );
  const spookyFaceTexture2 = useLoader(
    TextureLoader,
    "/textures/spooky-face/spooky-face-2.png"
  );

  const spookyFaceRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    const elapsedTime = clock.getElapsedTime();
    if (spookyFaceRef.current) {
      spookyFaceRef.current.material.uniforms.u_time.value = elapsedTime;
    }
  });
  return (
    <>
      <DefaultWorld portal={false} />
      <Billboard position={[0, 1, 4]}>
        <Plane
          ref={spookyFaceRef}
          args={[2, 2, 256, 256]}
          // rotation={[0, Math.PI, 0]}
        >
          {/* <meshBasicMaterial map={spookyFaceTexture} /> */}
          <spookyFaceShader
            transparent
            u_texture1={spookyFaceTexture1}
            u_texture2={spookyFaceTexture2}
          />
        </Plane>
      </Billboard>
    </>
  );
}

export default SpookyFace;
