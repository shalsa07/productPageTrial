import React from 'react'
import './WorldMenuContainer.scss'
import WorldBtn from '../worldBtn/WorldBtn'

//right menu
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import VrpanoOutlinedIcon from '@mui/icons-material/VrpanoOutlined';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import { useSnapshot } from 'valtio';
import state from '../../../stateManagement/store';

const uiOptions=[
    {
        icons:<CheckBoxOutlinedIcon className='icons'/>,name:'levels',clickFtn:()=>{
            state.showLevelsOptions=true
            state.showWorldOptions=false
        }
    },
    // {
    //     icons:<ColorLensOutlinedIcon className='icons'/>,name:'color',clickFtn:()=>{

    // }
    // },
    {
        icons:<VrpanoOutlinedIcon className='icons'/>,name:'rooms',clickFtn:()=>{
            state.showRoomsOptions=true
            state.showWorldOptions=false
        }
    },
]

const WorldMenuContainer = () => {
    const snap=useSnapshot(state)
  return (
    <div className='webgl_world_WorldMenuContainer' style={{bottom: snap.showWorldOptions ? '10px' : '-80px'}}>
        {uiOptions.map((btns)=><WorldBtn key={btns.name} item={btns}/>)}
    </div>
  )
}

export default WorldMenuContainer