import React, { useEffect, useRef } from 'react'
import './WorldMenuContainer.scss'
import WorldBtn from '../worldBtn/WorldBtn'

//levels menu
import RoofingIcon from '@mui/icons-material/Roofing';
import Filter1Icon from '@mui/icons-material/Filter1';
import { useSnapshot } from 'valtio';
import state from '../../../stateManagement/store';

const uiLevels=[
    {
        icons:<RoofingIcon className='icons'/>
    },
    // {
    //     icons:<Filter1Icon className='icons'/>
    // },
]

const WorldMenuContainerLevels = () => {
    const refBtnContainer=useRef()
    const snap=useSnapshot(state)
    useEffect(()=>{
        const btnContainerArray=[...refBtnContainer.current.children]

        btnContainerArray.forEach((btn,index)=>{
            btn.addEventListener('click',()=>{
                index==0 && (state.showRoof=false)
                index==1 && (state.showLevel=false)
                
                // switch (index) {
                //     case 0:
                //         state.showRoof=false
                //         console.log('click btn',index,snap.showRoof)
                //         break;
                
                //     default:
                //         state.showRoof=true
                //         break;
                // }
            })
        })

        console.log(btnContainerArray)
    },[])
  return (
    <div ref={refBtnContainer} className='webgl_world_WorldMenuContainer' style={{bottom: snap.showLevelsOptions ? '10px' : '-80px'}}>
        {uiLevels.map((btns)=><WorldBtn key={btns.name} item={btns}/>)}
    </div>
  )
}

export default WorldMenuContainerLevels