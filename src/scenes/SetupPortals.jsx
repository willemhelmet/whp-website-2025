import DefaultWorld from "../components/3d/DefaultWorld.jsx";
import Portal from "../components/3d/Portal.jsx";

export default function SetupPortals() {
  return (
    <>
      <DefaultWorld />
      <Portal
        position={[0, 0, 2]}
        targetScene={"physics"}
        label={"Setup Physics"}
      />
      <Portal
        position={[2, 0, 2]}
        targetScene={"firstParticles"}
        label={"Learning particles"}
      />
    </>
  );
}
