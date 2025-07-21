import { Plane } from "@react-three/drei";
import { Ghostie } from "../components/3d/Ghostie.jsx";

export function GhostieScene(props) {
  return (
    <group {...props}>
      <Ghostie position={[0, 2, 0]} rotation={[Math.PI * 0.5, 0, 0]} />
      <Plane position={[0, 2, -0.15]} args={[6, 9]}>
        <meshPhongMaterial color="grey" />
      </Plane>
      <pointLight intensity={0.2} position={[0, 2, 0.45]} color="pink" />
      <pointLight intensity={0.75} position={[0, 1, 0.45]} color="green" />
      <pointLight intensity={0.75} position={[0, 3, 0.45]} color="green" />
    </group>
  );
}
