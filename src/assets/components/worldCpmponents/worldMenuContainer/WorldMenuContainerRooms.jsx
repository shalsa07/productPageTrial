import React from 'react'
import './WorldMenuContainer.scss'
import WorldBtn from '../worldBtn/WorldBtn'

//rooms menu
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';

import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import { useSnapshot } from 'valtio';
import state from '../../../stateManagement/store';

const uiExtRooms=[
    {
        icons:<EmojiTransportationOutlinedIcon className='icons'/>,name:'back',clickFtn:()=>{
            state._3dModelState=false
            state.showAR360Options=false
            state.ArMode=false
            state.showWorldOptions=false
            // console.log('click')
        }
    },
    {
        icons:<PoolOutlinedIcon className='icons'/>,name:'back',clickFtn:()=>{
            state._3dModelState=false
            state.showAR360Options=false
            state.ArMode=false
            state.showWorldOptions=false
            // console.log('click')
        }
    },
]
const uiIntRooms=[
    {
        icons:<MeetingRoomIcon className='icons'/>,name:'back',clickFtn:()=>{
            state._3dModelState=false
            state.showAR360Options=false
            state.ArMode=false
            state.showWorldOptions=false
            // console.log('click')
          }
    },
    {
        icons:<WeekendOutlinedIcon className='icons'/>,name:'back',clickFtn:()=>{
            state._3dModelState=false
            state.showAR360Options=false
            state.ArMode=false
            state.showWorldOptions=false
            // console.log('click')
        }
    },
    {
        icons:<CountertopsOutlinedIcon className='icons'/>,name:'back',clickFtn:()=>{
            state._3dModelState=false
            state.showAR360Options=false
            state.ArMode=false
            state.showWorldOptions=false
            // console.log('click')
        }
    },
    {
        icons:<BedOutlinedIcon className='icons'/>,name:'back',clickFtn:()=>{
            state._3dModelState=false
            state.showAR360Options=false
            state.ArMode=false
            state.showWorldOptions=false
            // console.log('click')
        }
    },
    {
        icons:<DeckOutlinedIcon className='icons'/>,name:'back',clickFtn:()=>{
            state._3dModelState=false
            state.showAR360Options=false
            state.ArMode=false
            state.showWorldOptions=false
            // console.log('click')
        }
    },
]

const WorldMenuContainerRooms = () => {
    const snap=useSnapshot(state)
  return (
    <div className='webgl_world_WorldMenuContainer' style={{bottom: snap.showRoomsOptions ? '10px' : '-80px'}}>
        <p style={{textTransform:'uppercase',fontWeight:'300',letterSpacing:'3px'}}>exterior</p>
        {uiExtRooms.map((btns)=><WorldBtn key={btns.name} item={btns}/>)}
        <p style={{textTransform:'uppercase',fontWeight:'300',letterSpacing:'3px'}}>interior</p>
        {uiIntRooms.map((btns)=><WorldBtn key={btns.name} item={btns}/>)}
    </div>
  )
}

export default WorldMenuContainerRooms