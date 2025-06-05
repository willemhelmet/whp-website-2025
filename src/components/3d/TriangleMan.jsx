import { SpriteAnimator } from "@react-three/drei";

function TriangleMan({ ...props }) {
  return (
    <SpriteAnimator
      {...props}
      startFrame={0}
      autoPlay={true}
      loop={true}
      fps={3}
      alphaTest={0.01}
    />
  );
}
export default TriangleMan;
