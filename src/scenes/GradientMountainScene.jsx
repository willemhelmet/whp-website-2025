// import DefaultWorld from "../components/3d/DefaultWorld.jsx";
import FlatTeleportSurface from "../components/3d/FlatTeleportSurface";
import { Instances, Instance } from "@react-three/drei";
import { LayerMaterial, Gradient } from "lamina";
import { CuboidCollider } from "@react-three/rapier";
import { useControls } from "leva";
import Portal from "../components/3d/Portal.jsx";

const randomVector = (r) => [
  r / 2 - Math.random() * r,
  0.5,
  r / 2 - Math.random() * r,
];
const randomEulerAngle = () => [0, Math.random() * Math.PI * 2, 0];

const data = Array.from({ length: 1000 }, (r = 50) => ({
  position: randomVector(r),
  rotation: randomEulerAngle(),
}));

function Mountain(props) {
  return <Instance position={props.position} rotation={props.rotation} />;
}

function Mountains({ colorA, colorB }) {
  return (
    <Instances limit={2000}>
      <coneGeometry args={[0.5, 1, 4]} />
      <LayerMaterial lighting="basic" transparent opacity={0.5}>
        <Gradient
          colorA={colorA}
          colorB={colorB}
          start={1}
          end={0.0}
          axes={"y"}
          mapping={"uv"}
        ></Gradient>
      </LayerMaterial>
      {data.map((item, i) => {
        return (
          <Mountain key={i} position={item.position} rotation={item.rotation} />
        );
      })}
    </Instances>
  );
}

export default function GradientMountainScene() {
  const { colorA, colorB } = useControls({
    colorA: "#ff0000",
    colorB: "#FFA500",
  });

  return (
    <>
      <Portal position={[0, 0, -2]} targetScene={"hub"} label={"back to hub"} />
      <color attach="background" args={[colorB]} />
      <fogExp2 attach="fog" color={colorB} density={0.1} />
      <CuboidCollider position={[0, -0.5, 0]} args={[50, 0.5, 50]} />
      <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial color={colorB} />
      </mesh>
      <Mountains colorA={colorA} colorB={colorB} />
      <FlatTeleportSurface />
    </>
  );
}
