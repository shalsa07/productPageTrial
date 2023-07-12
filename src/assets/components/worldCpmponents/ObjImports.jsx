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

  // console.log(snap.roomCord)

  const [x,y,z]=snap.roomCord
  const [a,b,c]=snap.camPosition
    
    // const {position,camPosition}=useControls({
    //   position:{
    //     value:{x:0,y:0,z:0},
    //     step:.05
    //   },
    //   camPosition:{
    //     value:{x:0,y:0,z:0},
    //     step:.05
    //   },
    // })

    // console.log(a,b,c)

    scene.camera.position.set(a,b,c)

    // console.log(camera)

    useEffect(()=>{
      const houseContainer=refHouseContainer.current

      houseContainer.traverse((child)=>{
        // console.log(child.name)
        // child.visible=false
        child.name === productSource.worldAssets.houses[snap.optionCount]?.name && (child.visible=false)

        productSource.worldAssets.houses.forEach(element => {
          child.name === element.toogleRoofLevel && (child.visible=snap.showRoof)
        });
        
      })
      // console.log(snap.showRoofLevel)

    },[snap.showRoof,snap.roomCord,snap.camPosition])

    // console.log(x,y,z,snap.roomCord[0],snap.roomCord[1],snap.roomCord[2])

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

export default ObjImports