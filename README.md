# WHP Website 2025

A modern 3D web application built with React Three Fiber, featuring immersive 3D environments, VR support, and interactive elements. This project leverages the power of Three.js through React Three Fiber to create engaging 3D experiences in the browser.

## Features

- 🎮 Interactive 3D environment
- 🕶️ VR support with WebXR
- 🎨 Custom shaders and materials
- 🏗️ Physics-based interactions
- 🎯 Teleportation mechanics
- 🎛️ Orbit controls for desktop navigation

## Tech Stack

- [React](https://reactjs.org/) - UI library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) - React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for R3F
- [@react-three/rapier](https://github.com/pmndrs/react-three-rapier) - Physics engine
- [@react-three/xr](https://github.com/pmndrs/react-xr) - WebXR/VR support
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Vite](https://vitejs.dev/) - Build tooling

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone [your-repository-url]
   cd whp-website-2025
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── 3d/            # 3D-specific components
│   ├── ui/            # UI components
│   └── utils/         # Utility components
├── contexts/          # React contexts
├── scenes/            # 3D scene components
├── shaders/           # Custom shaders
└── App.jsx            # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for making 3D in React accessible
- [Three.js](https://threejs.org/) for the powerful 3D library
- [Vite](https://vitejs.dev/) for the excellent development experience
