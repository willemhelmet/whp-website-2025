import { Billboard, SpriteAnimator, Plane } from "@react-three/drei";
function TriangleMan({ ...props }) {
  const { position, scale, textureImageURL, textureDataURL } = props;
  return (
    <>
      <group position={position}>
        <Billboard>
          <SpriteAnimator
            textureImageURL={textureImageURL}
            textureDataURL={textureDataURL}
            scale={scale}
            startFrame={0}
            autoPlay={true}
            loop={true}
            fps={3}
            alphaTest={0.01}
          />
        </Billboard>
      </group>
    </>
  );
}
export default TriangleMan;
