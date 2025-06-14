/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 /Users/whp/Documents/Blender/Projects/Friends/02/ghostie.glb --transform 
Files: /Users/whp/Documents/Blender/Projects/Friends/02/ghostie.glb [1.34MB] > /Users/whp/Documents/HTML/WHP_WEBSITE_2025_ROOT/whp-website-2025/ghostie-transformed.glb [130.38KB] (90%)
*/

import { useGLTF } from "@react-three/drei";
import { Fresnel, Depth, Color, LayerMaterial } from "lamina";
import * as THREE from "three";

export function Ghostie(props) {
  const { nodes, materials } = useGLTF(
    "/public/models/ghostie-transformed.glb",
  );
  return (
    <group {...props} dispose={null} scale={10}>
      <mesh geometry={nodes.Ghostie_Eyes_01.geometry}>
        <LayerMaterial>
          <Color color={new THREE.Color(materials.Green.color)} />
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

      <mesh geometry={nodes.Ghostie_Glasses_01.geometry}>
        <LayerMaterial>
          <Color color={new THREE.Color(materials.Pink.color)} />
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

useGLTF.preload("/ghostie-transformed.glb");
