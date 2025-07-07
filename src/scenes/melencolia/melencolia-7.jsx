import DefaultWorld from "../../components/3d/DefaultWorld";
import { Container, Root, Text } from "@react-three/uikit";
import Portal from "../../components/3d/Portal.jsx";
import { Billboard, Line } from "@react-three/drei";

function MelencoliaScene7() {
  return (
    <>
      <DefaultWorld portal={false} />
      <Portal
        position={[4, 0, 4]}
        targetScene="melencoliaScene1"
        label="to 1"
      />
      <Portal
        position={[4, 0, 10.928]}
        targetScene="melencoliaScene8"
        label="to 8"
      />
      <Portal
        position={[4, 0, -2.928]}
        targetScene="melencoliaScene12"
        label="to 12"
      />
      <Portal position={[8, 0, 4]} targetScene="melencoliaHub" label="to hub" />

      {/* Lines extending from the "to hub" portal to each other portal */}
      <group>
        <Line
          points={[
            [8, 0, 4],
            [4, 0, 4],
          ]}
          lineWidth={5}
          color="green"
        />
        <Line
          points={[
            [8, 0, 4],
            [4, 0, 10.928],
          ]}
          lineWidth={5}
          color="yellow"
        />
        <Line
          points={[
            [8, 0, 4],
            [4, 0, -2.928],
          ]}
          lineWidth={5}
          color="yellow"
        />
      </group>

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
