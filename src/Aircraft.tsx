import {MutableRefObject, useEffect, useRef} from "react";
import * as THREE from 'three'
import {useThree, useFrame} from "@react-three/fiber";
import {TransformControls, useAnimations, useGLTF} from "@react-three/drei";
import {useMotionValueEvent, useScroll} from "framer-motion";

import RouteLine from "./components/RouteLine";
import {curve} from "./utils/catmull.ts";

type Primitive = THREE.Object3D<THREE.Object3DEventMap>

/**
 * 飞机
 */
function Aircraft() {
    const aircraft = useRef<Primitive>()
    const progress = useRef(0)

    const {camera} = useThree()
    const model = useGLTF('./models/aircraft.glb')
    const animations = useAnimations(model.animations, model.scene)
    const {scrollYProgress, scrollY} = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (p) => {
        console.log("Page scrollYProgress: ", p)
        progress.current = p
    })

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scrollY: ", latest)
    })

    useEffect(() => {
        console.log('animations', animations)
        // const action = animations.actions['Take 001']
        // action?.fadeIn(0.5).play()
        //
        // return () => {
        //     action?.fadeOut(0.5)
        // }
    }, [animations])

    useFrame(() => {
        const _progress = progress.current;
        const vector = curve.getPoint(_progress);
        // const tangent = curve.getTangent(_progress);
        // const tangent1 = curveLine.getTangent(_progress);
        // 位置向量和切线向量相加即为所需朝向的点向量
        // const lookAtVec = tangent.add(vector);

        const rotationY = -Math.PI / 6 + Math.PI * _progress * 1.5;
        let rotationZ = -Math.PI / 20;

        if (_progress < 0.274) {
            rotationZ = rotationZ + Math.PI * _progress * 0.7;
        } else if (_progress > 0.274) {
            rotationZ = rotationZ + Math.PI * _progress * 1.5;
        }

        if (aircraft.current) {
            // console.log('vector', vector)
            aircraft.current.position.set(vector.x, vector.y, vector.z);
            // Math.PI / 10, rotationY, rotationZ
            aircraft.current.rotation.x = Math.PI / 10
            if (_progress < 0.274) {
                aircraft.current.rotation.y = rotationY
            }
            aircraft.current.rotation.z = rotationZ
            // // aircraft.current?.lookAt(lookAtVec);
            camera.position.y = vector.y + 1.5;
            // // camera.position.z = vector.z + 10;
            camera.lookAt(new THREE.Vector3(0, vector.y + 1.5, 0));
        }
    })

    return (
        <>
            <primitive
                ref={aircraft}
                object={model.scene}
                scale={3.5}
                rotation={[Math.PI / 10, -Math.PI / 6, -Math.PI / 20]}
            />
            <TransformControls object={aircraft as unknown as MutableRefObject<Primitive>}/>
            <RouteLine/>
        </>
    )
}

export default Aircraft
