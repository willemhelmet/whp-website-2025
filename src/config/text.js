// 0 - Apollo 11 (3D Scan of Command Module and Neil Armstrong's Spacesuit)
// 1 - Snapchat AR Lenses (AR Game Development and Template Release)
// 2 - Nike x Champs Sports (Women's Apparel AR Filters and GIFs)
// 3 - Verizon (5G Stadium in Fortnite Creative)
// 4 - VR Work (Experimental Narratives using Unreal Engine)
// 5 - Alien Photogrammetry (3D Model, Scan, Rigging, and Animation)
// 6 - Edible Apartment (Stories of The Future Hackathon Overall Winner)
// 7 - SeeReal (Hack@Brown 2018 Most Innovative Augmented Reality Experience)
// 8 - SommallAR (Hack@Brown 2017 Best UX Virtual Reality Wine-Tasting Experience)
// 9 - Previous Portfolio (Archival Entry, no longer active)
let count = 0;
export const text = [
  generatePortfolioItem(
    "Apollo 11\nApple Vision Pro",
    "I built an immersive educational experience about the Apollo 11 mission, which celebrated its 55th anniversary in July 2024. The app has an immersive gallery of images showcasing unique artifacts from the Apollo 11 mission, a 3D scan of Neil Armstrong's spacesuit at 1-to-1 scale, and an immersive 3D scan of the Apollo 11 Command Module. The app lets users see first-hand how Buzz Aldrin, Neil Armstrong, and Michael Collins controlled the spaceship that took them to the moon.",
  ),
  generatePortfolioItem(
    "Snapchat\nAR Lens Templates",
    "Combined design, art, communication, creativity, and code to turn ML models into user-friendly creative tools on Snapchat's Lens Studio platform. Released 7 templates, 5 custom components, and 12 code samples in one year. Leveraged new rendering techniques such as NeRFs and Gaussian Splatting to showcase products for high-end fashion brands (Cartier, Fossil).",
  ),
  generatePortfolioItem(
    "Nike x Champs Sports\nWATCH HER GLOW",
    "Designed and developed 2 AR filters and 12 GIFs which were used by 15 influencers for a 6-week social media campaign to promote Nike women’s apparel at Champs Sports stores. All social ephemera generated over 9 million impressions.",
  ),
  generatePortfolioItem(
    "Verizon\n5G Stadium in Fortnite",
    "Assisted in the design, development, and testing of a virtual football stadium in Fortnite Creative, attracting over 30 million unique users during the week leading up to Super Bowl LV. Led in-game meet-and-greets with pro NFL players and fans.",
  ),
  generatePortfolioItem(
    "VR Work",
    "In 2020, I created several experimental VR experiences using the Unreal Engine, exploring the potential of immersive storytelling and interactive design in virtual environments.",
  ),
  generatePortfolioItem(
    "Alien Photogrammetry",
    "3D model created initially by hand using Crayola Model Magic. Photogrammetry scanned using a Canon EOS 5D, retopologized in Blender, rigged, and then animated.",
  ),
  generatePortfolioItem(
    "Edible Apartment\nStories of The Future 2018\nOverall Award",
    "Edible Apartment is an app that helps users turn their apartment into a verdant garden through augmented Reality. The app leverages the luminosity sensor on the Magic Leap headset to find the perfect place in a user’s apartment to build an edible garden.",
  ),
  generatePortfolioItem(
    "SeeReal\nHack@Brown 2018\nInnovation Award",
    "Seereal is an augmented reality experience that uses cereal box packages as image targets in order to create a more engaging breakfast experience. When you point your phone's camera at one of our three cereal boxes, digital objects begin to grow out of the packaging and create an interactive experience. My job was to design the AR games, as well as to create all the 3D assets for the experience.",
  ),
  generatePortfolioItem(
    "SommailAR\nHack@Brown 2017\nUX Award",
    "SommeliAR is a virtual reality wine-tasting experience built in 24 hours. My role in this project was to design all the visual elements of the experience, which included modeling 3D assets, constructing virtual environments, and designing our project’s logo.",
  ),
  generatePortfolioItem(
    "Previous Portfolio",
    "This is the previous portfolio that I built. The space is based on the apartment I spent the majority of the Covid-19 lockdown inside of.",
  ),
];

function generatePortfolioItem(title, body) {
  const id = count++;
  return { id, title, body };
}
