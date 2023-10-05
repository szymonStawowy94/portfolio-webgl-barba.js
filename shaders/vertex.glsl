uniform float time;
varying float pulse;

varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 newPosition = position;
    newPosition.z = 0.1*sin(length(position)*30. + time);
    pulse = newPosition.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}