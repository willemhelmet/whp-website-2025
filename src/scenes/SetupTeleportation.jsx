import { TeleportTarget } from "@react-three/xr";
import DefaultWorld from "../components/3d/DefaultWorld";

function SetupTeleportation() {
  return (
    <>
      <DefaultWorld />
      <TeleportTarget onTeleport={setPosition}>
        <mesh scale={[10, 1, 10]} position={[21, 1.5, 0]}>
          <boxGeometry />
          <meshBasicMaterial color="green" />
        </mesh>
      </TeleportTarget>
      <TeleportTarget onTeleport={setPosition}>
        <mesh scale={[10, 1, 10]} position={[11, -0.5, 0]}>
          <boxGeometry />
          <meshBasicMaterial color="green" />
        </mesh>
      </TeleportTarget>
      <TeleportTarget onTeleport={setPosition}>
        <mesh scale={[10, 1, 10]} position={[0, -0.5, 0]}>
          <boxGeometry />
          <meshBasicMaterial color="green" />
        </mesh>
      </TeleportTarget>
    </>
  );
}

export default SetupTeleportation;
