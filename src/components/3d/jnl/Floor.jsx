import { RigidBody } from "@react-three/rapier";

export default function Floor() {
  //<Plane args={[50, 50]} rotation={[-Math.PI * 0.5, 0, 0]} />
  return (
    <RigidBody type="fixed" position={[0, -1.5, 0]}>
      <mesh>
        {/* This is a very tight rectangle that hugs the perimiter of jnl */}
        {/* <boxGeometry args={[15, 1, 30]} /> */}
        <boxGeometry args={[50, 1, 50]} />
        <meshBasicMaterial color="green" transparent opacity={0} />
      </mesh>
    </RigidBody>
  );
}
