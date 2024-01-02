/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 my-appartment.glb -p 10 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/my-appartment.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.walls.geometry} material={materials['Material.002']} position={[-0.6340501904, 1.6000000238, -0.1136895642]} scale={[1, 1.6000000238, 1]} />
      <mesh geometry={nodes.kitchen.geometry} material={materials['Material.002']} position={[-1.9809598923, 1.3449496031, -4.9673027992]} scale={[1, 1.3449494839, 1]} />
      <mesh geometry={nodes.floor.geometry} material={materials['Material.002']} position={[-2.2301690578, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/my-appartment.glb')