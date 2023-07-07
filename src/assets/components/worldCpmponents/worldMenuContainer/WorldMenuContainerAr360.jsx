import React from 'react'
import './WorldMenuContainer.scss'
import WorldBtn from '../worldBtn/WorldBtn'
import { useSnapshot } from 'valtio';

//levels menu
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import state from '../../../stateManagement/store';

const uiLevels=[
    {
        icons:<ThreeDRotationIcon className='icons'/>,name:'ar',clickFtn:()=>{
            state._3dModelState=true
            state.showWorldOptions=true
            state.showAR360Options=false
            // console.log('click')
          }
    },
    {
        icons:<ViewInArIcon className='icons'/>,name:'3d model',clickFtn:()=>{
            state.ArMode=true
            state.showWorldOptions=true
            state.showAR360Options=false
            // console.log('click')
          }
    },
]

const WorldMenuContainerAr360 = () => {
    const snap=useSnapshot(state)
  return (
    <div className='webgl_world_WorldMenuContainer' style={{top: '70px', scale: snap.showAR360Options? '1' : '0',transition:'all .5s ease'}}>
        {uiLevels.map((btns)=><WorldBtn key={btns.name} item={btns}/>)}
    </div>
  )
}

export default WorldMenuContainerAr360