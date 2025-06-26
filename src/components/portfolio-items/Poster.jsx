import { Text, Plane } from "@react-three/drei";
// TODO:
// Create a design for the title and body
// fonts, colors, backgrounds, etc.
// figure out how to handle text with arbitrary lengths (overflow?)
// Come up with a better name?
function Poster({ ...props }) {
  return (
    <group {...props}>
      <Text
        position={[0, 0.5, 0]}
        font={"/fonts/inter_black.woff"}
        fontSize={0.15}
        maxWidth={1.8}
        color={"black"}
        anchorX={"center"}
        anchorY={"center"}
        letterSpacing={-0.05}
      >
        {props.title}
      </Text>
      <Text
        font={"/fonts/inter_medium.woff"}
        maxWidth={1.8}
        whiteSpace={"normal"}
        position={[0, props.bodyYOffset ? props.bodyYOffset : -0.1, 0]}
        fontSize={0.06}
        color={"black"}
        anchorX={"center"}
        anchorY={"center"}
      >
        {props.body}
      </Text>
      <Plane position={[0, 0, -0.001]} args={[2, 1.4, 1, 1]} />
    </group>
  );
}
export default Poster;
