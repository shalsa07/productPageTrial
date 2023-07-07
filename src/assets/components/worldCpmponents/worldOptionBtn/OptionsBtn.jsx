import React, { useContext } from 'react'
import './OptionsBtn.scss'
import WorldBtn from '../worldBtn/WorldBtn'
import { AppContext } from '../../../stateManagement/AppContext'
import { useSnapshot } from 'valtio';
import state from '../../../stateManagement/store';

//options
import MenuIcon from '@mui/icons-material/Menu';


const OptionsBtn = () => {
  const snap=useSnapshot(state)
  const optionsBtn={
    icons:<MenuIcon className='icons'/>,name:'levels',clickFtn:()=>{
      state.showAR360Options=!snap.showAR360Options
      // console.log('click')
    }
  }
  const {productSource}=useContext(AppContext)
  return (
    <div className='webgl_world_Container_Options'>
      <div className="webgl_world_btn_wrap">
        <WorldBtn item={optionsBtn}/>
      </div>
    </div>
  )
}

export default OptionsBtn