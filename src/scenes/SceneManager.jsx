import { useState } from "react";
import { SceneProvider } from "../contexts/SceneContext.jsx";
import { sceneDefinitions } from "../config/scenes";

export default function SceneManager() {
  const [currentScene, setCurrentScene] = useState("learnUIKit");
  // const Scene = scenes[currentScene];
  const SceneComponent = sceneDefinitions[currentScene]?.component;

  if (!SceneComponent) {
    console.warn(`Scene "${currentScene}" not found, falling back to hub`);
    return <SceneManager defaultScene="hub" />;
  }

  return (
    <SceneProvider
      currentScene={currentScene}
      setCurrentScene={setCurrentScene}
    >
      <SceneComponent />
    </SceneProvider>
  );
}
