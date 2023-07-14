import { useGLTF } from '@react-three/drei'
import React, { useContext } from 'react'
import { AppContext } from '../../stateManagement/AppContext'

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
    const {productSource}=useContext(AppContext)
    return (
    <>
        <BaseObj/>
        <group>
            {productSource.worldAssets?.houses.map((item)=><ExperienceGltfObjs key={item.name} item={item}/>)}
        </group>
        <group>
            {productSource.worldAssets?.supportFiles.map((item)=><ExperienceGltfObjs key={item.name} item={item}/>)}
        </group>
    </>
  )
}

export default ExperienceObjs