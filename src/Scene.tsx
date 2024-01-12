import {Canvas} from "@react-three/fiber";
import {
    OrbitControls,
    Grid,
    Environment
} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import {useControls} from "leva";

import Aircraft from "./Aircraft.tsx";

function Scene() {
    const {debug, environment} = useControls({
        debug: false,
        environment: {
            value: 'venice_sunset_1k',
            options: {
                '落日': 'venice_sunset_1k',
                '火烧云': 'the_sky_is_on_fire_2k'
            }
        }
    })

    return (
        <div className="scene">
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 10]
                }}
            >
                {/*环境*/}
                <Environment files={`./environment/${environment}.hdr`}/>
                {/* fps */}
                {debug && <Perf position="bottom-right"/>}
                {/* 控制器 */}
                {debug && <OrbitControls makeDefault/>}
                {/*辅助线*/}
                {debug && <axesHelper args={[2]}/>}
                {/*网格*/}
                {debug && <Grid infiniteGrid rotation={[Math.PI / 2, 0, 0]} cellColor="white"/>}

                <Aircraft/>
            </Canvas>
        </div>
    )
}

export default Scene
