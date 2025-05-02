# Components Structure

This directory contains all reusable components organized by their purpose:

## Directory Structure

```
components/
├── 3d/           # 3D-specific components (meshes, lights, etc.)
├── ui/           # UI components (buttons, menus, HUD elements)
├── utils/        # Utility components (helpers, wrappers)
├── hooks/        # Custom React hooks
└── layout/       # Layout components (grids, containers)
```

## Component Categories

### 3D Components (`/3d`)

- 3D meshes and geometries
- Lights and shadows
- Materials and shaders
- Physics objects
- VR/XR specific components

### UI Components (`/ui`)

- Buttons and controls
- Menus and navigation
- Text and typography
- Icons and images
- Overlays and modals

### Utility Components (`/utils`)

- Helper components
- Wrapper components
- Higher-order components
- Context providers

### Custom Hooks (`/hooks`)

- Reusable React hooks
- State management hooks
- Animation hooks
- Event handling hooks

### Layout Components (`/layout`)

- Page layouts
- Grid systems
- Containers
- Responsive wrappers

## Naming Conventions

- Use PascalCase for component files (e.g., `Player.jsx`)
- Use kebab-case for utility files (e.g., `use-animation.js`)
- Group related components in subdirectories when needed
