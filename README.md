# WHP Website 2025

A modern 3D web application built with React, Three.js, and React Three Fiber. This project serves as a personal portfolio and digital playground, featuring immersive 3D environments, VR/XR support, multiplayer capabilities, and various interactive experiments.

## Features

-   🎮 **Interactive 3D Worlds**: Multiple scenes to explore, from creative coding experiments to complex environments.
-   🕹️ **Character Controls**: First-person navigation and interaction using `ecctrl`.
-   🕶️ **VR/XR Support**: Full VR support via `@react-three/xr` for an immersive experience.
-   🤝 **Multiplayer**: Real-time player interaction powered by `socket.io`.
-   🎨 **Advanced Graphics**: Custom shaders, post-processing effects, and layered materials using `postprocessing`, `lamina`, and `glslify`.
-   🏗️ **Dynamic UI**: In-world UI components built with `@react-three/uikit`.
-   🎛️ **Developer Controls**: Real-time parameter tweaking with `leva`.
-   🎯 **Teleportation**: Seamlessly move between different scenes and environments.

## Tech Stack

-   **UI**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **3D Renderer**: [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber)
-   **3D Helpers & UI**: [@react-three/drei](https://github.com/pmndrs/drei), [@react-three/uikit](https://github.com/pmndrs/uikit)
-   **State Management**: [Jotai](https://jotai.org/)
-   **VR/XR**: [@react-three/xr](https://github.com/pmndrs/react-xr)
-   **Character Controller**: [ecctrl](https://github.com/pmndrs/ecctrl)
-   **Graphics & Shaders**: [Postprocessing](https://github.com/vanruesc/postprocessing), [Lamina](https://github.com/pmndrs/lamina), [Lygia](https://lygia.xyz/), [glslify](https://github.com/glslify/glslify)
-   **Animation**: [GSAP](https://greensock.com/gsap/)
-   **Networking**: [Socket.io](https://socket.io/) with [Express](https://expressjs.com/)
-   **Dev Tools**: [Leva](https://github.com/pmndrs/leva)
-   **Build Tool**: [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

-   Node.js (v16 or later)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone [your-repository-url]
    cd whp-website-2025
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server and the backend server:
    ```bash
    # In one terminal, start the Vite dev server
    npm run dev

    # In another terminal, start the Socket.io server
    node server/server.js
    ```
4.  Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/         # Reusable components (3D models, UI, effects)
├── config/             # Project configuration (scenes, text)
├── contexts/           # React contexts for global state
├── hooks/              # Custom React hooks
├── scenes/             # Top-level scene components
├── shaders/            # Custom GLSL shaders
├── utils/              # Utility functions and helpers
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## Available Scripts

-   `npm run dev`: Starts the Vite development server.
-   `npm run build`: Compiles TypeScript and builds the project for production.
-   `npm run lint`: Lints the codebase using ESLint.
-   `npm run preview`: Serves the production build locally for preview.

## License

This project is licensed under the MIT License.