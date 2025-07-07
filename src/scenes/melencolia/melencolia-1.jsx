import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard, Line } from "@react-three/drei";

function MelencoliaScene1() {
  return (
    <>
      <DefaultWorld portal={false} />
      <Portal
        position={[-2, 0, 7.464]}
        targetScene="melencoliaScene3"
        label="to 3"
      />
      <Portal
        position={[-2, 0, 0.536]}
        targetScene="melencoliaScene5"
        label="to 5"
      />
      <Portal
        position={[8, 0, 4]}
        targetScene="melencoliaScene7"
        label="to 7"
      />
      <Portal position={[4, 0, 4]} targetScene="melencoliaHub" label="to hub" />
      <Billboard position={[0, 2, 5]}>
        <group position={[0, 0, 0]}>
          <Root>
            <Container backgroundColor={"pink"}>
              <Text margin={1}>Melencolia Scene 1</Text>
            </Container>
          </Root>
        </group>
      </Billboard>
      <group>
        <Line
          points={[
            [4, 0, 4],
            [8, 0, 4],
          ]}
          lineWidth={5}
          color="green"
        />
        <Line
          points={[
            [4, 0, 4],
            [-2, 0, 7.464],
          ]}
          lineWidth={5}
          color="red"
        />
        <Line
          points={[
            [4, 0, 4],
            [-2, 0, 0.536],
          ]}
          lineWidth={5}
          color="red"
        />
        <Line
          points={[
            [-2, 0, 7.464],
            [-2, 0, 0.536],
          ]}
          lineWidth={5}
          color="red"
        />
      </group>
    </>
  );
}

export default MelencoliaScene1;
