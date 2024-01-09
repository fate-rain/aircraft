import * as THREE from "three";

const initial = [
    [0, 0, 0],
    [0, -4, 0],
    [0, -8, 0],
    [0, -12, 0],
]

export const curve = new THREE.CatmullRomCurve3(initial.map((v) => new THREE.Vector3(...v)));

export const points = curve.getPoints(50);
