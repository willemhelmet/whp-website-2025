uniform float uTime;
uniform float uSize;

attribute vec3 position;
attribute float aScale;
attribute float aSpeed;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // Add some wave motion
    float wave = sin(uTime * aSpeed + modelPosition.y * 2.0) * 0.1;
    modelPosition.x += wave;
    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;
    
    // Dynamic point size based on camera distance
    gl_PointSize = uSize * aScale * (1000.0 / -viewPosition.z);
    
    // Pass varyings to fragment shader
    vUv = uv;
    vPosition = position;
}