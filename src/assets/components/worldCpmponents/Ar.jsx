import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import ObjImports from './ObjImports'
import { AppContext } from '../../stateManagement/AppContext'
import { degToRad } from 'three/src/math/MathUtils'
import {_360Container} from './_360Container'
import { ARButton, XR } from '@react-three/xr'

const Ar = () => {
    const snap=useSnapshot(state)
    const {productSource}=useContext(AppContext)

    useEffect(()=>{
        state.minDistance=productSource.worldAssets?.minDist
        state.maxDistance=productSource.worldAssets?.maxDist
    })
    
  return (
    <>
    <ARButton/>
    <Canvas
        camera={{position:productSource.worldAssets?.camPosition}}
    >
        <Suspense>
            <XR>
            <Environment files={productSource.worldAssets?.enviHdriMap}/>
            <ambientLight intensity={.5}/>
            <ObjImports/>
            </XR>
        </Suspense>
    </Canvas>
    </>
  )
}

export default Ar