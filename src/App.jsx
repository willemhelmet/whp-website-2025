import { Canvas } from "@react-three/fiber";
import { Loader, Stats } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { XR, createXRStore } from "@react-three/xr";
import OrbitControlsWrapper from "./components/utils/OrbitControlsWrapper";
import { PlayerProvider } from "./contexts/PlayerContext";

import SceneManager from "./scenes/SceneManager";
import XRButton from "./components/ui/XRButton";
import Player from "./components/3d/player";
import { Suspense } from "react";

const store = createXRStore({
  hand: { teleportPointer: true },
  controller: { teleportPointer: true },
});

function App() {
  return (
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
            <Physics debug>
              <OrbitControlsWrapper />
              <SceneManager />
              <Player />
            </Physics>
          </XR>
        </Suspense>
      </Canvas>
      <Loader />
    </PlayerProvider>
  );
}

export default App;
