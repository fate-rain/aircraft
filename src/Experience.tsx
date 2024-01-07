import {useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {
    Sky,
    OrbitControls,
    useHelper,
} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import {useControls} from 'leva'

type Cube = THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>>

function Experience() {
    const cube = useRef<Cube>(null)
    const directionalLight = useRef<THREE.DirectionalLight>(null)

    // 灯光助手
    // @ts-ignore
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    useFrame((_, delta) => {
        if (cube.current) cube.current.rotation.y += delta * 0.2
    })

    const {sunPosition} = useControls('sky', {
        sunPosition: {value: [1, 2, 3]}
    })

    return (
        <>
            <color args={['ivory']} attach="background"/>
            {/* fps */}
            <Perf position="top-left"/>
            {/* 控制器 */}
            <OrbitControls makeDefault/>

            {/* 平行光 */}
            <directionalLight
                ref={directionalLight}
                position={sunPosition}
                intensity={1.5}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={1}
                shadow-camera-far={10}
                shadow-camera-top={5}
                shadow-camera-right={5}
                shadow-camera-bottom={-5}
                shadow-camera-left={-5}
            />
            {/* 环境光 */}
            <ambientLight intensity={2}/>

            <Sky sunPosition={sunPosition}/>

            <mesh castShadow position-x={-2}>
                <sphereGeometry/>
                <meshStandardMaterial color="orange"/>
            </mesh>

            <mesh castShadow ref={cube} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                <boxGeometry/>
                <meshStandardMaterial color='mediumpurple'/>
            </mesh>

            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry/>
                <meshStandardMaterial color='greenyellow'/>
            </mesh>
        </>
    )
}

export default Experience
