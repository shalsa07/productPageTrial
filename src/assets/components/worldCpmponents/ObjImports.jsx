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

const ObjImports = () => {
  const snap=useSnapshot(state)
  const {productSource}=useContext(AppContext)
  const refHouseContainer=useRef()
  const scene=useThree()

  const camera=scene.camera

  useFrame(()=>{
    // camera.position.set(snap.camPosition)
  })

  const {position,target}=useControls({
    position:{
        value:{x:0,y:0,z:0},
        step:.05
    }
})

    useEffect(()=>{
      const houseContainer=refHouseContainer.current

      houseContainer.traverse((child)=>{
        // console.log(child.name)
        // child.visible=false
        child.name === productSource.worldAssets.toggleRoofFLevelOpt1 && (child.visible=snap.showRoof)
        child.name === productSource.worldAssets.toggleRoofFLevelOpt2 && (child.visible=snap.showRoof)
        // child.name === productSource.worldAssets.houses[snap.optionCount].name && (child.visible=false)
      })

      // scene.scene.traverse((child)=>{
      //   child.name === productSource.worldAssets.houses[snap.optionCount].name && (child.visible=true)
      // })
      // console.log(productSource.worldAssets.houses[snap.optionCount].name)

    },[])

    // console.log(scene)

  return (
    <group
      // position={[position.x,position.y,position.z]}
      position={snap.roomCord}
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

export default ObjImports