import { useGLTF, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Orb({ position, radius }) {
  return (
    <>
      <mesh position={position}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
}

function Orbs({ position, radius }) {
  const orbsRef = useRef();

  useGSAP(
    () => {
      if (orbsRef.current) {
        gsap.to(orbsRef.current.rotation, {
          y: Math.PI * 2,
          duration: 40,
          repeat: -1,
          ease: "none",
        });
      }
    },
    { scope: orbsRef },
  );

  const array = Array.from({ length: 50 }, (_, i) => i);
  return (
    <>
      <group position={position} ref={orbsRef}>
        {array.map((index) => {
          const angle = (index / array.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return <Orb key={index} position={[x, 0, z]} radius={0.0125} />;
        })}
      </group>
    </>
  );
}

export default function Sculpture(props) {
  const { nodes } = useGLTF(
    "public/models/the_thinker_by_auguste_rodin-transformed.glb",
  );

  return (
    <group {...props}>
      <axesHelper />
      <Sparkles position={[-0.77, 1.72, 0.4]} scale={0.25} />
      <mesh
        geometry={nodes.Object_2.geometry}
        position={[0.007, 0.001, 0.005]}
        rotation={[-1.576, -0.008, 0]}
      >
        <meshStandardMaterial color="white" />
      </mesh>
      <Orbs position={[-0.75, 1.85, 0.4]} radius={0.3} />
    </group>
  );
}
