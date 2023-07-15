import React from 'react'

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
import state from './stateManagement/store';

const theMontes={

    logoPng:'./logo.png',
    logoText:'luyaridesigns',
    section:[
        {
            id:1,
            title:'renderings',
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis at alias illo porro et minus excepturi aperiam debitis quidem, veniam dolores explicabo totam tempore est dicta repellat ipsum ex sed?',
            imgs:[
                // {id:'option 1: road 1',option:'option 1',url:'./assets/themontes/option1/0000_Opt1.jpg'},
                // {id:'option 1: road 2',option:'option 1',url:'./assets/themontes/option1/0001_Opt1.jpg'},
                // {id:'option 1: pool 1',option:'option 1',url:'./assets/themontes/option1/0002_Opt1.jpg'},
                // {id:'option 1: pool 2',option:'option 1',url:'./assets/themontes/option1/0003_Opt1.jpg'},

                {id:'option 2: road 1',option:'option 2',url:'./assets/themontes/option2/0000_Opt2.jpg'},
                {id:'option 2: road 2',option:'option 2',url:'./assets/themontes/option2/0001_Opt2.jpg'},
                {id:'option 2: pool 1',option:'option 2',url:'./assets/themontes/option2/0002_Opt2.jpg'},
                {id:'option 2: pool 2',option:'option 2',url:'./assets/themontes/option2/0003_Opt2.jpg'},

                {id:'kitchen view',option:'option 2',url:'./assets/themontes/0005.jpg'},
                {id:'lounge view',option:'option 2',url:'./assets/themontes/0006.jpg'},
                {id:'Bedroom view 1',option:'option 2',url:'./assets/themontes/0007.jpg'},
                {id:'Bedroom view 2',option:'option 2',url:'./assets/themontes/0008.jpg'},
            ],
            instructions:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
        },
        {
            id:2,
            title:'drawings',
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing',
            imgs:[
                // {id:'option 1: sunStudy',option:'option 1',url:'./assets/themontes/option1/Opt 1 SunStudy.jpg'},
                // {id:'option 1: plans',option:'option 1',url:'./assets/themontes/option1/Opt 1 Plans.jpg'},
                // {id:'option 1: elevations',option:'option 1',url:'./assets/themontes/option1/Opt 1 Elevation.jpg'},

                {id:'option 2: sunStudy',option:'option 2',url:'./assets/themontes/option2/Opt 2 SunStudy.jpg'},
                {id:'option 2: plans',option:'option 2',url:'./assets/themontes/option2/Opt 2 Plan.jpg'},
                {id:'option 2: plans',option:'option 2',url:'./assets/themontes/option2/Opt 2 Plan.jpg'},
                {id:'option 2: elevations',option:'option 2',url:'./assets/themontes/option2/Opt 2 Elevation.jpg'},
                {id:'option 2: elevations',option:'option 2',url:'./assets/themontes/option2/Opt 2 Elevation.jpg'},
            ],
            instructionsTitle:'Lorem, ipsum dolor sit amet',
            instructions:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis at alias illo porro et minus excepturi aperiam debitis quidem, veniam dolores explicabo totam tempore est dicta repellat ipsum ex sed?',
        },
    ],

    popup_drawings:[
        // {id:'option 1: elevations',option:'option 1',url:'./assets/themontes/option1/Opt 1 Elevation.jpg'},
        // {id:'option 1: plans',option:'option 1',url:'./assets/themontes/option1/Opt 1 Plans.jpg'},
        // {id:'option 1: sunStudy',option:'option 1',url:'./assets/themontes/option1/Opt 1 SunStudy.jpg'},

        {id:'option 2: elevations',option:'option 1',url:'./assets/themontes/option2/Opt 2 Elevation.jpg'},
        {id:'option 2: plans',option:'option 1',url:'./assets/themontes/option2/Opt 2 Plans.jpg'},
        {id:'option 2: sunStudy',option:'option 1',url:'./assets/themontes/option2/Opt 2 SunStudy.jpg'},
        {id:'option 2: plans',option:'option 1',url:'./assets/themontes/option2/Opt 2 Plans.jpg'},
        {id:'option 2: sunStudy',option:'option 1',url:'./assets/themontes/option2/Opt 2 SunStudy.jpg'},
    ],

    popup_renders:[
        // {id:'option 1: road 1',option:'option 1',url:'./assets/themontes/option1/0000_Opt1.jpg'},
        // {id:'option 1: road 2',option:'option 1',url:'./assets/themontes/option1/0001_Opt1.jpg'},
        // {id:'option 1: pool 1',option:'option 1',url:'./assets/themontes/option1/0002_Opt1.jpg'},
        // {id:'option 1: pool 2',option:'option 1',url:'./assets/themontes/option1/0003_Opt1.jpg'},


        {id:'option 2: road 1',option:'option 2',url:'./assets/themontes/option2/0000_Opt2.jpg'},
        {id:'option 2: road 2',option:'option 2',url:'./assets/themontes/option2/0001_Opt2.jpg'},
        {id:'option 2: pool 1',option:'option 2',url:'./assets/themontes/option2/0002_Opt2.jpg'},
        {id:'option 2: pool 2',option:'option 2',url:'./assets/themontes/option2/0003_Opt2.jpg'},

        {id:'kitchen view',option:'option 2',rl:'./assets/themontes/0005.jpg'},
        {id:'lounge view',option:'option 2',url:'./assets/themontes/0006.jpg'},
        {id:'Bedroom view 1',option:'option 2',url:'./assets/themontes/0007.jpg'},
        {id:'Bedroom view 2',option:'option 2',url:'./assets/themontes/0008.jpg'},
    ],

    popup_imgs:[
        // {id:'option 1: road 1',option:'option 1',url:'./assets/themontes/option1/0000_Opt1.jpg'},
        // {id:'option 1: road 2',option:'option 1',url:'./assets/themontes/option1/0001_Opt1.jpg'},
        // {id:'option 1: pool 1',option:'option 1',url:'./assets/themontes/option1/0002_Opt1.jpg'},
        // {id:'option 1: pool 2',option:'option 1',url:'./assets/themontes/option1/0003_Opt1.jpg'},
        // {id:'option 2: plans',option:'option 2',url:'./assets/themontes/option2/Opt 2 Plan.jpg'},
        // {id:'option 2: sunStudy',option:'option 2',url:'./assets/themontes/option2/Opt 2 SunStudy.jpg'},
        // {id:'option 2: elevations',option:'option 2',url:'./assets/themontes/option2/Opt 2 Elevation.jpg'},

        {id:'option 2: road 1',option:'option 2',url:'./assets/themontes/option2/0000_Opt2.jpg'},
        {id:'option 2: road 2',option:'option 2',url:'./assets/themontes/option2/0001_Opt2.jpg'},
        {id:'option 2: pool 1',option:'option 2',url:'./assets/themontes/option2/0002_Opt2.jpg'},
        {id:'option 2: pool 2',option:'option 2',url:'./assets/themontes/option2/0003_Opt2.jpg'},

        {id:'kitchen view',option:'option 2',url:'./assets/themontes/0005.jpg'},
        {id:'lounge view',option:'option 2',url:'./assets/themontes/0006.jpg'},
        {id:'Bedroom view 1',option:'option 2',url:'./assets/themontes/0007.jpg'},
        {id:'Bedroom view 2',option:'option 2',url:'./assets/themontes/0008.jpg'},
    ],

    desc: {
        title:'2 bedroomed house',
        descTitle:'model',
        desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis at alias illo porro et minus excepturi aperiam debitis quidem, veniam dolores explicabo totam tempore est dicta repellat ipsum ex sed?',
    },

    productText:{
        projectTitle:{
            title:`Four Bedroom house`
        },
    
        typeOfDesign:{
            title:`Residential design`
        },
    
        typeOfHouse:{
            title:`3 bedroomhouse design`
        },
    
        specialFeatures:{
            title:`bedrooms, breakfast - nook, maid’s room, walk-in pantry, formal dining, game/rec room, library/study, outdoor fireplace
        `},
    
        houseSpaces:[
            {
                title:`plan dimensions:`,
                specs:{
                    title:`
                        width:
                        height:`
                }
            },
            {
                title:`Ceiling heights:`,
                specs:{
                    title:`
                        2.7meters`
                }
            },
            {
                title:`Square Footage Breakdown:`,
                specs:{
                    title:`
                        plinth area:
                        porch area:`
                }
            },
            {
                title:`Bedrooms:`,
                specs:{
                    title:`
                        1 Master bedroom: 
                            Walking closet:
                            sleeping area:
                        2 Bathrooms:`
                    }
            },
            {
                title:`Kitchen:`,
                specs:{
                    title:`
                        Kitchen area:
                        island:
                        walk-in-pantry:`
                    }
            },
            {
                title:`additional rooms:`,
                specs:{
                    title:`
                        helper's room:
                        greet room`
                    }
            },
            {
                title:`Grarge:`,
                specs:{
                    title:`
                        2 car parking`
                    }
            },
            {
                title:`outdoor areas:`,
                specs:{
                    title:`
                        porch`
                    }
            },
            {
                title:`roof:  `,
                specs:{
                    title:`
                        finsh:
                        pitch:
                    `}
            },
        ],
            
        outro:{
            title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
    },

    worldAssets:{
        enviHdriMap:'./enviMap.hdr',

        toggle1stFlr:'house_opt1_roof',
        toggleRoofFLevelOpt1: 'house_opt1_roof',
        toggleRoofFLevelOpt2: 'house_opt2_roof',

        default:[-6.79,0,14],

        roomCordsArray:{
            ext:[
            {
                name:{title:'driveway'},
                icons:<TimeToLeaveIcon className='icons'/>,
                clickFtn:()=>{
                    state.roomCord=[-10,0,1],
                    state.camPosition=[0,1.2,0],
                    state.orbitTarget=[-.1,1.2,-.1],
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
            {
                name:{title:'pool area'},
                icons:<PoolOutlinedIcon className='icons'/>,
                clickFtn:()=>{
                    state.roomCord=[-7.5,0,28],
                    state.camPosition=[0,1.2,0],
                    state.orbitTarget=[0,1.2,0.1],
                    state.maxDist=.05
                    state.minDist=.01
                }
            },
        ],
            int:[
                {
                    name:{title:'lounge'},
                    icons:<WeekendOutlinedIcon className='icons'/>,
                    clickFtn:()=>{
                        state.roomCord=[-10,0,23.5],
                        state.camPosition=[0,1.2,0],
                        state.orbitTarget=[.1,1.2,.1],
                        state.maxDist=.05
                        state.minDist=.01
                    }
                },
                {
                    name:{title:'foyer'},
                    icons:<MeetingRoomIcon className='icons'/>,
                    clickFtn:()=>{
                        state.roomCord=[-5,0,11],
                        state.camPosition=[0,1.2,0],
                        state.orbitTarget=[0,1.2,-.1],
                        state.maxDist=.05
                        state.minDist=.01
                    }
                },
                {
                    name:{title:'kitchen'},
                    icons:<CountertopsOutlinedIcon className='icons'/>,
                    clickFtn:()=>{
                        state.roomCord=[-5.7,0,17.4],
                        state.camPosition=[0,1.2,0],
                        state.orbitTarget=[.1,1.2,.05],
                        state.maxDist=.05
                        state.minDist=.01
                    }
                },
                {
                    name:{title:'media room'},
                    icons:<LiveTvIcon className='icons'/>,
                    clickFtn:()=>{
                        state.roomCord=[-6.8,0,19.8],
                        state.camPosition=[0,1.2,0],
                        state.orbitTarget=[-0.01,1.2,0],
                        state.maxDist=.05
                        state.minDist=.01
                    }
                },
                {
                    name:{title:'bedroom'},
                    icons:<BedOutlinedIcon className='icons'/>,
                    clickFtn:()=>{
                        state.roomCord=[-1.35,0,23],
                        state.camPosition=[0,1.2,0],
                        state.orbitTarget=[0,1.2,.1],
                        state.maxDist=.05
                        state.minDist=.01
                    }
                },
            ]
        },   
            
        camPosition:[20,20,25],
        orbitTarget:[0,0,0],

        roomCord:[-6.75,0,14],
        roomRotation:[0],

        maxPolarAngle:.5,

        maxDist:[50],
        minDist:[20],
        
        houses:[
            // {name:'house_opt1',path:'./assets/themontes/house_Opt1.glb',toogleRoofLevel:"house_opt1_roof"},
            {name:'house_opt2',path:'./assets/themontes/house_Opt2.glb',toogleRoofLevel:"house_opt2_roof"},
        ],
    
        placeHolder:{name:'option2House',path:'./assets/themontes/house_Opt2.glb'},
        
        supportFiles:[
            {name:'cars',path:'./assets/themontes/cars.glb'},
            {name:'vegetation',path:'./assets/themontes/vegetation.glb'},
            {name:'site',path:'./assets/themontes/site.glb'},
            {name:'furniture',path:'./assets/themontes/house_Opt2_furn.glb'},
        ],
           
        _360s:[
            // {title:'lawn area',url:'./assets/themontes/option1/Opt1_360_0000.jpg'},
            // {title:'dirveway',url:'./assets/themontes/option1/Opt1_360_0001.jpg'},
            // {title:'pool',url:'./assets/themontes/option1/Opt1_360_0002.jpg'},
            {title:'lawn area',url:'./assets/themontes/option2/Opt2_360_0000.jpg'},
            {title:'dirveway',url:'./assets/themontes/option2/Opt2_360_0001.jpg'},
            {title:'pool',url:'./assets/themontes/option2/Opt2_360_0002.jpg'},
        ]
    }
}

export {theMontes}