import { Sky, Environment, Grid, Plane } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";
import FlatTeleportSurface from "./FlatTeleportSurface";
import Portal from "./Portal";
import { Vector3 } from "three";

export default function DefaultWorld({
  lighting = true,
  sky = true,
  grid = true,
}) {
  const sunPosition = new Vector3(10, 10, 10);
  return (
    <>
      <Environment preset="city" />
      {grid && (
        <group>
          <Grid
            position={[0, 0.01, 0]}
            infiniteGrid={true}
            cellColor={"#808080"}
            sectionColor={"#808080"}
          />
          <Plane scale={[100, 100, 1]} rotation={[-Math.PI * 0.5, 0, 0]}>
            <meshBasicMaterial color={"#404040"} />
          </Plane>
        </group>
      )}
      <Portal position={[0, 0, -2]} targetScene={"hub"} label={"back to hub"} />
      <FlatTeleportSurface />
      <CuboidCollider position={[0, -0.5, 0]} args={[50, 0.5, 50]} />
      {sky && <Sky sunPosition={sunPosition} />}
      {lighting && (
        <group>
          {/* Basic lighting setup */}
          <directionalLight
            position={sunPosition}
            intensity={1}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
            shadow-camera-near={0.1}
            shadow-camera-far={100}
          />
          <ambientLight intensity={0.2} />
        </group>
      )}
    </>
  );
}
