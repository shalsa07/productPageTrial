import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Progress = () => {
    const {progress,total,errors}=useProgress()
  return (
    // <Html>{errors && progress/total}</Html>
    <Html>loading...</Html>
  )
}

export default Progress