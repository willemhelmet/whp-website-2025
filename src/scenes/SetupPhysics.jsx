import { useRef, useMemo } from "react";
import DefaultWorld from "../components/3d/DefaultWorld";
import {
  RigidBody,
  useSphericalJoint,
  InstancedRigidBodies,
} from "@react-three/rapier";
import { Box, Sphere } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

function SetupPhysics() {
  const ballMatRef = useRef();
  const [isSphereHovered, setIsSphereHovered] = useState(false);
  useGSAP(() => {
    if (isSphereHovered) {
      gsap.to(ballMatRef.current.color, {
        r: 0.1,
        g: 0.1,
        b: 0.1,
        duration: 0.25,
        ease: "power2.in",
      });
    } else {
      gsap.to(ballMatRef.current.color, {
        r: 0.0,
        g: 0.0,
        b: 0.0,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, [isSphereHovered]);
  const COUNT = 750;
  const instancedMeshes = useRef();
  const instances = useMemo(() => {
    const cubeInstances = [];
    const cubeHeight = 0.5; // Height of each cube
    const startY = cubeHeight / 2; // Start position for the first cube

    for (let i = 0; i < COUNT; i++) {
      cubeInstances.push({
        key: "instance_" + i,
        position: [0, startY + i * cubeHeight, 0],
      });
    }
    return cubeInstances;
  }, []);

  const ballRef = useRef();
  const cubeRef = useRef();

  useSphericalJoint(cubeRef, ballRef, [
    [0, 0, 0],
    [0, 8, 0],
  ]);

  const applyForce = () => {
    const ball = ballRef.current;
    if (ball) {
      ball.applyImpulse({ x: 0, y: 0, z: -100 }, true);
    }
  };

  return (
    <>
      <DefaultWorld />

      {/* Brick Wall */}
      <InstancedRigidBodies
        ref={instancedMeshes}
        instances={instances}
        colliders="cuboid"
      >
        <instancedMesh args={[undefined, undefined, COUNT]} count={COUNT}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="lightblue" />
        </instancedMesh>
      </InstancedRigidBodies>

      {/* Wrecking Ball */}
      <RigidBody
        ref={cubeRef}
        position={[0, 10, 4]}
        type="fixed"
        colliders="cuboid"
        restitution={0.01}
        mass={1}
      >
        <Box
          position={[0, 0, 0]}
          args={[0.5, 0.5, 0.5]}
          castShadow
          receiveShadow
        />
      </RigidBody>

      <RigidBody
        ref={ballRef}
        position={[0, 3, 4]}
        colliders="ball"
        mass={20}
        linearDamping={0.5}
        angularDamping={0.5}
      >
        <Sphere
          onPointerEnter={() => setIsSphereHovered(true)}
          onPointerLeave={() => setIsSphereHovered(false)}
          onClick={applyForce}
          args={[0.8, 32, 32]}
          castShadow
        >
          <meshStandardMaterial
            ref={ballMatRef}
            color="#333333"
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      </RigidBody>
    </>
  );
}

export default SetupPhysics;
