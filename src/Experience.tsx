function Experience() {
    return (
        <>
            <mesh position-x={-2}>
                <sphereGeometry/>
                <meshBasicMaterial color="orange"/>
            </mesh>
            <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
                <boxGeometry/>
                <meshBasicMaterial color='mediumpurple'/>
            </mesh>
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry/>
                <meshBasicMaterial color='greenyellow'/>
            </mesh>
        </>
    )
}

export default Experience
