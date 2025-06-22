import DefaultWorld from "../components/3d/DefaultWorld";
import DurersSolid from "../components/3d/Durers-solid.jsx";

export default function MelencoliaHub() {
  return (
    <>
      <DurersSolid position={[0, 0, 4]} />
      <DefaultWorld />
    </>
  );
}
