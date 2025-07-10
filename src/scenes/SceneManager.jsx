import { SceneProvider } from "../contexts/SceneContext.jsx";
import { useSceneManager } from "../hooks/useScene.js";
import { sceneDefinitions } from "../config/scenes";

function CurrentScene() {
  const { currentScene } = useSceneManager();
  const SceneComponent = sceneDefinitions[currentScene]?.component;

  if (!SceneComponent) {
    console.warn(`Scene "${currentScene}" not found, falling back to hub`);
    // You might want to render a default component here instead of null
    return null;
  }

  return <SceneComponent />;
}

export default function SceneManager() {
  return (
    <SceneProvider initialScene="spookyFace">
      <CurrentScene />
    </SceneProvider>
  );
}
