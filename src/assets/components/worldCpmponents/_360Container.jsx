import React, { useContext } from 'react'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import { AppContext } from '../../stateManagement/AppContext'
import { BackSide } from 'three'
import { useTexture } from '@react-three/drei'
import { degToRad } from 'three/src/math/MathUtils'

export const _360Container = () => {
  let count=0
  let mapArray=[]
  let mapArrayPaths=[]

  const snap=useSnapshot(state)
  const{productSource}=useContext(AppContext)

  productSource.worldAssets._360s.forEach(element => {
    mapArray.push('map'+count++)
    mapArrayPaths.push(element.url)
  })

  const map=useTexture(productSource.worldAssets._360s[0].url)
  mapArray=useTexture(mapArrayPaths)
  
  // console.log(mapArray,mapArrayPaths)
  return (
    <mesh rotation={[0,degToRad(120),0]} scale={[1,1,-1]}>
      <meshBasicMaterial map={mapArray[snap.mapCount]} side={BackSide}/>
      <sphereGeometry args={[100,64,64]}/>
    </mesh>
  )
}
