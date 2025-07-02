import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard } from "@react-three/drei";

function MelencoliaScene7() {
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
        targetScene="melencoliaScene8"
        label="to 8"
      />
      <Portal
        position={[0, 0, 2]}
        targetScene="melencoliaScene12"
        label="to 12"
      />
      <Billboard position={[0, 2, 5]}>
        <group position={[0, 0, 0]}>
          <Root>
            <Container backgroundColor={"pink"}>
              <Text margin={1}>Melencolia Scene 7</Text>
            </Container>
          </Root>
        </group>
      </Billboard>
    </>
  );
}

export default MelencoliaScene7;
