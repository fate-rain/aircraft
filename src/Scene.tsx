import {Canvas} from "@react-three/fiber";
import {
    OrbitControls,
    Grid,
    Environment
} from '@react-three/drei'
import {Perf} from 'r3f-perf'

import Aircraft from "./Aircraft.tsx";

function Scene() {

    return (
        <div className="scene">
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 6]
                }}
            >
                {/*环境*/}
                <Environment files='./environment/venice_sunset_1k.hdr'/>
                <color args={['#0086CF']} attach="background"/>
                {/* fps */}
                <Perf position="top-left"/>
                {/* 控制器 */}
                <OrbitControls makeDefault/>
                {/*辅助线*/}
                <axesHelper args={[2]}/>
                {/*网格*/}
                <Grid args={[100, 100]} cellColor="white"/>

                <Aircraft/>
            </Canvas>
        </div>
    )
}

export default Scene
