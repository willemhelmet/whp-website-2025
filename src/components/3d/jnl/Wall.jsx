import { RigidBody } from "@react-three/rapier";
function Wall({ position, rotation, args }) {
  return (
    <RigidBody type="fixed" position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={args} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </RigidBody>
  );
}

export default Wall;
