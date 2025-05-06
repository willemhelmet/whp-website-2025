import { useRef } from "react";
import DefaultWorld from "../components/3d/DefaultWorld";
import { RigidBody, useSphericalJoint } from "@react-three/rapier";
import { Box, Sphere } from "@react-three/drei";

function SetupPhysics() {
  const cubePositions = [];
  for (let x = -2.5; x <= 2.5; x++) {
    let z = 0;
    for (let y = 0.5; y <= 6; y++) {
      cubePositions.push([x, y, z]);
      z -= 0.125;
    }
  }

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
      {cubePositions.map((position, index) => (
        <RigidBody
          key={index}
          position={position}
          colliders={"cuboid"}
          restitution={0.01}
          mass={1}
        >
          <Box position={[0, 0, 0]} args={[1, 1, 1]} castShadow receiveShadow />
        </RigidBody>
      ))}

      <RigidBody
        ref={cubeRef}
        position={[0, 10, 4]}
        type="fixed"
        colliders="cuboid"
        restitution={0.01}
        mass={1}
      >
        <Box position={[0, 0, 0]} args={[1, 1, 1]} castShadow receiveShadow />
      </RigidBody>

      <RigidBody
        ref={ballRef}
        position={[0, 3, 4]}
        colliders="ball"
        mass={20}
        linearDamping={0.5}
        angularDamping={0.5}
      >
        <Sphere onClick={applyForce} args={[0.8, 32, 32]} castShadow>
          <meshStandardMaterial
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
