import World from "../scenes/HelloReactThreeFiber";
import TeleportEnvironment from "../scenes/TeleportEnvironment";
import SetupInteractions from "../scenes/SetupInteractions";
import SetupInput from "../scenes/SetupInput";
import SetupPhysics from "../scenes/SetupPhysics";
import CreativeCodingTree from "../scenes/CreativeCodingTree";
import MyFirstShader from "../scenes/MyFirstShader";
import MyFirstParticleSystem from "../scenes/MyFirstParticleSystem";
import MyFirstPostProcessing from "../scenes/MyFirstPostProcessing";
import GradientMountainScene from "../scenes/GradientMountainScene";
import CreativeCodingReflection from "../scenes/CreativeCodingReflection";
import SetupPortals from "../scenes/SetupPortals";
import HubScene from "../scenes/HubScene";
import JNLScene from "../scenes/JNLScene";
import VolumetricSpotLightArticleScene from "../scenes/VolumetricSpotLightArticleScene";
import MelencoliaHub from "../scenes/Melencolia-Hub";

// Centralized scene definitions with metadata
export const sceneDefinitions = {
  world: { component: World, label: "world" },
  teleport: { component: TeleportEnvironment, label: "setup teleport" },
  interactions: { component: SetupInteractions, label: "setup interactions" },
  input: { component: SetupInput, label: "setup input" },
  physics: { component: SetupPhysics, label: "setup physics" },
  tree: { component: CreativeCodingTree, label: "creative coding tree" },
  firstShader: { component: MyFirstShader, label: "my first shader" },
  firstParticles: {
    component: MyFirstParticleSystem,
    label: "my first particle system",
  },
  firstPostProcessing: {
    component: MyFirstPostProcessing,
    label: "my first post processing",
  },
  gradientMountain: {
    component: GradientMountainScene,
    label: "gradient mountain scene",
  },
  creativeCodingReflection: {
    component: CreativeCodingReflection,
    label: "creative coding reflection",
  },
  setupPortals: { component: SetupPortals, label: "setup portals" },
  hub: { component: HubScene, label: "hub" },
  volumetricSpotLightArticleScene: {
    component: VolumetricSpotLightArticleScene,
    label: "volumetric spot light",
  },
  melencoliaHub: {
    component: MelencoliaHub,
    label: "melencolia hub",
  },
  // TODO: Properly import original JNL scene
  jnl: { component: JNLScene, label: "jnl scene" },
};
