import { Canvas } from '@react-three/fiber'
import { ARButton, XR, useHitTest,  } from '@react-three/xr'
import React, { useContext, useRef } from 'react'
import Experience from './Experience'
import ExperienceObjs from './ExperienceObjs'
import { Environment } from '@react-three/drei'
import { AppContext } from '../../stateManagement/AppContext'
import { Matrix4 } from 'three'

const HitTest=()=>{
    const refGroup=useRef()
    // useHitTest((hitMatrix: Matrix4, hit: XRHitResult) => {
    //     // use hitMatrix to position any object on the real life surface
    //     hitMatrix.decompose(refGroup.current.position, refGroup.current.quaternion, refGroup.current.scale)
    //   })
    const {productSource}=useContext(AppContext)
    return(
        <>
            <ambientLight/>
            <Environment files={productSource.worldAssets?.enviHdriMap}/>   
            <group ref={refGroup}>
                <ExperienceObjs/>
            </group>
        </>
    )
}

const Ar = () => {
  return (
    <>
        <ARButton className='arButton'/>
        <Canvas>
            <XR>
                <mesh>
                    <meshBasicMaterial/>
                    <boxGeometry/>
                </mesh>
            </XR>
        </Canvas>
    </>
  )
}

export default Ar