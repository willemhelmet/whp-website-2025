import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard, Line } from "@react-three/drei";

function MelencoliaScene3() {
  return (
    <>
      <DefaultWorld portal={false} />
      <Portal
        position={[4, 0, 4]}
        targetScene="melencoliaScene1"
        label="to 1"
      />
      <Portal
        position={[-2, 0, 0.536]}
        targetScene="melencoliaScene5"
        label="to 5"
      />
      <Portal
        position={[-4, 0, 10.928]}
        targetScene="melencoliaScene9"
        label="to 9"
      />
      <Portal
        position={[-2, 0, 7.464]}
        targetScene="melencoliaHub"
        label="to hub"
      />

      {/* Lines extending from the "to hub" portal to each other portal */}
      <group>
        {/* Red line to inner portal (scene 1) */}
        <Line
          points={[
            [-2, 0, 7.464],
            [4, 0, 4],
          ]}
          lineWidth={5}
          color="red"
        />
        {/* Red line to inner portal (scene 5) */}
        <Line
          points={[
            [-2, 0, 7.464],
            [-2, 0, 0.536],
          ]}
          lineWidth={5}
          color="red"
        />
        {/* Green line to outer portal (scene 9) */}
        <Line
          points={[
            [-2, 0, 7.464],
            [-4, 0, 10.928],
          ]}
          lineWidth={5}
          color="green"
        />
        {/* Connect the two inner portals to each other */}
        <Line
          points={[
            [4, 0, 4],
            [-2, 0, 0.536],
          ]}
          lineWidth={5}
          color="red"
        />
      </group>

      <Billboard position={[0, 2, 5]}>
        <group position={[0, 0, 0]}>
          <Root>
            <Container backgroundColor={"pink"}>
              <Text margin={1}>Melencolia Scene 3</Text>
            </Container>
          </Root>
        </group>
      </Billboard>
    </>
  );
}

export default MelencoliaScene3;
