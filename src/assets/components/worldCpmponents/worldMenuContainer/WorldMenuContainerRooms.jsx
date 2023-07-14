import React, { useContext, useEffect } from 'react'
import './WorldMenuContainer.scss'
import WorldBtn from '../worldBtn/WorldBtn'

//rooms menu
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useSnapshot } from 'valtio';
import state from '../../../stateManagement/store';
import { AppContext } from '../../../stateManagement/AppContext';


let uiExtRooms=[]
let uiIntRooms=[]

const WorldMenuContainerRooms = () => {
    const snap=useSnapshot(state)
    const {productSource}=useContext(AppContext)
    useEffect(()=>{
        uiExtRooms=[
            {
                icons:<AddRoadIcon className='icons'/>,name:{title:'road'},clickFtn:()=>{
                    state.camPosition=[0,-3.2,0]
                    state.orbitTarget=[0.01,-3.2,0.015]
                    state.roomCord=[9,0,37]
                    state.maxDist=1
                    state.minDist=.1
                    // state.textHighlight=uiExtRooms[0].name.title
                    // console.log(snap.camPosition,snap.orbitTarget,snap.roomCord)
                }
            },
            {
                icons:<TimeToLeaveIcon className='icons'/>,name:{title:'driveway'},clickFtn:()=>{
                    state.camPosition=[0,-1.7,0]
                    state.orbitTarget=[0.03,-1.69,0.01]
                    state.roomCord=[6,0,19.5]
                    state.maxDist=.05
                    state.minDist=.01
                    // state.textHighlight=uiExtRooms[0].name.title
                }
            },
            {
                icons:<PoolOutlinedIcon className='icons'/>,name:{title:'poolside'},clickFtn:()=>{
                    state.camPosition=[0,1.6,0]
                    state.orbitTarget=[-0.01,1.6,0]
                    state.roomCord=[-17.5,0,11]
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
        ]
        uiIntRooms=[
            {
                icons:<WeekendOutlinedIcon className='icons'/>,name:{title:'lounge'},clickFtn:()=>{
                    state.camPosition=[0,1.6,0]
                    state.orbitTarget=[.01,1.6,0]
                    state.roomCord=[-4.4,0,10.6]
                    state.maxDist=.05
                    state.minDist=.01
                  }
            },
            {
                icons:<MeetingRoomIcon className='icons'/>,name:{title:'foyer'},clickFtn:()=>{
                    state.camPosition=[0,1.2,0]
                    state.orbitTarget=[-0.01,1.2,0]
                    state.roomCord=[-8.5,0,17]
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
            {
                icons:<CountertopsOutlinedIcon className='icons'/>,name:{title:'kitchen'},clickFtn:()=>{
                    state.camPosition=[0,2.2,0]
                    state.orbitTarget=[-.01,2.2,.01]
                    state.roomCord=[-16,0,5]
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
            {
                icons:<LiveTvIcon className='icons1'/>,name:{title:'family room'},clickFtn:()=>{
                    state.camPosition=[0,1.2,0]
                    state.orbitTarget=[-.01,1.2,-.025]
                    state.roomCord=[-5,0,20.5]
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
            {
                icons:<BedOutlinedIcon className='icons'/>,name:{title:'bedroom'},clickFtn:()=>{
                    state.camPosition=[0,1.2,0]
                    state.orbitTarget=[-.1,1.2,0]
                    state.roomCord=[-15.5,0,20.5]
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
        ]
    })
    // console.log(uiExtRooms[0])
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