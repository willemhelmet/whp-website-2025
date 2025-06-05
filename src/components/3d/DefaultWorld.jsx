import { Grid, Plane } from "@react-three/drei";
import Lighting from "./Lighting";
import { Environment } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";
import FlatTeleportSurface from "./FlatTeleportSurface";
import Portal from "./Portal";

export default function DefaultWorld() {
  return (
    <>
      <Environment preset="city" />
      <Grid
        position={[0, 0.01, 0]}
        infiniteGrid={true}
        cellColor={"#808080"}
        sectionColor={"#808080"}
      />
      <Plane scale={[100, 100, 1]} rotation={[-Math.PI * 0.5, 0, 0]}>
        <meshBasicMaterial color={"#404040"} />
      </Plane>
      <Portal position={[0, 0, -2]} targetScene={"hub"} label={"back to hub"} />
      <FlatTeleportSurface />
      <CuboidCollider position={[0, -0.5, 0]} args={[50, 0.5, 50]} />
      <Lighting />
    </>
  );
}
