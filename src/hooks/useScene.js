import { useContext } from "react";
import SceneContext from "../contexts/SceneContext.jsx";

export function useScene() {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error("useScene must be used within a SceneProvider");
  }
  return context;
}

export function useSceneManager() {
  return useScene();
}
