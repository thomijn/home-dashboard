'use client'

import { OrbitControls, Stats, useHelper } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import { useRef } from "react"
import { PointLightHelper } from "three"
import CameraControls from "./CameraControls"

const Scene = () => {
    return (
        <Canvas shadows camera={{ fov: 25, position: [-12, 20, 12] }}>
            <Lights />
            <Model />
            <OrbitControls />
            <CameraControls />
            <Stats />
        </Canvas>
    )
}

const Lights = () => {
    const light = useRef()
    const light2 = useRef()
    const light3 = useRef()
    useHelper(light, PointLightHelper, 0.2, 'hotpink')
    useHelper(light2, PointLightHelper, 0.2, 'hotpink')
    useHelper(light3, PointLightHelper, 0.2, 'hotpink')

    return (
        <>
            <ambientLight intensity={4} />
            {/* <pointLight castShadow ref={light} intensity={50} position={[-1.5, 2.5, 1]} color={'red'} />
            <pointLight castShadow ref={light2} intensity={20} position={[-2.5, 2.5, -5]} color={'yellow'} />
            <pointLight castShadow ref={light3} intensity={20} position={[-2, 2.5, 4.5]} color={'yellow'} /> */}
        </>
    )
}

export default Scene