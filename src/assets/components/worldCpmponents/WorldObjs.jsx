import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import ObjImports from './ModelImport'
import { AppContext } from '../../stateManagement/AppContext'
import { degToRad } from 'three/src/math/MathUtils'

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
        <Suspense>
            <Environment files={productSource.worldAssets?.enviHdriMap}/>
            <ambientLight intensity={.5}/>
            <OrbitControls
                enablePan={false}
                maxDistance={snap.maxDistance}
                minDistance={snap.minDistance}
                maxPolarAngle={degToRad(snap.maxPolarAngle)}
            />
            <ObjImports/>
        </Suspense>
    </Canvas>
  )
}

export default WorldObjs