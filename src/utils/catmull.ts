import * as THREE from "three";

const initial = [
    [0, -1, 0],
    [-10, -10, 10],
    [0, -4219, 0],
]

export const curve = new THREE.CatmullRomCurve3(initial.map((v) => new THREE.Vector3(...v)));

export const points = curve.getPoints(1000);
