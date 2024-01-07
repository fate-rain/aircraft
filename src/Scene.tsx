import {
    OrbitControls,
    Grid,
    Environment
} from '@react-three/drei'
import {Perf} from 'r3f-perf'

import Aircraft from "./Aircraft.tsx";

function Scene() {

    return (
        <>
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
        </>
    )
}

export default Scene
