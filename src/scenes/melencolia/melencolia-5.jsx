import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard } from "@react-three/drei";

function MelencoliaScene5() {
  return (
    <>
      <DefaultWorld portal={false} />
      <Portal
        position={[2, 0, 2]}
        targetScene="melencoliaScene1"
        label="to 1"
      />
      <Portal
        position={[-2, 0, 2]}
        targetScene="melencoliaScene3"
        label="to 3"
      />
      <Portal
        position={[0, 0, 2]}
        targetScene="melencoliaScene11"
        label="to 11"
      />
      <Billboard position={[0, 2, 5]}>
        <group position={[0, 0, 0]}>
          <Root>
            <Container backgroundColor={"pink"}>
              <Text margin={1}>Melencolia Scene 5</Text>
            </Container>
          </Root>
        </group>
      </Billboard>
    </>
  );
}

export default MelencoliaScene5;
