import { useGLTF } from '@react-three/drei'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../stateManagement/AppContext'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'

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

    const [a,b,c]=snap.camPosition

    // console.log(snap.camPosition,a,b,c)
    
        const {roomCord,camPosition}=useControls({
            roomCord:{
                value:{x:0,y:0,z:0},
                step:.05
            },
            camPosition:{
                value:{x:0,y:0,z:0},
                step:.05
            }
        })

    useEffect(()=>{
            
        // state.roomCord=productSource.worldAssets?.default
        // state.camPosition=productSource.worldAssets?.camPosition
        // state.maxDist=productSource.worldAssets?.maxDist
        // state.minDist=productSource.worldAssets?.minDist
        // models.camera.position.set(camPosition.x,camPosition.y,camPosition.z)
        snap.showRoomsOptions && models.camera.position.set(a,b,c)

        productSource.worldAssets.houses.forEach(element => {
            models.scene.traverse((obj)=>{
                obj.name === element.toogleRoofLevel && (obj.visible=snap.showRoof)
            })
        })

        // console.log(snap.roomCord,snap.camPosition,snap.orbitTarget)
    })

    // console.log(models)

    return (
    <>
        {/* <BaseObj/> */}
        <group
            position={snap.roomCord}
            // position={[roomCord.x,roomCord.y,roomCord.z]}
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