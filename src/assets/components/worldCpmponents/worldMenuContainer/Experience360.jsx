import React, { useContext, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import state from '../../../stateManagement/store'
import { AppContext } from '../../../stateManagement/AppContext'
import { degToRad } from 'three/src/math/MathUtils'
import { useTexture } from '@react-three/drei'
import { BackSide } from 'three'


const Experience360 = () => {
    const snap=useSnapshot(state)
    const {productSource,mapInd}=useContext(AppContext)
    let textureUrlsArray=[]
    let textureMapArray=[]
    let mapIndex=0
    
    productSource.worldAssets?._360s.forEach(element => {
        textureUrlsArray.push(element.url)
    })

    textureUrlsArray.forEach(element => {
        textureMapArray.push(`map${mapIndex++}`) 
    })

    textureMapArray=useTexture(textureUrlsArray)
    useEffect(()=>{

    },[snap.mapNumber])

    // console.log(snap.mapNumber)
  return (
    <mesh scale-z={-1} rotation-y={degToRad(90)}>
        <sphereGeometry args={[100,64,64]}/>
        <meshBasicMaterial 
            map={textureMapArray[mapInd]} 
            side={BackSide}
        />
    </mesh>
  )
}

export default Experience360