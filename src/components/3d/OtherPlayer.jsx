import { Box } from "@react-three/drei";

export default function OtherPlayer({ position }) {
  return (
    <>
      <group position={position}>
        <Box args={[0.4, 0.4, 0.4]}>
          <meshStandardMaterial color={"red"} />
        </Box>
      </group>
    </>
  );
}
