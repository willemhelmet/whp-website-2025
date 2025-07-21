import DefaultWorld from "../components/3d/DefaultWorld.jsx";
import { ColorfulPlane } from "../components/3d/shaders/ColorfulPlane.jsx";
import { MyFirstUniforms } from "../components/3d/shaders/MyFirstUniforms.jsx";
import { DreiShaderComponent } from "../components/3d/shaders/DreiShaderComponent.jsx";
import { HelloLygia } from "../components/3d/shaders/HelloLygia.jsx";
import { PointerShaderComponent } from "../components/3d/shaders/PointerShaderComponent.jsx";
import { LaminaCustomLayer } from "../components/3d/shaders/LaminaCustomLayer.jsx";
import { LaminaExample } from "../components/3d/shaders/LaminaExample.jsx";
import { GhostieScene } from "../components/3d/shaders/GhostieScene.jsx";

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
