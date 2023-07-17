import { Html, useGLTF } from '@react-three/drei'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../stateManagement/AppContext'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'

import LocationOnIcon from '@mui/icons-material/LocationOn';

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
    const [poiHover,setPOIState]=useState(false)

    const [a,b,c]=snap.camPosition

    // console.log(snap.camPosition,a,b,c)
    
        // const {roomCord,camPosition}=useControls({
        //     roomCord:{
        //         value:{x:0,y:0,z:0},
        //         step:.05
        //     },
        //     camPosition:{
        //         value:{x:0,y:0,z:0},
        //         step:.05
        //     }
        // })

    useEffect(()=>{
            
        models.camera.position.set(a,b,c)

        productSource.worldAssets.houses.forEach(element => {
            models.scene.traverse((obj)=>{
                obj.name === element.toogleRoofLevel && (obj.visible=snap.showRoof)
                
            })
        })

        // console.log(models)
    },[snap.camPosition,snap.orbitTarget,snap.roomCord,snap.showRoof])
    
    console.log(productSource.POIs)

    return (
    <>
        {/* <BaseObj/> */}
        <group
            position={snap.roomCord}
            // position={[roomCord.x,roomCord.y,roomCord.z]}
        >
            {snap.showPOI && <group>
                {productSource.worldAssets.POIs.ext?.map((item)=><Html key={item.name.title} onClick={()=>console.log('clicked ')} onMouseOver={()=>console.log('mouse')} center occlude position={item.roomCord}><LocationOnIcon style={{width:'20px',height:'20px', cursor:'pointer', color: poiHover ? 'red' : 'white'}} /></Html>)}
                {snap.showRoof && productSource.worldAssets.POIs.int?.map((item)=><Html className='' key={item.name.title} onClick={()=>console.log('clicked ')} onMouseOver={()=>console.log('mouse')} center occlude position={item.roomCord}><LocationOnIcon style={{width:'20px',height:'20px', cursor:'pointer', color: poiHover ? 'red' : 'white'}} /></Html>)}
            </group>}
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