import { Sky, Stars } from "@react-three/drei";

import Alien from "../components/3d/Alien.jsx";
import AndyAward from "../components/3d/AndyAward.jsx";
import JNL from "../components/3d/jnl/JNL.jsx";
import PortfolioImage from "../components/portfolio-items/PortfolioImage.jsx";
import PortfolioVideo from "../components/portfolio-items/PortfolioVideo.jsx";
import Poster from "../components/portfolio-items/Poster.jsx";
import { text } from "../config/text.js";
import TriangleMan from "../components/3d/TriangleMan.jsx";
import Apartment from "../components/3d/Apartment_Maquette.jsx";
import Lighting from "../components/3d/Lighting.jsx";

export default function JNLScene() {
  return (
    <group rotation={[0, Math.PI, 0]}>
      <Lighting />
      <Alien
        position={[-0.84, -0.354, -2.85]}
        rotation={[0, -1.965, 0]}
        scale={[0.08, 0.08, 0.08]}
      />
      <Apartment
        position={[-5, 1.98, -9.75]}
        rotation={[0, Math.PI * 1.5, 0]}
        scale={[0.3, 0.3, 0.3]}
      />
      <Poster
        position={[-3, 2.5, -12.05]}
        rotation={[0, 0, 0]}
        title={text[9].title}
        body={text[9].body}
      />
      <JNL />
      <TriangleMan
        position={[6.26, -0.7, -0.39]}
        scale={0.7}
        textureImageURL={"/textures/triangle/triangle-1.png"}
        textureDataURL="/textures/triangle/triangle.json"
      />
      <TriangleMan
        position={[6.26, -0.7, -8.6]}
        scale={0.7}
        textureImageURL={"/textures/triangle/triangle-2.png"}
        textureDataURL="/textures/triangle/triangle.json"
      />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <Stars />
      {/* Hackathons */}
      <PortfolioImage
        position={[1, 0.75, -13.37]}
        src={"/portfolio/hack-sommilar.jpg"}
      />
      <Poster
        position={[1.02, 0, -13.37]}
        rotation={[0, 0, 0]}
        scale={[0.35, 0.35, 0.35]}
        title={text[8].title}
        body={text[8].body}
        bodyYOffset={-0.17}
      ></Poster>
      <PortfolioImage
        position={[3.17, 0.75, -13.37]}
        scale={[1.2, 1.2, 1.2]}
        src={"/portfolio/edible-apartment.png"}
      />
      <Poster
        position={[3.17, 0, -13.37]}
        rotation={[0, 0, 0]}
        scale={[0.35, 0.35, 0.35]}
        title={text[6].title}
        body={text[6].body}
        bodyYOffset={-0.17}
      ></Poster>
      <PortfolioImage
        position={[5.36, 0.75, -13.37]}
        scale={[0.75, 0.75, 0.75]}
        src={"/portfolio/hack-seereal.png"}
      />
      <Poster
        position={[5.38, 0, -13.37]}
        rotation={[0, 0, 0]}
        scale={[0.35, 0.35, 0.35]}
        title={text[7].title}
        body={text[7].body}
      ></Poster>
      {/* Verizon 5G Stadium in Fortnite */}
      <AndyAward
        position={[-1.74, -0.25, -8.27]}
        rotation={[0, Math.PI * 0.5, 0]}
        scale={[0.75, 0.75, 0.75]}
      />
      <PortfolioImage
        position={[-2.1, -0.4, -11.87]}
        rotation={[0, Math.PI * 0.5, 0]}
        scale={[1.5, 1.5, 1.5]}
        src={"/portfolio/5g-stadium.png"}
      />
      <PortfolioImage
        position={[-2.1, 0.62, -11.63]}
        rotation={[0, Math.PI * 0.5, 0]}
        scale={[1.5, 1.5, 1.5]}
        src={"/portfolio/5g-fortnite-pic.jpg"}
      />
      <PortfolioImage
        position={[-2.1, 0.51, -8.51]}
        rotation={[0, Math.PI * 0.5, 0]}
        scale={[0.5, 0.5, 0.5]}
        src={"/portfolio/5g-andy-award.jpg"}
      />
      <Poster
        position={[-2.1, 0.5, -10]}
        rotation={[0, Math.PI * 0.5, 0]}
        title={text[3].title}
        body={text[3].body}
        scale={[0.8, 0.8, 0.8]}
      ></Poster>
      {/* Nike Watch Her Glow */}
      <Poster
        position={[-1.32, 2, -4.5]}
        rotation={[0, Math.PI * 0.5, 0]}
        title={text[2].title}
        body={text[2].body}
      ></Poster>
      <PortfolioVideo
        position={[-1.32, 2 + -1.34, -5.45]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={410}
        height={250}
        scale={0.05}
        src={"/portfolio/nike-color-bars.webm"}
      />
      <PortfolioVideo
        position={[-1.32, 1.5, -6.34]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={960}
        height={512}
        scale={0.04}
        src={"/portfolio/nike-glowing-up.webm"}
      />
      <PortfolioVideo
        position={[-1.32, 0.62, -4.14]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={512}
        height={512}
        scale={0.05}
        src={"/portfolio/nike-watch-her-glow.webm"}
      />
      <PortfolioVideo
        position={[-1.32, 0.27, -6.88]}
        rotation={[0, Math.PI * 0.5, 0]}
        width={360}
        height={640}
        scale={0.05}
        src={"/portfolio/nike-ar-filter.webm"}
      />
      {/* Snap Lenses */}
      <Poster
        position={[6.75, 0.2, -1.85]}
        rotation={[0, -Math.PI * 0.5, 0]}
        scale={[0.85, 0.85, 0.85]}
        title={text[1].title}
        body={text[1].body}
        bodyYOffset={0.01}
      ></Poster>
      <PortfolioVideo
        position={[6.75, 0.2, -3.4]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={320}
        height={576}
        scale={0.046}
        src={"/portfolio/snap-elephant-body.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.2, -4.4]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={269}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-eyebrows.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.2, -5.4]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={267}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-relighting.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.2, -6.4]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={267}
        height={480}
        scale={0.05}
        src={"/portfolio/snap-watch.webm"}
      />
      {/* Vision pro */}
      <Poster
        position={[2.6, 1.5, 0.37]}
        rotation={[0, Math.PI, 0]}
        scale={[0.85, 0.85, 0.85]}
        title={text[0].title}
        body={text[0].body}
        bodyYOffset={0.02}
      ></Poster>
      <PortfolioVideo
        position={[2.6, 0.2, 0.37]}
        rotation={[0, Math.PI, 0]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-1.webm"}
      />
      <PortfolioVideo
        position={[4.35, 1.5, 0.37]}
        rotation={[0, Math.PI, 0]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-2.webm"}
      />
      <PortfolioVideo
        position={[4.35, 0.2, 0.37]}
        rotation={[0, Math.PI, 0]}
        width={640}
        height={480}
        scale={0.05}
        src={"/portfolio/vp-apollo-11-3.webm"}
      />
      {/* VR */}
      <Poster
        position={[6.75, 0.22, -10.58]}
        rotation={[0, -Math.PI * 0.5, 0]}
        scale={[0.5, 0.5, 0.5]}
        title={text[4].title}
        body={text[4].body}
      ></Poster>
      <PortfolioVideo
        position={[6.75, 0.72, -12.73]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.045}
        src={"/portfolio/vr-cave-1.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.15, -12.73]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.045}
        src={"/portfolio/vr-cave-2.webm"}
      />
      <PortfolioVideo
        position={[6.75, -0.05, -11.65]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.045}
        src={"/portfolio/vr-sillytown-1.webm"}
      />
      <PortfolioVideo
        position={[6.75, 0.52, -11.65]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.045}
        src={"/portfolio/vr-sillytown-2.webm"}
      />
      <PortfolioVideo
        position={[6.75, -0.4, -12.73]}
        rotation={[0, -Math.PI * 0.5, 0]}
        width={512}
        height={256}
        scale={0.045}
        src={"/portfolio/vr-sillytown-3.webm"}
      />
    </group>
  );
}
