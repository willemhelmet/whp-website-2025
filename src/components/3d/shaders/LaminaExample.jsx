import { LayerMaterial, Depth, Fresnel, Color } from "lamina";
import { useGSAP } from "@gsap/react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import gsap from "gsap";

export function LaminaExample(props) {
  const meshRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(meshRef.current.rotation, {
        x: Math.PI * 2,
        duration: 4,
        ease: "power2.inOut",
      }).to(meshRef.current.rotation, {
        z: Math.PI * 2,
        duration: 4,
        ease: "power2.inOut",
      });
    },
    { scope: meshRef },
  );

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        position={[0, 1.8, 0]}
        castShadow
        receiveShadow
        scale={[2, 2, 2]}
      >
        <torusKnotGeometry args={[0.4, 0.05, 400, 8, 3, 7]} />

        <LayerMaterial color="#ff4eb8" name={"Flower"}>
          <Color color={"#ff4eb8"} />
          <Depth
            far={3}
            origin={[1, 1, 1]}
            colorA="#ff00e3"
            colorB="#00ffff"
            alpha={0.5}
            mode={"multiply"}
            mapping="camera"
          />
          <Depth
            near={0.25}
            far={2}
            colorA={"#ffe100"}
            alpha={0.5}
            mode={"lighten"}
            mapping={"vector"}
          />
          <Fresnel mode={"softlight"} />
        </LayerMaterial>
      </mesh>
    </group>
  );
}
