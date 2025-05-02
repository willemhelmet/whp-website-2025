import React from "react";
import Player from "../components/3d/player";
import { Vector3 } from "three";
import { TeleportTarget } from "@react-three/xr";
import { useState } from "react";
import { Grid } from "@react-three/drei";
import OrbitControlsWrapper from "../components/utils/OrbitControlsWrapper";

function SetupTeleportation() {
  const [position, setPosition] = useState(new Vector3());

  return (
    <>
      <OrbitControlsWrapper />
      <Player position={position} />
      <Grid infiniteGrid={true} sectionColor={"#0f0f0f"} />
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
