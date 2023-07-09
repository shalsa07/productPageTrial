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
                    state.camPosition=[-0.005,1.2,-0.01]
                    state.orbitTarget=[-.5,1.2,-1]
                    state.roomCord=[-9,0,2]
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
            {
                icons:<PoolOutlinedIcon className='icons'/>,name:'poolside',clickFtn:()=>{
                    state.camPosition=[0,1.2,0]
                    state.orbitTarget=[0,1.2,.01]
                    state.roomCord=[-7,0,27]
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
        ]
        uiIntRooms=[
            {
                icons:<WeekendOutlinedIcon className='icons'/>,name:'lounge',clickFtn:()=>{
                    state.camPosition=[0,1.2,0]
                    state.orbitTarget=[.01,1.2,.002]
                    state.roomCord=[-12,0,22]
                    state.maxDist=.05
                    state.minDist=.01
                  }
            },
            {
                icons:<MeetingRoomIcon className='icons'/>,name:'foyer',clickFtn:()=>{
                    state.camPosition=[0,1.2,0]
                    state.orbitTarget=[0,1.2,-.01]
                    state.roomCord=[-5,0,11]
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
            {
                icons:<CountertopsOutlinedIcon className='icons'/>,name:'kitchen',clickFtn:()=>{
                    state.camPosition=[0,1.2,0]
                    state.orbitTarget=[.01,1.2,.01]
                    state.roomCord=[-8,0,17]
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
            {
                icons:<BedOutlinedIcon className='icons'/>,name:'bedroom',clickFtn:()=>{
                    state.camPosition=[0,1.2,0]
                    state.orbitTarget=[0,1.2,.1]
                    state.roomCord=[-1.5,0,22.5]
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
        ]
    })
    // console.log(snap.camPosition)
    return (
    <div className='webgl_world_WorldMenuContainer_levels' style={{bottom: snap.showRoomsOptions ? '10px' : '-80px'}}>
        <p style={{textTransform:'uppercase',fontWeight:'300',letterSpacing:'3px'}}>exterior</p>
        {uiExtRooms.map((btns)=><WorldBtn key={btns.name} item={btns}/>)}
        <p style={{textTransform:'uppercase',fontWeight:'300',letterSpacing:'3px'}}>interior</p>
        {uiIntRooms.map((btns)=><WorldBtn key={btns.name} item={btns}/>)}
    </div>
  )
}

export default WorldMenuContainerRooms