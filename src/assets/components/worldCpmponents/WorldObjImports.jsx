import React, {Suspense, useContext, useEffect,useRef } from 'react'
import { AppContext } from '../../stateManagement/AppContext'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'

const GltfLoader=({path})=>{
  useGLTF.preload(path)
  const {scene}=useGLTF(path)
  return(
    <primitive object={scene}/>
    )
  }

const WorldObjImports = () => {
  const snap=useSnapshot(state)
  const {productSource}=useContext(AppContext)
  const refHouseContainer=useRef()
  const scene=useThree()

  const camera=scene.camera

  
  const [x,y,z]=snap.roomCord
  const [a,b,c]=snap.camPosition
  
  const {position,camPosition}=useControls({
      position:{
      value:{x:0,y:0,z:0},
      step:.05
    },
    camPosition:{
      value:{x:0,y:0,z:0},
      step:.05
    },
  })
  
  // console.log(a,b,c,x,y,z)

    useEffect(()=>{
      const houseContainer=refHouseContainer.current

      houseContainer.traverse((child)=>{
        // console.log(child.name)
        // child.visible=false
        // child.name === productSource.worldAssets.houses[snap.optionCount]?.name && (child.visible=false)

        productSource.worldAssets.houses.forEach(element => {
          child.name === element.toogleRoofLevel && (child.visible=snap.showRoof)
        });
        
      })
      console.log(productSource.worldAssets.houses[snap.optionCount]?.name)

    },[snap.showRoof,snap.roomCord,snap.camPosition])

    // console.log(snap.roomCord,snap.camPosition)

  return (
    <group
      // position={[position.x,position.y,position.z]}
      position={[x,y,z]}
    >
      <group ref={refHouseContainer}>
        {productSource.worldAssets.houses.map((model)=><GltfLoader key={model.name} path={model.path}/>)}
      </group>
      <group>
        {productSource.worldAssets.supportFiles.map((model)=><GltfLoader key={model.name} path={model.path}/>)}
      </group>
    </group>
  )
}

export default WorldObjImports