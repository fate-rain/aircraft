import {useEffect, useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {
    OrbitControls,
    useHelper,
    useGLTF,
    useAnimations
} from '@react-three/drei'
import {Perf} from 'r3f-perf'

type Cube = THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>>

function Experience() {
    const cube = useRef<Cube>(null)
    const directionalLight = useRef<THREE.DirectionalLight>(null)
    const model = useGLTF('./models/aircraft.glb')

    const animations = useAnimations(model.animations, model.scene)

    // 灯光助手
    // @ts-ignore
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    useFrame((_, delta) => {
        if (cube.current) cube.current.rotation.y += delta * 0.2
    })

    useEffect(() =>
    {
        console.log('animations', animations)
        const action = animations.actions['Take 001']
        action?.fadeIn(0.5).play()

        return () => {
            action?.fadeOut(0.5)
        }
    }, [animations])

    return (
        <>
            <color args={['ivory']} attach="background"/>
            {/* fps */}
            <Perf position="top-left"/>
            {/* 控制器 */}
            <OrbitControls makeDefault/>

            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5}/>
            <ambientLight intensity={0.5}/>

            <primitive object={model.scene}/>
        </>
    )
}

export default Experience
