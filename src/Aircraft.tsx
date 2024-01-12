import * as THREE from 'three';
import {type MutableRefObject, useEffect, useRef} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import {TransformControls, useAnimations, useGLTF} from "@react-three/drei";
import {useControls} from 'leva';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

// https://gsap.com/docs/v3/Plugins/ScrollTrigger/
gsap.registerPlugin(ScrollTrigger);

type Primitive = THREE.Object3D<THREE.Object3DEventMap>

/**
 * 飞机
 */
function Aircraft() {
    const aircraft = useRef<Primitive>()

    const {camera} = useThree()
    const model = useGLTF('./models/aircraft.glb')
    const animations = useAnimations(model.animations, model.scene)

    // 播放模型动画
    useEffect(() => {
        const action = animations.actions['Take 001']

        // 淡入
        action?.fadeIn(0.5).play()

        return () => {
            // 淡出
            action?.fadeOut(0.5)
        }
    }, [animations])

    useGSAP(() => {
        // 时间线：https://gsap.com/docs/v3/GSAP/Timeline
        const tl = gsap.timeline({
            duration: 8,
            scrollTrigger: {
                scrub: 0.5
            }
        });

        // 0s -> 2s
        tl.to(aircraft.current!.rotation, {y: 0, z: 0, duration: 2}, 0)
        tl.to(aircraft.current!.position, {x: -1.6, y: -3.5, z: 1, duration: 2}, 0)

        // 2s -> 3s
        tl.to(aircraft.current!.rotation, {y: Math.PI / 4, z: Math.PI / 4, duration: 1}, 2)
        tl.to(aircraft.current!.position, {x: -1, y: -5.5, z: 1.2, duration: 1}, 2)

        // 3s -> 4s
        tl.to(aircraft.current!.rotation, {y: -Math.PI / 4, z: 2 * Math.PI, duration: 1}, 3)
        tl.to(aircraft.current!.position, {x: 2, y: -8, z: -1, duration: 1}, 3)

        // 4s -> 7s
        tl.to(aircraft.current!.rotation, {y: Math.PI / 4, duration: 3}, 4)
        tl.to(aircraft.current!.position, {x: -2, y: -16, z: 1.2, duration: 3}, 4)

        // 7s -> 8s
        tl.to(aircraft.current!.rotation, {y: Math.PI / 3, z: Math.PI / 10, duration: 1}, 7)
        tl.to(aircraft.current!.position, {x: 2, y: -20, z: 1.5, duration: 1}, 7)
    });

    useFrame(() => {
        const y = aircraft.current!.position.y
        camera.position.y = y + 1.5
        camera.lookAt(new THREE.Vector3(0, y + 1.5, 0))
    });

    const {debug} = useControls({
        debug: false
    });

    return (
        <>
            <primitive
                ref={aircraft}
                object={model.scene}
                scale={3.5}
                position={[0, -1.5, 0]}
                rotation={[Math.PI / 10, -Math.PI / 6, -Math.PI / 20]}
            />
            {debug && (
                <TransformControls object={aircraft as unknown as MutableRefObject<Primitive>}/>
            )}
        </>
    )
}

useGLTF.preload('./models/aircraft.glb')

export default Aircraft
