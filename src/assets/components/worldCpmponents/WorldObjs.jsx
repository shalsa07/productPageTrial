import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useContext, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import { AppContext } from '../../stateManagement/AppContext'
import { degToRad } from 'three/src/math/MathUtils'
import Progress from './Progress'
import { useControls } from 'leva'

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
    
    // const {target}=useControls({
    //   target:{
    //     value:{x:0,y:0,z:0},
    //     step:.05
    //   }
    // })

  return (
    <Canvas>
        <Suspense fallback={<Progress/>}>
            <Environment files={productSource.worldAssets?.enviHdriMap}/>
            <ambientLight intensity={.5}/>
            <OrbitControls
                enablePan={false}
                maxDistance={snap.maxDist}
                minDistance={snap.minDist}
                dampingFactor={.1}
                enableDamping={true}
                target={snap.orbitTarget}
                // target={[target.x,target.y,target.z]}
            />
            {snap._3dModelState ? <Suspense fallback={<Progress/>}><ObjImports/></Suspense> : <Suspense fallback={<Progress/>}><_360Container/></Suspense>}
        </Suspense>
    </Canvas>
  )
}

export default WorldObjs