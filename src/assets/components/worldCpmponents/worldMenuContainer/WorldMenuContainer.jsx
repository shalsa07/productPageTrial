import React from 'react'
import './WorldMenuContainer.scss'
import WorldBtn from '../worldBtn/WorldBtn'

//right menu
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import VrpanoOutlinedIcon from '@mui/icons-material/VrpanoOutlined';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';

const uiOptions=[
    {
        icons:<CheckBoxOutlinedIcon className='icons'/>
    },
    // {
    //     icons:<ColorLensOutlinedIcon className='icons'/>
    // },
    {
        icons:<VrpanoOutlinedIcon className='icons'/>
    },
    {
        icons:<ThreeDRotationIcon className='icons'/>
    },
]

const WorldMenuContainer = () => {
  return (
    <div className='webgl_world_WorldMenuContainer'>
        {uiOptions.map((btns)=><WorldBtn key={btns} item={btns}/>)}
    </div>
  )
}

export default WorldMenuContainer