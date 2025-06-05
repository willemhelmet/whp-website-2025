import { Canvas } from "@react-three/fiber";
import { Loader, Stats, KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { XR, createXRStore } from "@react-three/xr";
import { PlayerProvider } from "./contexts/PlayerContext";

import SceneManager from "./scenes/SceneManager";
import XRButton from "./components/ui/XRButton";
import Player from "./components/3d/player";
import { Suspense } from "react";
import Joystick from "./components/ui/Joystick.jsx";

const store = createXRStore({
  hand: { teleportPointer: true },
  controller: { teleportPointer: true },
});

function App() {
  const keyboardControlsMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  ];

  return (
    <div className="App">
      <Joystick />
      <PlayerProvider>
        <XRButton store={store} />
        <Stats />
        <Canvas
          shadows
          className="webgl"
          camera={{
            position: [5, 5, 5],
            fov: 50,
            near: 0.1,
            far: 1000,
          }}
        >
          <Suspense>
            <XR store={store}>
              <Physics>
                <SceneManager />
                <KeyboardControls map={keyboardControlsMap}>
                  <Player />
                </KeyboardControls>
              </Physics>
            </XR>
          </Suspense>
        </Canvas>
        <Loader />
      </PlayerProvider>
    </div>
  );
}

export default App;
