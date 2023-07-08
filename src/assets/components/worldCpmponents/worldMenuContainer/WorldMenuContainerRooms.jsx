import React, { useContext, useEffect } from 'react'
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
import { AppContext } from '../../../stateManagement/AppContext';
import { useControls } from 'leva';


let uiExtRooms=[]
let uiIntRooms=[]

const WorldMenuContainerRooms = () => {
    const snap=useSnapshot(state)
    const {productSource}=useContext(AppContext)
    useEffect(()=>{
        uiExtRooms=[
            {
                icons:<EmojiTransportationOutlinedIcon className='icons'/>,name:'driveway',clickFtn:()=>{
                    state.camPosition=[0,0,0]
                }
            },
            {
                icons:<PoolOutlinedIcon className='icons'/>,name:'poolside',clickFtn:()=>{
                    state.camPosition=[0,0,0]
                }
            },
        ]
        uiIntRooms=[
            {
                icons:<MeetingRoomIcon className='icons'/>,name:'lounge',clickFtn:()=>{
         
                  }
            },
            {
                icons:<WeekendOutlinedIcon className='icons'/>,name:'foyer',clickFtn:()=>{

                }
            },
            {
                icons:<CountertopsOutlinedIcon className='icons'/>,name:'kitchen',clickFtn:()=>{
   
                }
            },
            {
                icons:<BedOutlinedIcon className='icons'/>,name:'bedroom',clickFtn:()=>{
       
                }
            },
        ]
    })
    // console.log(snap.camPosition)
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