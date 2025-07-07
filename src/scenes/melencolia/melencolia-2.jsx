import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard, Line } from "@react-three/drei";

function MelencoliaScene2() {
  return (
    <>
      <DefaultWorld portal={false} />
      <Portal
        position={[-4, 0, 4]}
        targetScene="melencoliaScene4"
        label="to 4"
      />
      <Portal
        position={[2, 0, 0.536]}
        targetScene="melencoliaScene6"
        label="to 6"
      />
      <Portal
        position={[4, 0, 10.928]}
        targetScene="melencoliaScene8"
        label="to 8"
      />
      <Portal
        position={[2, 0, 7.464]}
        targetScene="melencoliaHub"
        label="to hub"
      />

      {/* Lines extending from the "to hub" portal to each other portal */}
      <group>
        {/* Green line to inner portal (scene 4) */}
        <Line
          points={[
            [2, 0, 7.464],
            [-4, 0, 4],
          ]}
          lineWidth={5}
          color="blue"
        />
        {/* Red line to inner portal (scene 6) */}
        <Line
          points={[
            [2, 0, 7.464],
            [2, 0, 0.536],
          ]}
          lineWidth={5}
          color="blue"
        />
        {/* Yellow line to outer portal (scene 8) */}
        <Line
          points={[
            [2, 0, 7.464],
            [4, 0, 10.928],
          ]}
          lineWidth={5}
          color="green"
        />
        {/* Connect the two inner portals to each other */}
        <Line
          points={[
            [-4, 0, 4],
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
              <Text margin={1}>Melencolia Scene 2</Text>
            </Container>
          </Root>
        </group>
      </Billboard>
    </>
  );
}

export default MelencoliaScene2;
