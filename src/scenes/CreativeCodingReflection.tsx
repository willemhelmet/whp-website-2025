import SolarSystem from "../components/3d/particle-effects/SolarSystem.jsx";
import { useRef } from "react";
import {
  useGLTF,
  Environment,
  MeshReflectorMaterial,
  Sky,
  Stars,
  Sparkles,
} from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";
import { MathUtils, Color } from "three";
import { LayerMaterial, Gradient } from "lamina";
import { useFrame } from "@react-three/fiber";

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
  const array = Array.from({ length: 50 }, (_, i) => i);
  useFrame((state, delta) => {
    if (orbsRef.current) {
      orbsRef.current.rotation.y += delta * 0.1;
    }
  }, []);
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

function Mountain({ position }) {
  return (
    <>
      <mesh position={position}>
        <coneGeometry args={[0.7, MathUtils.randFloat(3, 5), 12]} />
        <LayerMaterial lighting="basic">
          <Gradient
            colorA="#810000" // Color at the bottom (start)
            colorB="#ffd0d0" // Color at the top (end)
            axes="y" // Apply gradient along the Y-axis
            start={0} // World Y-coordinate where colorA is pure
            end={10} // World Y-coordinate where colorB is pure
          />
        </LayerMaterial>
      </mesh>
    </>
  );
}
function Mountains() {
  const numMountains = 65; // Number of mountains to create
  const horizonDistance = 40; // Base distance from the center (0,0,0)
  const mountainsData = [];

  for (let i = 0; i < numMountains; i++) {
    // Distribute mountains in a full circle
    const angle = (i / numMountains) * Math.PI * 2;

    // Randomize properties for each mountain
    const currentRadius = MathUtils.randFloat(1.5, 5); // Base radius of the cone
    const currentHeight = MathUtils.randFloat(4, 15); // Height of the cone

    // Add some randomness to the actual distance from the center
    const actualDistance = horizonDistance + MathUtils.randFloat(-7, 7);

    const x = Math.cos(angle) * actualDistance;
    const z = Math.sin(angle) * actualDistance;
    // To place the base of the cone at y=0, its center must be at y = height / 2
    const y = currentHeight / 2;

    mountainsData.push({
      key: `mountain_${i}`,
      position: [x, y, z],
      args: [currentRadius, currentHeight, 12], // coneGeometry args: radius, height, segments
    });
  }

  return (
    <>
      {mountainsData.map((data) => (
        <mesh key={data.key} position={data.position}>
          <coneGeometry args={data.args} />
          <meshStandardMaterial color="dimgray" />{" "}
        </mesh>
      ))}
    </>
  );
}

export default function CreativeCodingReflection(props) {
  const { nodes, materials } = useGLTF(
    "public/models/the_thinker_by_auguste_rodin-transformed.glb",
  );
  return (
    <>
      <directionalLight position={[10, 10, 0]} intensity={10} color="purple" />
      <ambientLight intensity={0.5} color="orange" />
      <pointLight position={[0.5, 2, 1]} intensity={10} color="red" />
      <Environment preset="city"></Environment>
      <group position={[0, 0, 2]} rotation={[0, (-0.75 * Math.PI) / 2, 0]}>
        {/* <Sparkles position={[-0.55, 1.65, 0.0]} scale={0.25} /> */}
        <Sparkles
          position={[
            -0.6700000000000002, 1.7200000000000002, 0.46000000000000013,
          ]}
          scale={0.25}
        />
        <mesh
          geometry={nodes.Object_2.geometry}
          position={[0.007, 0.001, 0.005]}
          rotation={[-1.576, -0.008, 0]}
        >
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
      <Orbs position={[-0.65, 1.75, 1.48]} radius={0.3} />
      <SolarSystem />
      <group>
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            color={new Color(0.1, 0.1, 0.1)}
            blur={[1000, 1000]}
            resolution={2048}
            mixBlur={1}
            mixStrength={2}
            depthScale={2}
            minDepthThreshold={0.9}
            maxDepthThreshold={1}
          />
        </mesh>
        <CuboidCollider position={[0, -0.5, 0]} args={[50, 0.5, 50]} />
      </group>
      <Mountains />
      <Sky
        turbidity={0.5}
        rayleigh={0}
        mieCoefficient={0.005}
        mieDirectionalG={0.35}
        elevation={0.0}
        azimuth={180.0}
        exposure={0.16}
      />
      <Stars />
    </>
  );
}
