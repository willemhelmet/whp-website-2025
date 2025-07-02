import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard } from "@react-three/drei";

function MelencoliaScene10() {
  return (
    <>
      <DefaultWorld portal={false} />
      <Portal
        position={[2, 0, 2]}
        targetScene="melencoliaScene4"
        label="to 4"
      />
      <Portal
        position={[-2, 0, 2]}
        targetScene="melencoliaScene9"
        label="to 9"
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
              <Text margin={1}>Melencolia Scene 10</Text>
            </Container>
          </Root>
        </group>
      </Billboard>
    </>
  );
}

export default MelencoliaScene10;
