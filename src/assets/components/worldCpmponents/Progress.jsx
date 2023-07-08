import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Progress = () => {
    const {progress,total,errors}=useProgress()
  return (
    // <Html>{errors && progress/total}</Html>
    <Html>loading...{progress.toFixed(2)}</Html>
  )
}

export default Progress