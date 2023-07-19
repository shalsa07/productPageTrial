import React, { useContext } from 'react'
import './BackBtn.scss'
import WorldBtn from '../worldBtn/WorldBtn'

//back
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import state from '../../../stateManagement/store';
import { AppContext } from '../../../stateManagement/AppContext';


const BackBtn = () => {
  const {productSource}=useContext(AppContext)

  const backBtn={
    icons:<KeyboardBackspaceIcon className='icons'/>,name:'back',clickFtn:()=>{
      state.showWorldOptions=true
      state.showLevelsOptions=false
      state.showColoursOptions=false
      state.showRoomsOptions=false
      state.showRoof=true
      state.maxDist=50
      state.minDist=20
      state.camTarget=[0,0,0]
      state.camPosition=productSource.worldAssets?.camPosition
      state.roomCord=productSource.worldAssets?.default
      state.title=state.title=productSource.worldAssets?.welcome
      // console.log('click')
    },dblclickFtn:()=>{
      state.ArMode=false
      state.fullSrcn=false
      state.showArrows=true
      state._3dModelState=false
      state.showAR360Options=false
      state.ArMode=false
      state.showWorldOptions=false
      state.maxDist=.05
      state.minDist=.01
      // state.maxPolarAngle=110,
      // state.minPolarAngle=60,
      state.camTarget=[1,0,-1]
      state.camPosition=[0,0,0]
      // console.log('click')
    }
  }

  return (
    <div className='webgl_world_Container_Back'>
        <div className="webgl_world_btn_wrap">
            <WorldBtn item={backBtn}/>
        </div>
    </div>
  )
}

export default BackBtn