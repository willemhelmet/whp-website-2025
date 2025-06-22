import DefaultWorld from "../components/3d/DefaultWorld";
import {
  shaderMaterial,
  Box,
  Sphere,
  Cylinder,
  Helper,
} from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useEffect } from "react";
import { useControls } from "leva";

const SpotlightShader = shaderMaterial(
  {},
  resolveLygia(`
    attribute vec3 a_normal;
    attribute vec3 a_position;
    varying vec2 v_uv;
    varying vec3 v_normal;
    varying vec3 v_position;
    void main() {
      v_uv = uv;
      v_normal = normalize(a_normal);
      v_position = a_position;

      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;

      gl_Position  = projectionMatrix * viewPosition;
    }
  `),
  resolveLygia(`
    varying vec2 v_uv;
    varying vec3 v_normal;
    varying vec3 v_position;

    void main() {

    vec3 color = vec3(v_uv.y);

    gl_FragColor = vec4(, v_uv.y * 0.5);
  }
  `),
);
extend({ SpotlightShader });

function Spotlight({ position, rotation, distance = 10 }) {
  const light = useRef();
  const group = useRef();
  const target = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (group.current) {
      // Set the group's rotation
      group.current.rotation.set(rotation[0], rotation[1], rotation[2]);

      // Calculate the forward vector
      const forward = new THREE.Vector3(0, 0, -1);
      forward.applyQuaternion(group.current.quaternion);

      // Set the target's position
      const targetPosition = group.current.position
        .clone()
        .add(forward.multiplyScalar(10));
      target.position.copy(targetPosition);

      if (light.current) {
        light.current.target = target;
      }
    }
  }, [rotation, target]);

  return (
    <group ref={group} position={position}>
      <axesHelper />
      <group rotation={[Math.PI * 0.5, 0, 0]}>
        <mesh position={[0, -distance / 2, 0]}>
          <coneGeometry
            openEnded={true}
            args={[distance * 0.415, distance, 32]}
          />
          {/* <coneGeometry args={[3, 32, 32]} /> */}
          <spotlightShader
            side={THREE.DoubleSide}
            transparent
            depthWrite={false}
          />
        </mesh>
      </group>
      <spotLight
        ref={light}
        position={[0, 0, 0]}
        intensity={10}
        angle={[Math.PI * 0.125]}
        target-position={[0, 2, 0]}
        distance={distance}
      >
        <Helper type={THREE.SpotLightHelper} args={["#f00"]} />
      </spotLight>
    </group>
  );
}
export default function VolumetricSpotLightArticleScene() {
  // const { angle } = useControls({
  //   angle: [0, 0, 0],
  // });
  return (
    <>
      <axesHelper />
      <DefaultWorld lighting={false} sky={false} grid={false} />
      <color attach="background" args={["#112"]} />
      <mesh position={[0, 0, 0]} rotation={[Math.PI * -0.5, 0, 0]}>
        <planeGeometry args={[100, 100]}></planeGeometry>
        <meshBasicMaterial color="#222" />
      </mesh>
      <group position={[2, 0, 5]}>
        <Box position={[0, 0.5, 0]}>
          <meshPhongMaterial />
        </Box>
        <Sphere position={[-1.3, 0.5, 0.5]}>
          <meshPhongMaterial />
        </Sphere>
        <Cylinder position={[0, 0.5, 1]}>
          <meshPhongMaterial />
        </Cylinder>
      </group>
      <Spotlight
        position={[-7, 4, 8]}
        rotation={[Math.PI * -0.4, Math.PI * -0.3, Math.PI * -0.433]}
        distance={20}
      />
    </>
  );
}
