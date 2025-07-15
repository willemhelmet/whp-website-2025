import { CuboidCollider } from "@react-three/rapier";
import { extend } from "@react-three/fiber";
import { useSceneManager } from "../../hooks/useScene.js";
import { Cylinder, Billboard, shaderMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Container, Root, Text } from "@react-three/uikit";
import PropTypes from "prop-types";
import resolveLygia from "../../utils/resolve-lygia.js";

const PortalShader = shaderMaterial(
  {
    /*u_time: 0*/
  },
  resolveLygia(`
    varying vec2 v_uv;
    void main() {
      v_uv = uv;
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
    }
  `),
  resolveLygia(`
    #include "lygia/animation/easing.glsl"
    //uniform float u_time;
    varying vec2 v_uv;
    void main() {
      float alpha = 1.0 - exponentialOut(v_uv.y);
      alpha += exponentialIn(v_uv.y - 0.15);
      alpha *= 0.5;
      alpha = clamp(alpha, 0.0, 1.0);
      vec3 color = vec3(0.2, 0.5, 0.8);
      gl_FragColor = vec4(color, alpha);
    }
  `),
);
extend({ PortalShader });

export default function Portal(props) {
  const { targetScene, label, ...rest } = props;
  const { isTeleporting, teleportTo, completeTeleport } = useSceneManager();
  const portalRef = useRef();

  const onEnter = (e) => {
    if (
      e.colliderObject.name == "character-capsule-collider" &&
      !isTeleporting
    ) {
      // console.log(`Portal entered! Switching to scene: ${targetScene}`);
      if (targetScene) {
        teleportTo(targetScene);
      }
    }
  };

  const onExit = (e) => {
    if (e.colliderObject.name == "character-capsule-collider") {
      // console.log("Player exited portal, re-enabling teleportation.");
      completeTeleport();
    }
  };

  return (
    <group {...rest}>
      {label && (
        <Billboard position={[0, 1, 0]}>
          <Root>
            <Container backgroundColor={"#3380CC"} margin={1}>
              <Text color={"white"} fontSize={10} margin={1}>
                {label}
              </Text>
            </Container>
          </Root>
        </Billboard>
      )}
      {/* bottom */}
      <Cylinder position={[0, 0.025, 0]} args={[0.5, 0.5, 0.1]}>
        <meshBasicMaterial color="#3380CC" />
      </Cylinder>
      {/* middle */}
      <Cylinder ref={portalRef} position={[0, 1, 0]} args={[0.5, 0.5, 1.8]}>
        <portalShader transparent depthWrite={false} />
      </Cylinder>
      {/* top */}
      <Cylinder position={[0, 1.975, 0]} args={[0.5, 0.5, 0.1]}>
        <meshBasicMaterial color="#3380CC" />
      </Cylinder>
      <CuboidCollider
        sensor
        position={[0, 1, 0]}
        args={[0.25, 1, 0.25]}
        onIntersectionEnter={onEnter}
        onIntersectionExit={onExit}
      />
    </group>
  );
}

Portal.propTypes = {
  targetScene: PropTypes.string,
  label: PropTypes.string,
};
