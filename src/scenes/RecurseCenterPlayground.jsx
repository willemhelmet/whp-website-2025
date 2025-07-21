import { Container, Root, Text } from "@react-three/uikit";
import { Billboard, Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import DefaultWorld from "../components/3d/DefaultWorld.jsx";

export default function RecurseCenterPlayground() {
  return (
    <>
      <DefaultWorld portal={false} />
      <RigidBody type="fixed" position={[7.94, 0.882, 8.5]}>
        <Box scale={[3, 1, 2.75]} />
      </RigidBody>
      <Billboard position={[0, 1, 2]}>
        <Root>
          <Container flexDirection={"row"}>
            <Container backgroundColor={"white"} flexDirection={"column"}>
              <Text fontWeight={"bold"}>Shaders</Text>
              <Text>Blue trippy thing</Text>
              <Text>Ghost neon sign</Text>
              <Text>mouse neon?</Text>
              <Text>particle systems</Text>
            </Container>

            <Container backgroundColor={"lightblue"} flexDirection={"column"}>
              <Text fontWeight={"bold"}>Creative Coding</Text>
              <Text>Reflection</Text>
              <Text>color cones</Text>
              <Text>Tree?</Text>
            </Container>

            <Container backgroundColor={"orange"} flexDirection={"column"}>
              <Text fontWeight={"bold"}>Little things</Text>
              <Text>setup interactions</Text>
              <Text>physics objects</Text>
            </Container>
          </Container>
        </Root>
      </Billboard>
    </>
  );
}
