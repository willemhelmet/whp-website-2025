import { Plane, useVideoTexture } from "@react-three/drei";
// import { useState } from "react";
// import { useMyStore } from "../../utils/store";

/** TODO:
 * Resize Plane so that video's dimensions are correct
 * Hopefully, this can be done automatically
 * Last resort I put in width and height in props
 */
function PortfolioVideo(props) {
  const videoTexture = useVideoTexture(props.src);
  const size = [props.width * props.scale, props.height * props.scale];
  // const { setCrosshairVisibility } = useMyStore();
  // const [hovered, setHovered] = useState(false);

  // function handleCursorOver() {
  //   setCrosshairVisibility(true);
  //   setHovered(true);
  // }

  // function handleCursorOut() {
  //   setCrosshairVisibility(false);
  //   setHovered(false);
  // }

  return (
    <Plane
      {...props}
      args={size}
      // onPointerOver={() => handleCursorOver()}
      // onPointerOut={() => handleCursorOut()}
      // onClick={() => console.log("you clicked on a video")}
    >
      <meshBasicMaterial map={videoTexture} toneMapped={false} />
      {/*<motion.mesh
        position={[0, 0, -0.01]}
        animate={{ scale: hovered ? 1.05 : 1 }}
      >
        <planeGeometry args={size} />
        <meshBasicMaterial color={"white"} />
      </motion.mesh>*/}
    </Plane>
  );
}

export default PortfolioVideo;
