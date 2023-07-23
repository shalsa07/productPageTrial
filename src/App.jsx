import React,{ Suspense, useEffect, useState } from 'react'
import './App.scss'
import { useSnapshot } from 'valtio'
import state from './assets/stateManagement/store'
import { theMontes } from './assets/theMontes'
import { AppContext } from './assets/stateManagement/AppContext'
import { mrEdwards } from './assets/mrEdwards'
import ModelPage from './assets/components/modelPage/ModelPage'
import NavBar from './assets/components/navBar/NavBar'
import Footer from './assets/components/footer/Footer'
import { mrEdwardsKapili } from './assets/mrEdwardsKapili'
import HeroSectionParallax from './assets/components/HeroSectionParallax/HeroSectionParallax'

// import Ar from './assets/components/worldCpmponents/Ar'
const Ar=React.lazy(()=>{
  return import('./assets/components/worldCpmponents/Ar')
})

// import Experience from './assets/components/worldCpmponents/Experience'
const Experience=React.lazy(()=>{
  return import('./assets/components/worldCpmponents/Experience')
})

// import Popup from './assets/components/popup/Popup'
const Popup=React.lazy(()=>{
  return import('./assets/components/popup/Popup')
})

// import World from './assets/components/worldCpmponents/World'
const World=React.lazy(()=>{
  return import('./assets/components/worldCpmponents/World')
})

let productSource=[]
productSource=mrEdwardsKapili

function App() {
  const snap=useSnapshot(state)
  const [mapInd,setMapInd]=useState(0)
  const [sectionCount,setSectionCount]=useState(0)
  return (
    <AppContext.Provider
      value={{
        productSource,mapInd,setMapInd,sectionCount,setSectionCount
      }}
    >
      <Suspense>
        {snap.popup && <Popup/>}
        <NavBar/>
        {/* {snap.fullSrcn 
          ? <div 
              className="webglWrap_Fullscrn"
              onDoubleClick={()=>{
                if(!snap._3dModelState){
                  state.fullSrcn=!snap.fullSrcn
                }
              }} 
            >
            <Suspense><Experience/></Suspense>
          </div>
          : <><ModelPage/><Footer/></>} */}
        <HeroSectionParallax/>
        <Footer/>
      </Suspense>
    </AppContext.Provider>
  )
}

export default App
