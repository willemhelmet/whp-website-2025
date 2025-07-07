import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard, Line } from "@react-three/drei";

function MelencoliaScene8() {
  return (
    <>
      <DefaultWorld portal={false} />
      <Portal
        position={[2, 0, 7.464]}
        targetScene="melencoliaScene2"
        label="to 2"
      />
      <Portal
        position={[8, 0, 4]}
        targetScene="melencoliaScene7"
        label="to 7"
      />
      <Portal
        position={[-4, 0, 10.928]}
        targetScene="melencoliaScene9"
        label="to 9"
      />
      <Portal
        position={[4, 0, 10.928]}
        targetScene="melencoliaHub"
        label="to hub"
      />

      {/* Lines extending from the "to hub" portal to each other portal */}
      <group>
        {/* Green line to inner portal (scene 2) */}
        <Line
          points={[
            [4, 0, 10.928],
            [2, 0, 7.464],
          ]}
          lineWidth={5}
          color="green"
        />
        {/* Yellow line to outer portal (scene 7) */}
        <Line
          points={[
            [4, 0, 10.928],
            [8, 0, 4],
          ]}
          lineWidth={5}
          color="yellow"
        />
        {/* Yellow line to outer portal (scene 9) */}
        <Line
          points={[
            [4, 0, 10.928],
            [-4, 0, 10.928],
          ]}
          lineWidth={5}
          color="yellow"
        />
      </group>

      <Billboard position={[0, 2, 5]}>
        <group position={[0, 0, 0]}>
          <Root>
            <Container backgroundColor={"pink"}>
              <Text margin={1}>Melencolia Scene 8</Text>
            </Container>
          </Root>
        </group>
      </Billboard>
    </>
  );
}

export default MelencoliaScene8;
