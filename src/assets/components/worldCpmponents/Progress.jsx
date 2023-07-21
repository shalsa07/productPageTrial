import { Html, useProgress } from '@react-three/drei'
import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'

const Progress = () => {
    const snap=useSnapshot(state)
    const {progress,total,errors}=useProgress()
  return (
    // <Html>{errors && progress/total}</Html>
    <Html 
      position={snap.orbitTarget}
      style={{zIndex:499}} 
      center
    >loading...{progress.toFixed(2)}%</Html>
  )
}

export default Progress