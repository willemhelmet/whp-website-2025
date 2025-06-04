import { usePlayer } from "../../contexts/PlayerContext";
import { TeleportTarget } from "@react-three/xr";

export default function FlatTeleportSurface({
  width = 100,
  height = 1,
  depth = 100,
  position = [0, -0.5, 0],
}) {
  const { setPosition } = usePlayer();
  return (
    <TeleportTarget onTeleport={setPosition}>
      <mesh scale={[width, height, depth]} position={position}>
        <boxGeometry />
        <meshBasicMaterial color="green" opacity={0.0} transparent />
      </mesh>
    </TeleportTarget>
  );
}
