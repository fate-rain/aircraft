import {createRoot} from 'react-dom/client'
import {Canvas} from '@react-three/fiber'

import './index.css'

const root = document.getElementById('root')!

createRoot(root).render(
    <>
        <Canvas>
            <mesh>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
        </Canvas>
    </>
)
