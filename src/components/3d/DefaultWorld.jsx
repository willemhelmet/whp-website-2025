import React from "react";
import { Box, Grid, Plane } from "@react-three/drei";
import Lighting from "./Lighting";
import { TeleportTarget } from "@react-three/xr";
import { usePlayer } from "../../contexts/PlayerContext";
import { Environment } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";

function DefaultWorld() {
  const { setPosition } = usePlayer();
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
      <TeleportTarget onTeleport={setPosition}>
        <mesh scale={[100, 1, 100]} position={[0, -0.5, 0]}>
          <boxGeometry />
          <meshBasicMaterial color="green" opacity={0.0} transparent />
        </mesh>
      </TeleportTarget>
      <CuboidCollider position={[0, -0.5, 0]} args={[50, 0.5, 50]} />

      <Lighting />
    </>
  );
}

export default DefaultWorld;
