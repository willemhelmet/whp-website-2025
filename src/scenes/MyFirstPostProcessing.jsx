import DefaultWorld from "../components/3d/DefaultWorld.jsx";
import { Box, Sphere } from "@react-three/drei";

export default function MyFirstPostProcessing() {
  return (
    <>
      <DefaultWorld />
      <Sphere position={[0, 2, 0]} />
      <Box position={[2, 2, 0]} />
    </>
  );
}
