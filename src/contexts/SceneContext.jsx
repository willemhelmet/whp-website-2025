import { createContext, useState, useCallback } from "react";
import PropTypes from "prop-types";

const SceneContext = createContext();

export const SceneProvider = ({ children, initialScene }) => {
  const [currentScene, setCurrentScene] = useState(initialScene);
  const [isTeleporting, setIsTeleporting] = useState(false);

  const teleportTo = useCallback((sceneName) => {
    setIsTeleporting(true);
    setCurrentScene(sceneName);
  }, []);

  const completeTeleport = useCallback(() => {
    setIsTeleporting(false);
  }, []);

  return (
    <SceneContext.Provider
      value={{
        currentScene,
        isTeleporting,
        teleportTo,
        completeTeleport,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
};

SceneProvider.propTypes = {
  children: PropTypes.node,
  initialScene: PropTypes.string,
};

export default SceneContext;
