import { useGLTF } from '@react-three/drei'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../stateManagement/AppContext'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import { useThree } from '@react-three/fiber'

const BaseObj=()=>{
    return(
        <mesh>
            <boxGeometry/>
            <meshBasicMaterial/>
        </mesh>
    )
}

const ExperienceGltfObjs=({item})=>{
    useGLTF.preload(item.path)
    const {scene}=useGLTF(item.path)
    return(
        <group name={item.name}>
            <primitive object={scene}/>
        </group>
    )
}

const ExperienceObjs = () => {
    const snap=useSnapshot(state)
    const {productSource}=useContext(AppContext)
    const models=useThree()

    useEffect(()=>{
        productSource.worldAssets.houses.forEach(element => {
            models.scene.traverse((obj)=>{
                obj.name === element.toogleRoofLevel && (obj.visible=snap.showRoof)
            })
        })
    })

    // console.log(models)

    return (
    <>
        {/* <BaseObj/> */}
        <group
            position={snap.roomCord}
        >
            <group>
                {productSource.worldAssets?.houses.map((item)=><ExperienceGltfObjs key={item.name} item={item}/>)}
            </group>
            <group>
                {productSource.worldAssets?.supportFiles.map((item)=><ExperienceGltfObjs key={item.name} item={item}/>)}
            </group>
        </group>
    </>
  )
}

export default ExperienceObjs