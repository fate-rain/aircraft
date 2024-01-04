import {useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import { OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'

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

    return (
        <>
            <color args={['ivory']} attach="background" />
            {/* fps */}
            <Perf position="top-left" />
            {/* 控制器 */}
            <OrbitControls makeDefault />

            {/* 平行光 */}
            <directionalLight ref={directionalLight} castShadow position={[1, 2, 3]} intensity={1.5} />
            {/* 环境光 */}
            <ambientLight intensity={2} />

            <mesh castShadow position-x={-2}>
                <sphereGeometry/>
                <meshStandardMaterial color="orange"/>
            </mesh>

            <mesh castShadow ref={cube} rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                <boxGeometry/>
                <meshStandardMaterial color='mediumpurple'/>
            </mesh>

            <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry/>
                <meshStandardMaterial color='greenyellow'/>
            </mesh>
        </>
    )
}

export default Experience
