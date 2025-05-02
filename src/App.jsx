import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { XR, createXRStore } from "@react-three/xr";

import SceneManager from "./scenes/SceneManager";
import XRButton from "./components/ui/XRButton";

const store = createXRStore({
  hand: { teleportPointer: true },
  controller: { teleportPointer: true },
});

function App() {
  return (
    <>
      <XRButton store={store} />
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
        <XR store={store}>
          <Physics debug>
            <SceneManager />
          </Physics>
        </XR>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
