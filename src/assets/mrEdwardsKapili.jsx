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
        title:'3 bedroomed house',
        descTitle:'model',
        desc:{title:`The brief was to come with a cozy 3 bedroom house with a helper's quaters attached. It also had to have a media room for the viewing Television as well as isolate the noise and from the quiter lounge which would be used to entertain quests. The design needed to be trendy but understated. It need to sophisticated enough but too expensive to build.`}
    },

    productText:{
        projectTitle:{
            title:`Three Bedroom house`
        },
    
        typeOfDesign:{
            title:`Residential design`
        },
    
        typeOfHouse:{
            title:`3 bedroom house design`
        },
    
        specialFeatures:{
            title:`3 Bedrooms, a Helper's Bedroom and Shower, Breakfast - nook, Media-room, Scullary, formal dining, Office space, outdoor seating and entertainment area, and an airy kitchen. 
        `},
    
        houseSpaces:[
            {
                title:`plan dimensions: 235m2`,
                specs:{
                    title:`
                        area: 16.56m x 23.69m
                        height: 5.6m`
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
                        plinth area: 235m2
                        porch area:`
                }
            },
            {
                title:`Bedrooms:`,
                specs:{
                    title:`
                        1 Master bedroom: 4.8m x 4.6m
                            Walking closet: 1.38m x 4.6m
                            sleeping area: 3.35m x 4.6m
                        2 Bathrooms: 3.33m x 2.99m`
                    }
            },
            {
                title:`Kitchen:`,
                specs:{
                    title:`
                        Kitchen area: 2.99m x 5.26m
                        island: 0.9m x `
                    }
            },
            {
                title:`additional rooms:`,
                specs:{
                    title:`
                        helper's room:3.22m x 3.22m`
                    }
            },
            {
                title:`Grarge`,
                specs:{
                    title:`
                        Garage area: 5.98m x 6.16m
                        2 parking`
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
                        finsh: Galvanised roofing sheet (Chromadek finish) to client color
                        pitch: 5 deegrees with the feature room at 17 degrees
                    `}
            },
        ],
            
        outro:{
            title:`the design celebrates the life style of the client and as occured as the plot was the challenge was truely inspirational.`
        },
    },

    POIs:{
        ext:[
                {
                    name:{title:'driveway'},
                    roomCord:[10,1,-1],
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
                    roomCord:[7.5,1,-28],
                    icons:<PoolOutlinedIcon className='icons'/>,
                    clickFtn:()=>{
                        state.roomCord=[-7.5,0,28],
                        state.camPosition=[0,1.2,0],
                        state.orbitTarget=[0,1.2,0.1],
                        state.maxDist=.05
                        state.minDist=.01
                        state.title=theMontes.worldAssets.roomCordsArray.ext[1].name
                    }
                }
            ],
        int:[
                {
                    name:{title:'lounge'},
                    roomCord:[10,1,-23.5],
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
                    roomCord:[5,1,-11],
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
                    roomCord:[5.7,1,-17.4],
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
                    roomCord:[6.8,1,-19.8],
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
                    roomCord:[1.35,1,-23],
                    icons:<BedOutlinedIcon className='icons'/>,
                    clickFtn:()=>{
                        state.roomCord=[-1.35,0,23],
                        state.camPosition=[0,1.2,0],
                        state.orbitTarget=[0,1.2,.1],
                        state.maxDist=.05
                        state.minDist=.01
                        state.title=theMontes.worldAssets.roomCordsArray.int[4].name
                    }
                }
            ]
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
            
        camPosition:[-20,10,-25],
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