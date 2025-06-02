import { OrbitControls } from "@react-three/drei";
import { IfInSessionMode } from "@react-three/xr";

function OrbitControlsWrapper() {
  return (
    <IfInSessionMode deny={["immersive-ar", "immersive-vr"]}>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </IfInSessionMode>
  );
}

export default OrbitControlsWrapper;
