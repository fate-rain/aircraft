import './index.css'

import {createRoot} from 'react-dom/client'
import {Canvas} from '@react-three/fiber'

import Experience from "./Experience.tsx";

const root = document.getElementById('root')!

createRoot(root).render(
    <>
        <Canvas>
            <Experience/>
        </Canvas>
    </>
)
