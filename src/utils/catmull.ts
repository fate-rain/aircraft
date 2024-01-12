import * as THREE from "three";

const initial = [
    [0, -1.5, 0],
    [-2, -2.7, 0],
    [0, -10, 0],
]

export const curve = new THREE.CatmullRomCurve3(
    initial.map((v) => new THREE.Vector3(...v))
);

export const points = curve.getPoints(50);
