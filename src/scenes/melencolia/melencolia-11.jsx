import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard } from "@react-three/drei";

function MelencoliaScene11() {
  return (
    <>
      <DefaultWorld portal={false} />
      <Portal
        position={[2, 0, 2]}
        targetScene="melencoliaScene5"
        label="to 5"
      />
      <Portal
        position={[-2, 0, 2]}
        targetScene="melencoliaScene10"
        label="to 10"
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
              <Text margin={1}>Melencolia Scene 11</Text>
            </Container>
          </Root>
        </group>
      </Billboard>
    </>
  );
}

export default MelencoliaScene11;
