import React, { Suspense, useContext, useEffect } from 'react'
import './World.scss'
import { theMontes } from '../../theMontes'
import { AppContext } from '../../stateManagement/AppContext'
import BackBtn from './worldBack/BackBtn'
import OptionsBtn from './worldOptionBtn/OptionsBtn'
import WorldTitle from './wordlTitle/WorldTitle'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import WorldArrows from './arrowsContainers/WorldArrows'
import WorldMenuContainer from './worldMenuContainer/WorldMenuContainer'
import {_360Container} from './_360Container'
import WorldMenuContainerAr360 from './worldMenuContainer/WorldMenuContainerAr360'
import WorldMenuContainerLevels from './worldMenuContainer/WorldMenuContainerLevels'
import WorldMenuContainerRooms from './worldMenuContainer/WorldMenuContainerRooms'

// import Ar from './Ar'
const Ar=React.lazy(()=>{
  return import('./Ar')
})

// import WorldObjs from './WorldObjs'
const WorldObjs=React.lazy(()=>{
    return import('./WorldObjs')
})

const World = () => {
  const {productSource}=useContext(AppContext)
  const snap=useSnapshot(state)
  useEffect(()=>{
    state.roomCord=productSource.worldAssets.roomCordsArray?.default
    state.camPosition=productSource.worldAssets.camPosition
  },[])
  return (
    <div className='webgl_world'>
      {snap._3dModelState ? <BackBtn/> : null}
      <OptionsBtn/>
      <WorldTitle/>
      {snap.showArrows && <WorldArrows/>}
      <WorldMenuContainerAr360/>
      <WorldMenuContainer/>
      <WorldMenuContainerLevels/>
      <WorldMenuContainerRooms/>
 
      {snap.ArMode ? <Suspense><Ar/></Suspense> : <Suspense><WorldObjs/></Suspense>}
    </div>
  )
}

export default World