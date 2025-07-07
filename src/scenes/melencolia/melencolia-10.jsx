import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard, Line } from "@react-three/drei";

function MelencoliaScene10() {
  return (
    <>
      <DefaultWorld portal={false} />
      <Portal
        position={[-4, 0, 4]}
        targetScene="melencoliaScene4"
        label="to 4"
      />
      <Portal
        position={[-4, 0, 10.928]}
        targetScene="melencoliaScene9"
        label="to 9"
      />
      <Portal
        position={[-4, 0, -2.928]}
        targetScene="melencoliaScene11"
        label="to 11"
      />
      <Portal
        position={[-8, 0, 4]}
        targetScene="melencoliaHub"
        label="to hub"
      />

      {/* Lines extending from the "to hub" portal to each other portal */}
      <group>
        {/* Green line to inner portal (scene 4) */}
        <Line
          points={[
            [-8, 0, 4],
            [-4, 0, 4],
          ]}
          lineWidth={5}
          color="green"
        />
        {/* Yellow line to outer portal (scene 9) */}
        <Line
          points={[
            [-8, 0, 4],
            [-4, 0, 10.928],
          ]}
          lineWidth={5}
          color="yellow"
        />
        {/* Yellow line to outer portal (scene 11) */}
        <Line
          points={[
            [-8, 0, 4],
            [-4, 0, -2.928],
          ]}
          lineWidth={5}
          color="yellow"
        />
      </group>

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
