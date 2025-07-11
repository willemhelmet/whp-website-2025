import { Box } from "@react-three/drei";

export default function OtherPlayer({ position, rotation }) {
  return (
    <>
      <group position={position} rotation={rotation}>
        <Box args={[0.4, 0.4, 0.4]}>
          <meshStandardMaterial color={"red"} />
        </Box>
      </group>
    </>
  );
}
