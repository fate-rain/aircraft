import {MutableRefObject, useEffect, useRef} from "react";
import * as THREE from 'three'
import {TransformControls, useAnimations, useGLTF} from "@react-three/drei";

type Primitive = MutableRefObject<THREE.Object3D<THREE.Object3DEventMap>>

/**
 * 飞机
 */
function Aircraft() {
    const aircraft = useRef()
    const model = useGLTF('./models/aircraft.glb')

    const animations = useAnimations(model.animations, model.scene)

    useEffect(() => {
        // const action = animations.actions['Take 001']
        // action?.fadeIn(0.5).play()
        //
        // return () => {
        //     action?.fadeOut(0.5)
        // }
    }, [animations])

    return (
        <>
            <primitive
                ref={aircraft}
                object={model.scene}
                scale={2.5}
                position={[0, -0.7, 0]}
                rotation={[Math.PI / 4, -Math.PI / 6, 0]}
            />
            <TransformControls object={aircraft as unknown as Primitive}/>
        </>
    )
}

export default Aircraft
