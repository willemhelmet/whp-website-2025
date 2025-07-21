import DefaultWorld from "../components/3d/DefaultWorld.jsx";
import { ColorfulPlane } from "../shaders/ColorfulPlane.jsx";
import { MyFirstUniforms } from "../shaders/MyFirstUniforms.jsx";
import { DreiShaderComponent } from "../shaders/DreiShaderComponent.jsx";
import { HelloLygia } from "../shaders/HelloLygia.jsx";
import { PointerShaderComponent } from "../shaders/PointerShaderComponent.jsx";
import { LaminaCustomLayer } from "../shaders/LaminaCustomLayer.jsx";
import { LaminaExample } from "../shaders/LaminaExample.jsx";
import { GhostieScene } from "../shaders/GhostieScene.jsx";

export default function MyFirstShader() {
  return (
    <>
      <DefaultWorld />
      <ColorfulPlane position={[30, 0, 0]} />
      <MyFirstUniforms position={[25, 0, 0]} />
      <DreiShaderComponent position={[20, 0, 0]} />
      <HelloLygia position={[15, 0, 0]} />
      <PointerShaderComponent position={[10, 0, 0]} />
      <LaminaCustomLayer position={[5, 0, 0]} />
      <LaminaExample position={[0, 0, 0]} />
      <GhostieScene position={[-5, 0, 0]} />
    </>
  );
}