import {TransformControls, useAnimations, useGLTF} from "@react-three/drei";
import {useEffect} from "react";

/**
 * 飞机
 */
function Aircraft() {
    const model = useGLTF('./models/aircraft.glb')

    const animations = useAnimations(model.animations, model.scene)

    useEffect(() => {
        const action = animations.actions['Take 001']
        action?.fadeIn(0.5).play()

        return () => {
            action?.fadeOut(0.5)
        }
    }, [animations])

    return (
        <TransformControls>
            <primitive object={model.scene} scale={3}/>
        </TransformControls>
    )
}

export default Aircraft
