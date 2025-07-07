import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard, Line } from "@react-three/drei";

function MelencoliaScene4() {
  return (
    <>
      <DefaultWorld portal={false} />
      <Portal
        position={[2, 0, 7.464]}
        targetScene="melencoliaScene2"
        label="to 2"
      />
      <Portal
        position={[2, 0, 0.536]}
        targetScene="melencoliaScene6"
        label="to 6"
      />
      <Portal
        position={[-8, 0, 4]}
        targetScene="melencoliaScene10"
        label="to 10"
      />
      <Portal
        position={[-4, 0, 4]}
        targetScene="melencoliaHub"
        label="to hub"
      />

      {/* Lines extending from the "to hub" portal to each other portal */}
      <group>
        {/* Blue line to inner portal (scene 2) */}
        <Line
          points={[
            [-4, 0, 4],
            [2, 0, 7.464],
          ]}
          lineWidth={5}
          color="blue"
        />
        {/* Blue line to inner portal (scene 6) */}
        <Line
          points={[
            [-4, 0, 4],
            [2, 0, 0.536],
          ]}
          lineWidth={5}
          color="blue"
        />
        {/* Green line to outer portal (scene 10) */}
        <Line
          points={[
            [-4, 0, 4],
            [-8, 0, 4],
          ]}
          lineWidth={5}
          color="green"
        />
        {/* Connect the two inner portals to each other */}
        <Line
          points={[
            [2, 0, 7.464],
            [2, 0, 0.536],
          ]}
          lineWidth={5}
          color="blue"
        />
      </group>

      <Billboard position={[0, 2, 5]}>
        <group position={[0, 0, 0]}>
          <Root>
            <Container backgroundColor={"pink"}>
              <Text margin={1}>Melencolia Scene 4</Text>
            </Container>
          </Root>
        </group>
      </Billboard>
    </>
  );
}

export default MelencoliaScene4;
