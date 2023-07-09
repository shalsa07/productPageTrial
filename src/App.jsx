import React,{ Suspense, useEffect, useState } from 'react'
import './App.scss'
import { useSnapshot } from 'valtio'
import state from './assets/stateManagement/store'
import { theMontes } from './assets/theMontes'
import { AppContext } from './assets/stateManagement/AppContext'
import { mrEdwards } from './assets/mrEdwards'
import ModelPage from './assets/components/modelPage/ModelPage'
import NavBar from './assets/components/navBar/NavBar'

// import World from './assets/components/worldCpmponents/World'
const World=React.lazy(()=>{
  return import('./assets/components/worldCpmponents/World')
})

let productSource=[]
productSource=theMontes

function App() {
  return (
    <AppContext.Provider
      value={{
        productSource
      }}
    >
      <Suspense>
        <NavBar/>
        <ModelPage/>
      </Suspense>
    </AppContext.Provider>
  )
}

export default App
