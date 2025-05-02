import { OrbitControls } from "@react-three/drei";
import { IfInSessionMode } from "@react-three/xr";

function OrbitControlsWrapper() {
  return (
    <IfInSessionMode deny={["immersive-ar", "immersive-vr"]}>
      <OrbitControls />
    </IfInSessionMode>
  );
}

export default OrbitControlsWrapper;
