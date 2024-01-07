import {MutableRefObject, useEffect, useRef, useState} from "react";
import * as THREE from 'three'
import {TransformControls, useAnimations, useGLTF} from "@react-three/drei";
import {useMotionValueEvent, useScroll} from "framer-motion";

type Primitive = THREE.Object3D<THREE.Object3DEventMap>

/**
 * 飞机
 */
function Aircraft() {
    const aircraft = useRef<Primitive>()
    // const prev = useRef<number>(0)
    const model = useGLTF('./models/aircraft.glb')

    const [position] = useState({
        x: 0,
        y: -1,
        z: 0
    })
    const [rotation] = useState({
        x: Math.PI / 10,
        y: -Math.PI / 6,
        z: -Math.PI / 20
    })
    const animations = useAnimations(model.animations, model.scene)
    const {scrollY} = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log("Page scroll: ", latest)

        if (aircraft.current) {
            if (latest < 600) {
                aircraft.current.position.x = position.x - (Math.sin(latest * 0.001) * 2)

                // rotation
                const x= rotation.x + Math.sin(latest * 0.001)
                aircraft.current.rotation.x = x >= Math.PI / 12 ? Math.PI / 12 : x
                aircraft.current.rotation.y = rotation.y + Math.sin(latest * 0.001)
                aircraft.current.rotation.z = rotation.z + Math.sin(latest * 0.0005)
            } else if (latest < 1000) {
                aircraft.current.rotation.y = rotation.y + Math.sin(latest * 0.001)
                aircraft.current.rotation.z = rotation.z + Math.sin(latest * 0.0005)
            } else if (latest < 1500) {
                // nothing
            }
        }
    })

    useEffect(() => {
        const action = animations.actions['Take 001']
        action?.fadeIn(0.5).play()

        return () => {
            action?.fadeOut(0.5)
        }
    }, [animations])

    return (
        <>
            <primitive
                ref={aircraft}
                object={model.scene}
                scale={2.3}
                position={[0, -1, 0]}
                rotation={[Math.PI / 10, -Math.PI / 6, -Math.PI / 20]}
            />
            <TransformControls object={aircraft as unknown as MutableRefObject<Primitive>}/>
        </>
    )
}

export default Aircraft
