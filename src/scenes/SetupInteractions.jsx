import { useState, useRef } from "react";
import { Vector3 } from "three";
import { TeleportTarget } from "@react-three/xr";
import {
  Grid,
  Plane,
  Box,
  Sphere,
  Cylinder,
  Cone,
  Torus,
  Sky,
} from "@react-three/drei";
import Player from "../components/3d/player";
import OrbitControlsWrapper from "../components/utils/OrbitControlsWrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lighting from "../components/3d/Lighting";
import DefaultWorld from "../components/3d/DefaultWorld";

function SetupInteractions() {
  const [position, setPosition] = useState(new Vector3());
  const sunPosition = new Vector3(10, 10, 10);

  const [isSphereHovered, setIsSphereHovered] = useState(false);

  const [isConeHovered, setIsConeHovered] = useState(false);
  const coneMaterialRef = useRef();

  const [isCylinderClicked, setIsCylinderClicked] = useState(false);
  const cylinderRef = useRef();

  // Torus states
  const [isTorusHovered, setIsTorusHovered] = useState(false);
  const [isTorusClicked, setIsTorusClicked] = useState(false);
  const [torusRotation, setTorusRotation] = useState(0);
  const torusRef = useRef();
  const torusMaterialRef = useRef();

  useGSAP(() => {
    if (isConeHovered) {
      gsap.to(coneMaterialRef.current.color, {
        r: 0.2,
        g: 0.8,
        b: 0.2,
        duration: 0.25,
        ease: "power2.in",
      });
    } else {
      gsap.to(coneMaterialRef.current.color, {
        r: 0.8,
        g: 0.2,
        b: 0.2,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, [isConeHovered]);

  useGSAP(() => {
    if (isCylinderClicked) {
      gsap.to(cylinderRef.current.scale, {
        x: 0.6,
        y: 1.1,
        z: 0.6,
        duration: 0.125,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(cylinderRef.current.scale, {
        x: 0.5,
        y: 1.0,
        z: 0.5,
        duration: 0.125,
        ease: "power3.inOut",
      });
    }
  }, [isCylinderClicked]);

  // Torus animations
  useGSAP(() => {
    if (isTorusHovered) {
      gsap.to(torusRef.current.rotation, {
        y: torusRotation + Math.PI * 2,
        duration: 2,
        ease: "none",
        repeat: -1,
      });
      gsap.to(torusMaterialRef.current, {
        emissiveIntensity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.killTweensOf(torusRef.current.rotation);
      gsap.to(torusMaterialRef.current, {
        emissiveIntensity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isTorusHovered, torusRotation]);

  useGSAP(() => {
    if (isTorusClicked) {
      gsap.to(torusRef.current.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 0.2,
        ease: "back.out(1.7)",
      });
    } else {
      gsap.to(torusRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.2,
        ease: "back.out(1.7)",
      });
    }
  }, [isTorusClicked]);

  return (
    <>
      <Plane
        position={[0, 0, 0]}
        rotation={[-Math.PI * 0.5, 0, 0]}
        scale={[100, 100, 1]}
      >
        <meshBasicMaterial color={"#404040"} />
      </Plane>
      <Sky sunPosition={sunPosition} />

      {/* Random 3D Objects */}
      <Box
        position={[3, 0.5, 2]}
        scale={[1, 1, 1]}
        castShadow
        receiveShadow
        onClick={(event) => console.log("I've been clicked", event)}
      >
        <meshPhongMaterial color="#ff6b6b" />
      </Box>

      <Sphere
        position={[-2, 1, -3]}
        scale={[1, 1, 1]}
        castShadow
        receiveShadow
        onPointerEnter={() => setIsSphereHovered(true)}
        onPointerLeave={() => setIsSphereHovered(false)}
      >
        <meshPhongMaterial color={isSphereHovered ? "#00ff00" : "#ff0000"} />
      </Sphere>

      <Cylinder
        ref={cylinderRef}
        position={[4, 1, -2]}
        scale={[0.5, 1, 0.5]}
        castShadow
        receiveShadow
        onPointerDown={() => setIsCylinderClicked(true)}
        onPointerUp={() => setIsCylinderClicked(false)}
        onPointerLeave={() => setIsCylinderClicked(false)}
      >
        <meshPhongMaterial color="#45b7d1" />
      </Cylinder>

      <Cone
        position={[-3, 0.6, 4]}
        scale={[1, 1.5, 1]}
        castShadow
        receiveShadow
        onPointerEnter={() => setIsConeHovered(true)}
        onPointerLeave={() => setIsConeHovered(false)}
      >
        <meshStandardMaterial ref={coneMaterialRef} color="#96ceb4" />
      </Cone>

      <Torus
        ref={torusRef}
        position={[0, 1, -5]}
        scale={[1, 1, 1]}
        args={[1, 0.3, 16, 32]}
        castShadow
        receiveShadow
        onPointerEnter={() => setIsTorusHovered(true)}
        onPointerLeave={() => setIsTorusHovered(false)}
        onPointerDown={() => setIsTorusClicked(true)}
        onPointerUp={() => setIsTorusClicked(false)}
        onPointerMove={(e) => {
          if (isTorusClicked) {
            setTorusRotation(e.point.x * 0.5);
          }
        }}
      >
        <meshStandardMaterial
          ref={torusMaterialRef}
          color="#ffcc5c"
          emissive="#ffcc5c"
          emissiveIntensity={0}
          metalness={0.5}
          roughness={0.2}
        />
      </Torus>
      <Lighting />
      <DefaultWorld />
    </>
  );
}

export default SetupInteractions;
