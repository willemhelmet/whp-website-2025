import DefaultWorld from "../components/3d/DefaultWorld";
import { Root, Container, Text } from "@react-three/uikit";

function LearnUIKit() {
  return (
    <>
      <DefaultWorld />
      <group position={[2, 1, 3]} rotation={[0, Math.PI, 0]}></group>
      <group position={[2, 1, 3]} rotation={[0, Math.PI, 0]}>
        <Root
          backgroundColor={"pink"}
          sizeX={2}
          sizeY={1}
          flexDirection={"row"}
        >
          <Container
            depthTest={true}
            flexGrow={1}
            margin={3.2}
            backgroundColor={"salmon"}
          >
            <Text textAlign={"center"} verticalAlign={"center"}>
              Hi willem!
            </Text>
          </Container>
          {/* <Container
            hover={{
              backgroundColor: "lightgreen",
            }}
            flexGrow={1}
            margin={3.2}
            backgroundColor={"lightblue"}
          ></Container> */}
        </Root>
      </group>
    </>
  );
}

export default LearnUIKit;
