import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import ObjImports from './WorldObjImports'
import { AppContext } from '../../stateManagement/AppContext'
import { degToRad } from 'three/src/math/MathUtils'
import {_360Container} from './_360Container'
import { ARButton, XR } from '@react-three/xr'
import ExperienceObjs from './ExperienceObjs'
import BackBtn from './worldBack/BackBtn'
import WorldArrows from './arrowsContainers/WorldArrows'
import WorldTitle from './wordlTitle/WorldTitle'
import OptionsBtn from './worldOptionBtn/OptionsBtn'
import WorldMenuContainerAr360 from './worldMenuContainer/WorldMenuContainerAr360'
import WorldMenuContainer from './worldMenuContainer/WorldMenuContainer'
import WorldMenuContainerLevels from './worldMenuContainer/WorldMenuContainerLevels'
import WorldMenuContainerRooms from './worldMenuContainer/WorldMenuContainerRooms'

const Ar = () => {
    const snap=useSnapshot(state)
    const {productSource}=useContext(AppContext)

    useEffect(()=>{
        state.minDistance=productSource.worldAssets?.minDist
        state.maxDistance=productSource.worldAssets?.maxDist
    })
    
  return (
    <>
    <ARButton className='arButton'/>
    <Canvas
        camera={{position:productSource.worldAssets?.camPosition}}
    >
        <Suspense>
            <Environment files={productSource.worldAssets?.enviHdriMap}/>
            <ambientLight intensity={.5}/>
            <XR>
                <ExperienceObjs/>
            </XR>
        </Suspense>
    </Canvas>
    </>
  )
}

export default Ar