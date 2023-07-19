import React, { useContext } from 'react'
import './BtnFullscrn.scss'
import WorldBtn from '../worldCpmponents/worldBtn/WorldBtn'

//back
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import state from '../../stateManagement/store';
import { useSnapshot } from 'valtio';
import { AppContext } from '../../stateManagement/AppContext';


const fullscrnBtn={
  icons:<FullscreenIcon className='icons'/>,name:'back',clickFtn:()=>{
    state.popup=false
    // console.log('click')
  },dblclickFtn:()=>{

  }
}

const BtnFullscrn = () => {
    const snap=useSnapshot(state)
    const {productSource,setSectionCount}=useContext(AppContext)
  return (
    <div className='webgl_world_Container_Fullscrn'>
        <div className="webgl_world_btn_wrap"
          onClick={()=>{
            state.fullSrcn=!snap.fullSrcn
            // state.sectionIndex=3
            setSectionCount(3)
          }}
        >
            <WorldBtn item={fullscrnBtn}/>
        </div>
    </div>
  )
}

export default BtnFullscrn