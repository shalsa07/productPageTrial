import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import { AppContext } from '../../stateManagement/AppContext'
import { degToRad } from 'three/src/math/MathUtils'
import Progress from './Progress'

import ObjImports from './ObjImports'
// const ObjImports=React.lazy(()=>{
//     return import('./ObjImports')
// })

import {_360Container} from './_360Container'
// const _360Container=React.lazy(()=>{
//     return import('./_360Container')
// })

const WorldObjs = () => {
    const snap=useSnapshot(state)
    const {productSource}=useContext(AppContext)

    useEffect(()=>{
        state.minDistance=productSource.worldAssets?.minDist
        state.maxDistance=productSource.worldAssets?.maxDist
    })
    
  return (
    <Canvas
        camera={{position:productSource.worldAssets?.camPosition}}
    >
        <Suspense fallback={<Progress/>}>
            <Environment files={productSource.worldAssets?.enviHdriMap}/>
            <ambientLight intensity={.5}/>
            <OrbitControls
                enablePan={false}
                maxDistance={snap.maxDistance}
                minDistance={snap.minDistance}
                maxPolarAngle={degToRad(snap.maxPolarAngle)}
            />
            {snap._3dModelState ? <Suspense fallback={<Progress/>}><ObjImports/></Suspense> : <Suspense fallback={<Progress/>}><_360Container/></Suspense>}
        </Suspense>
    </Canvas>
  )
}

export default WorldObjs