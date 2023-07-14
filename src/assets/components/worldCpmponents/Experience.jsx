import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext } from 'react'
import Progress from './Progress'
import ExperienceObjs from './ExperienceObjs'
import { Environment, OrbitControls } from '@react-three/drei'
import { AppContext } from '../../stateManagement/AppContext'



const ExperienceEnvi = () => {
    const {productSource}=useContext(AppContext)
  return (
    <>
        <ambientLight/>
        <Environment files={productSource.worldAssets?.enviHdriMap}/>
    </>
  )
}

const Experience = () => {
  return (
    <Canvas>
        <Suspense fallback={<Progress/>}>
            <ExperienceEnvi/>
            <ExperienceObjs/>
            <OrbitControls/>
        </Suspense>
    </Canvas>
  )
}

export default Experience