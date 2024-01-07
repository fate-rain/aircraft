import './index.css'

import {createRoot} from 'react-dom/client'
import {Canvas} from '@react-three/fiber'

import Experience from "./Experience.tsx";

const root = createRoot(document.getElementById('root')!)

root.render(
    <Canvas
        shadows
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 3, 6 ]
        }}
    >
        <Experience />
    </Canvas>
)
