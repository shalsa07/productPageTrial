import React, { Suspense, useContext } from 'react'
import ExperienceObjs from './ExperienceObjs'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Progress from './Progress'
import { AppContext } from '../../stateManagement/AppContext'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'

const Envi = () => {
    const {productSource}=useContext(AppContext)
  return (
    <>
        <ambientLight/>
        <Environment files={productSource.worldAssets?.enviHdriMap}/>
    </>
  )
}

const ExperienceEnvi = () => {
    const snap=useSnapshot(state)
  return (
    <Canvas
        camera={{position:snap.camPosition}}
    >
        <Suspense fallback={<Progress/>}>
            <Envi/>
            <ExperienceObjs/>
            <OrbitControls
                minDistance={snap.minDist}
                maxDistance={snap.maxDist}
                target={snap.orbitTarget}
            />
        </Suspense>
    </Canvas>
  )
}

export default ExperienceEnvi