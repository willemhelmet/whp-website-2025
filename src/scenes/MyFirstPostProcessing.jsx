import DefaultWorld from "../components/3d/DefaultWorld.jsx";
import { Box, Sphere } from "@react-three/drei";
import Dragon from "../components/3d/Dragon.jsx";

export default function MyFirstPostProcessing() {
  return (
    <>
      <DefaultWorld />
      <Dragon />
      <Sphere position={[-2.5, 2, 0]} />
      <Box position={[2, 2, 0]} />
    </>
  );
}
