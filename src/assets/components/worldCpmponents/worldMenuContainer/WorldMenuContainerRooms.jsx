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
                icons:<TimeToLeaveIcon className='icons'/>,name:{title:'driveway'},clickFtn:()=>{
                    state.roomCord=productSource.worldAssets?.roomCordsArray.driveway.roomCord
                    state.camPosition=productSource.worldAssets?.roomCordsArray.driveway.camPosition
                    state.orbitTarget=productSource.worldAssets?.roomCordsArray.driveway.orbitTarget
                    state.maxDist=.05
                    state.minDist=.01
                    // state.textHighlight=uiExtRooms[0].name.title
                }
            },
            {
                icons:<PoolOutlinedIcon className='icons'/>,name:{title:'poolside'},clickFtn:()=>{
                    state.roomCord=productSource.worldAssets?.roomCordsArray.pool.roomCord
                    state.camPosition=productSource.worldAssets?.roomCordsArray.pool.camPosition
                    state.orbitTarget=productSource.worldAssets?.roomCordsArray.pool.orbitTarget
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
        ]
        uiIntRooms=[
            {
                icons:<WeekendOutlinedIcon className='icons'/>,name:{title:'lounge'},clickFtn:()=>{
                    state.roomCord=productSource.worldAssets?.roomCordsArray.lounge.roomCord
                    state.camPosition=productSource.worldAssets?.roomCordsArray.lounge.camPosition
                    state.orbitTarget=productSource.worldAssets?.roomCordsArray.lounge.orbitTarget
                    state.maxDist=.05
                    state.minDist=.01
                  }
            },
            {
                icons:<MeetingRoomIcon className='icons'/>,name:{title:'foyer'},clickFtn:()=>{
                    state.roomCord=productSource.worldAssets?.roomCordsArray.foyer.roomCord
                    state.camPosition=productSource.worldAssets?.roomCordsArray.foyer.camPosition
                    state.orbitTarget=productSource.worldAssets?.roomCordsArray.foyer.orbitTarget
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
            {
                icons:<CountertopsOutlinedIcon className='icons'/>,name:{title:'kitchen'},clickFtn:()=>{
                    state.roomCord=productSource.worldAssets?.roomCordsArray.kitchen.roomCord
                    state.camPosition=productSource.worldAssets?.roomCordsArray.kitchen.camPosition
                    state.orbitTarget=productSource.worldAssets?.roomCordsArray.kitchen.orbitTarget
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
            {
                icons:<LiveTvIcon className='icons1'/>,name:{title:'family room'},clickFtn:()=>{
                    state.roomCord=productSource.worldAssets?.roomCordsArray.bedroom.roomCord
                    state.camPosition=productSource.worldAssets?.roomCordsArray.bedroom.camPosition
                    state.orbitTarget=productSource.worldAssets?.roomCordsArray.bedroom.orbitTarget
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
            {
                icons:<BedOutlinedIcon className='icons'/>,name:{title:'bedroom'},clickFtn:()=>{
                    state.roomCord=productSource.worldAssets?.roomCordsArray.driveway.roomCord
                    state.camPosition=productSource.worldAssets?.roomCordsArray.driveway.camPosition
                    state.orbitTarget=productSource.worldAssets?.roomCordsArray.driveway.orbitTarget
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