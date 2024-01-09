import * as THREE from 'three'
import {useEffect, useRef} from "react";

import {points} from "../utils/catmull.ts";

function RouteLine() {
    const geometry = useRef<THREE.BufferGeometry<THREE.NormalBufferAttributes>>(null)

    useEffect(() => {
        geometry.current?.setFromPoints(points)
    }, [])

    return (
        <line>
            <bufferGeometry ref={geometry}/>
            <lineBasicMaterial color="red"/>
        </line>
    )
}

export default RouteLine
