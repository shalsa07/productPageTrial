import React, { useEffect, useRef } from 'react'
import './WorldMenuContainer.scss'
import WorldBtn from '../worldBtn/WorldBtn'

//levels menu
import RoofingIcon from '@mui/icons-material/Roofing';
import Filter1Icon from '@mui/icons-material/Filter1';
import { useSnapshot } from 'valtio';
import state from '../../../stateManagement/store';

const WorldMenuContainerLevels = () => {
    const snap=useSnapshot(state)
    
    const uiLevels=[
        {
            icons:<RoofingIcon className='icons'/>,name:'toggle roof',clickFtn:()=>{
                state.showRoof=!snap.showRoof
                // console.log('clicked roof',snap.showRoofLevel)
            }
        },
        // {
        //     icons:<Filter1Icon className='icons'/>,name:'toggle roof',name:'toggle 1st',clickFtn:()=>{
        //         state.showLevel=!snap.showLevel
        //         state.showWorldOptions=false
        //     }
        // },
    ]

    // console.log(snap.showRoofLevel)
  return (
    <div className='webgl_world_WorldMenuContainer' style={{bottom: snap.showLevelsOptions ? '10px' : '-80px'}}>
        {uiLevels.map((btns)=><WorldBtn key={btns.name} item={btns}/>)}
    </div>
  )
}

export default WorldMenuContainerLevels