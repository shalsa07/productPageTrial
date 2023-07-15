import React, { Suspense, useContext } from 'react'
import ExperienceObjs from './ExperienceObjs'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Progress from './Progress'
import { AppContext } from '../../stateManagement/AppContext'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import { useControls } from 'leva'
import Experience360 from './worldMenuContainer/Experience360'

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
    const {camPosition,target}=useControls({
        target:{
            value:{x:0,y:0,z:0},
            step:.05
        }
    })
  return (
    <Canvas
        camera={{position:snap.camPosition}}
        // camera={{position:[camPosition.x,camPosition.y,camPosition.z]}}
    >
        <Suspense fallback={<Progress/>}>
            <Envi/>
            <OrbitControls
              minDistance={snap.minDist}
              maxDistance={snap.maxDist}
              target={snap.orbitTarget}
              // target={[target.x,target.y,target.z]}
            />
            {snap._3dModelState ? <ExperienceObjs/> : <Experience360/>}
        </Suspense>
    </Canvas>
  )
}

export default ExperienceEnvi