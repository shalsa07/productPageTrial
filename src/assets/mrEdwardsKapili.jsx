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

const mrEdwardsKapili={

    logoPng:'./logo.png',
    logoText:'luyaridesigns',
    section:[
        {
            id:1,
            title:'renderings',
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis at alias illo porro et minus excepturi aperiam debitis quidem, veniam dolores explicabo totam tempore est dicta repellat ipsum ex sed?',
            imgs:[
                {id:'road view 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0000.jpg'},
                {id:'road view 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0001.jpg'},
                {id:'driveway view',option:'option 1',url:'./assets/mredwards/option1/Opt1_0002.jpg'},

                {id:'lounge view 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0003.jpg'},
                {id:'lounge view 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0004.jpg'},
                {id:'lounge view 3',option:'option 1',url:'./assets/mredwards/option1/Opt1_0005.jpg'},
                {id:'Kitchen view 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0006.jpg'},
                {id:'Kitchen view 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0007.jpg'},
                {id:'Kitchen view 3',option:'option 1',url:'./assets/mredwards/option1/Opt1_0008.jpg'},
                {id:'bedroomview 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0009.jpg'},
                {id:'bedroomview 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0010.jpg'},
            ],
            instructions:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
        },
        {
            id:2,
            title:'drawings',
            desc:'Lorem, ipsum dolor sit amet consectetur adipisicing',
            imgs:[
                {id:'option 1: sunStudy',option:'option 1',url:'./assets/mredwards/option1/Opt 1 SunStudy.jpg'},
                {id:'option 1: site',option:'option 1',url:'./assets/mredwards/option1/Opt 1 Site.jpg'},
                {id:'option 1: plans',option:'option 1',url:'./assets/mredwards/option1/Opt 1 Plans.jpg'},
                {id:'option 1: elevations',option:'option 1',url:'./assets/mredwards/option1/Opt 1 Elevation.jpg'},
                {id:'option 1: site',option:'option 1',url:'./assets/mredwards/option1/Opt 1 Site.jpg'},
            ],
            instructionsTitle:'Lorem, ipsum dolor sit amet',
            instructions:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis at alias illo porro et minus excepturi aperiam debitis quidem, veniam dolores explicabo totam tempore est dicta repellat ipsum ex sed?',
        },
    ],

    popup_drawings:[
        {id:'option 1: sunStudy',option:'option 1',url:'./assets/mredwards/option1/opt1_sunStudy.jpg'},
        {id:'option 1: site',option:'option 1',url:'./assets/mredwards/option1/opt1_site.jpg'},
        {id:'option 1: plans',option:'option 1',url:'./assets/mredwards/option1/opt1_plans.jpg'},
        {id:'option 1: elevations',option:'option 1',url:'./assets/mredwards/option1/opt1_elevations.jpg'},
        {id:'option 2: sunStudy',option:'option 2',url:'./assets/mredwards/option2/opt2_sunStudy.jpg'},
        {id:'option 2: site',option:'option 2',url:'./assets/mredwards/option2/opt2_site.jpg'},
        {id:'option 2: plans',option:'option 2',url:'./assets/mredwards/option2/opt2_plans.jpg'},
        {id:'option 2: elevations',option:'option 2',url:'./assets/mredwards/option2/opt2_elevations.jpg'},
    ],

    popup_renders:[
        {id:'road view 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0000.jpg'},
        {id:'road view 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0001.jpg'},
        {id:'driveway view',option:'option 1',url:'./assets/mredwards/option1/Opt1_0002.jpg'},

        {id:'lounge view 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0003.jpg'},
        {id:'lounge view 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0004.jpg'},
        {id:'lounge view 3',option:'option 1',url:'./assets/mredwards/option1/Opt1_0005.jpg'},
        {id:'Kitchen view 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0006.jpg'},
        {id:'Kitchen view 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0007.jpg'},
        {id:'Kitchen view 3',option:'option 1',url:'./assets/mredwards/option1/Opt1_0008.jpg'},
        {id:'bedroomview 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0009.jpg'},
        {id:'bedroomview 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0010.jpg'},
    ],

    popup_imgs:[
        {id:'road view 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0000.jpg'},
        {id:'road view 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0001.jpg'},
        {id:'driveway view',option:'option 1',url:'./assets/mredwards/option1/Opt1_0002.jpg'},

        {id:'lounge view 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0003.jpg'},
        {id:'lounge view 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0004.jpg'},
        {id:'lounge view 3',option:'option 1',url:'./assets/mredwards/option1/Opt1_0005.jpg'},
        {id:'Kitchen view 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0006.jpg'},
        {id:'Kitchen view 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0007.jpg'},
        {id:'Kitchen view 3',option:'option 1',url:'./assets/mredwards/option1/Opt1_0008.jpg'},
        {id:'bedroomview 1',option:'option 1',url:'./assets/mredwards/option1/Opt1_0009.jpg'},
        {id:'bedroomview 2',option:'option 1',url:'./assets/mredwards/option1/Opt1_0010.jpg'},
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

        welcome:'experience design',

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
                    state.title=theMontes.worldAssets.roomCordsArray.ext[0].name
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
                    state.title=theMontes.worldAssets.roomCordsArray.ext[1].name
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
                        state.title=theMontes.worldAssets.roomCordsArray.int[0].name
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
                        state.title=theMontes.worldAssets.roomCordsArray.int[1].name
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
                        state.title=theMontes.worldAssets.roomCordsArray.int[2].name
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
                        state.title=theMontes.worldAssets.roomCordsArray.int[3].name
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
                        state.title=theMontes.worldAssets.roomCordsArray.int[4].name
                    }
                },
            ]
        },   
            
        camPosition:[20,20,25],
        orbitTarget:[0,0,0],

        maxPolarAngle:.5,

        maxDist:[50],
        minDist:[20],
        
        houses:[
            {name:'option1House',path:'./assets/mredwards/house_Opt1.glb',toogleRoofLevel:"house_opt1_roof"},
        ],
    
        placeHolder:{name:'option2House',path:'./assets/mredwards/house_Opt1.glb'},
        
        supportFiles:[
            {name:'cars',path:'./assets/mredwards/cars.glb'},
            {name:'vegetation',path:'./assets/mredwards/vegetation.glb'},
            {name:'site',path:'./assets/mredwards/site.glb'},
            {name:'site',path:'./assets/mredwards/house_Opt1_furn.glb'},
        ],
           
        _360s:[
            {title:'driveway',url:'./assets/mredwards/option1/Opt1_360_0000.jpg'},
            {title:'pool',url:'./assets/mredwards/option1/Opt1_360_0001.jpg'},
            {title:'side view 1',url:'./assets/mredwards/option1/Opt1_360_0002.jpg'},
        ]
    }
}

export {mrEdwardsKapili}