import React, { Suspense, useContext, useEffect,useRef } from 'react'
import { AppContext } from '../../stateManagement/AppContext'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'

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

    useEffect(()=>{
      const houseContainer=refHouseContainer.current

      houseContainer.traverse((child)=>{
        // console.log(child)

        child.name === productSource.worldAssets.toggleRoofFLevelOpt1 && (child.visible=snap.showRoof)
        child.name === productSource.worldAssets.toggleRoofFLevelOpt2 && (child.visible=snap.showRoof)
      })

      // console.log(productSource.worldAssets.toggleRoofFLevelOpt1)

    },[])

    // console.log(snap.hideRoofLevel)

  return (
    <group
      position={productSource.worldAssets.roomCord}
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