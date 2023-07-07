import React, { Suspense, useContext } from 'react'
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

// import WorldObjs from './WorldObjs'
const WorldObjs=React.lazy(()=>{
    return import('./WorldObjs')
})

const World = () => {
  const snap=useSnapshot(state)
  return (
    <div className='webgl_world'>
        <BackBtn/>
        <OptionsBtn/>
        <WorldTitle/>
        <WorldArrows/>
        <WorldMenuContainer/>
      {/* <div className="webgl_world_Container">
      </div> */}
        <Suspense><WorldObjs/></Suspense>
    </div>
  )
}

export default World