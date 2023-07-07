import React,{ Suspense, useEffect, useState } from 'react'
import './App.css'
import { useSnapshot } from 'valtio'
import state from './assets/stateManagement/store'
import { theMontes } from './assets/theMontes'
import { AppContext } from './assets/stateManagement/AppContext'

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
        <World/>
      </Suspense>
    </AppContext.Provider>
  )
}

export default App
