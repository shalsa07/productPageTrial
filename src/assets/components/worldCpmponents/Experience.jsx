import React, { useContext } from 'react'
import BackBtn from './worldBack/BackBtn'
import ExperienceEnvi from './ExperienceEnvi'
import state from '../../stateManagement/store'
import { useSnapshot } from 'valtio'
import { AppContext } from '../../stateManagement/AppContext'
import WorldTitle from './wordlTitle/WorldTitle'
import WorldMenuContainer from './worldMenuContainer/WorldMenuContainer'
import OptionsBtn from './worldOptionBtn/OptionsBtn'
import WorldMenuContainerAr360 from './worldMenuContainer/WorldMenuContainerAr360'
import WorldMenuContainerLevels from './worldMenuContainer/WorldMenuContainerLevels'
import WorldMenuContainerRooms from './worldMenuContainer/WorldMenuContainerRooms'
import WorldArrows from './arrowsContainers/WorldArrows'

const Experience = () => {
    const snap=useSnapshot(state)
    const {productSource}=useContext(AppContext)

    state.roomCord=productSource.worldAssets?.roomCordsArray.default
    state.camPosition=productSource.worldAssets?.camPosition
    // state.camPosition=productSource.worldAssets?.orbitTarget
    state.maxDist=productSource.worldAssets?.maxDist
    state.minDist=productSource.worldAssets?.minDist

  return (
    <>
        {snap._3dModelState && <BackBtn/>}
        {snap.showArrows && <WorldArrows/>}
        <WorldTitle/>
        <OptionsBtn/>
        <WorldMenuContainerAr360/>
        <WorldMenuContainer/>
        <WorldMenuContainerLevels/>
        <WorldMenuContainerRooms/>
        
        <ExperienceEnvi/>
    </>
  )
}

export default Experience