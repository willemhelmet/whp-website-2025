import { CuboidCollider } from "@react-three/rapier";
import { extend, useFrame } from "@react-three/fiber";
import { useSceneManager } from "../../contexts/SceneContext.jsx";
import { Text, Cylinder, shaderMaterial } from "@react-three/drei";
import { useRef } from "react";

const PortalShader = shaderMaterial(
  { u_time: 0 },
  resolveLygia(`
    varying vec2 v_uv;
    void main() {
      v_uv = uv;
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
    }
  `),
  resolveLygia(`
    #include "lygia/animation/easing.glsl"
    //uniform float u_time;
    varying vec2 v_uv;
    void main() {
      float alpha = 1.0 - exponentialOut(v_uv.y);
      alpha += exponentialIn(v_uv.y - 0.15);
      alpha *= 0.5;
      alpha = clamp(alpha, 0.0, 1.0);
      vec3 color = vec3(0.2, 0.5, 0.8);
      gl_FragColor = vec4(color, alpha);
    }
  `),
);
extend({ PortalShader });

export default function Portal({ position, rotation, targetScene, label }) {
  const { setCurrentScene } = useSceneManager();
  const portalRef = useRef();
  const textRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    const elapsedTime = clock.getElapsedTime();
    if (portalRef.current) {
      portalRef.current.material.uniforms.u_time.value = elapsedTime;
    }
    // console.log(state.camera.position);
    if (textRef.current) {
      textRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  const onEnter = (e) => {
    if (e.colliderObject.name == "character-capsule-collider") {
      console.log(`Portal entered! Switching to scene: ${targetScene}`);
      if (targetScene) {
        setCurrentScene(targetScene);
      }
    }
  };

  return (
    <group position={position} rotation={rotation}>
      {label && (
        <Text
          ref={textRef}
          fontSize={0.125}
          position={[0, 1, 0]}
          rotation={[0, Math.PI, 0]}
        >
          {label}
        </Text>
      )}
      {/* bottom */}
      <Cylinder position={[0, 0.025, 0]} args={[0.5, 0.5, 0.1]}>
        <meshBasicMaterial color="#3380CC" />
      </Cylinder>
      {/* middle */}
      <Cylinder ref={portalRef} position={[0, 1, 0]} args={[0.5, 0.5, 1.8]}>
        <portalShader transparent depthWrite={false} />
      </Cylinder>
      {/* top */}
      <Cylinder position={[0, 1.975, 0]} args={[0.5, 0.5, 0.1]}>
        <meshBasicMaterial color="#3380CC" />
      </Cylinder>
      <CuboidCollider
        sensor
        position={[0, 1, 0]}
        args={[0.5, 1, 0.5]}
        onIntersectionEnter={onEnter}
      />
    </group>
  );
}
