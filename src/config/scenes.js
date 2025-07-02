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
import LearnUIKit from "../scenes/LearnUIKit";
import MelencoliaScene1 from "../scenes/melencolia/melencolia-1";
import MelencoliaScene2 from "../scenes/melencolia/melencolia-2";
import MelencoliaScene3 from "../scenes/melencolia/melencolia-3";
import MelencoliaScene4 from "../scenes/melencolia/melencolia-4";
import MelencoliaScene5 from "../scenes/melencolia/melencolia-5";
import MelencoliaScene6 from "../scenes/melencolia/melencolia-6";
import MelencoliaScene7 from "../scenes/melencolia/melencolia-7";
import MelencoliaScene8 from "../scenes/melencolia/melencolia-8";
import MelencoliaScene9 from "../scenes/melencolia/melencolia-9";
import MelencoliaScene10 from "../scenes/melencolia/melencolia-10";
import MelencoliaScene11 from "../scenes/melencolia/melencolia-11";
import MelencoliaScene12 from "../scenes/melencolia/melencolia-12";

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
  jnl: { component: JNLScene, label: "jnl scene" },
  learnUIKit: { component: LearnUIKit, label: "learn ui kit" },
  melencoliaScene1: {
    component: MelencoliaScene1,
    label: "melencolia scene 1",
  },
  melencoliaScene2: {
    component: MelencoliaScene2,
    label: "melencolia scene 2",
  },
  melencoliaScene3: {
    component: MelencoliaScene3,
    label: "melencolia scene 3",
  },
  melencoliaScene4: {
    component: MelencoliaScene4,
    label: "melencolia scene 4",
  },
  melencoliaScene5: {
    component: MelencoliaScene5,
    label: "melencolia scene 5",
  },
  melencoliaScene6: {
    component: MelencoliaScene6,
    label: "melencolia scene 6",
  },
  melencoliaScene7: {
    component: MelencoliaScene7,
    label: "melencolia scene 7",
  },
  melencoliaScene8: {
    component: MelencoliaScene8,
    label: "melencolia scene 8",
  },
  melencoliaScene9: {
    component: MelencoliaScene9,
    label: "melencolia scene 9",
  },
  melencoliaScene10: {
    component: MelencoliaScene10,
    label: "melencolia scene 10",
  },
  melencoliaScene11: {
    component: MelencoliaScene11,
    label: "melencolia scene 11",
  },
  melencoliaScene12: {
    component: MelencoliaScene12,
    label: "melencolia scene 12",
  },
};
