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
import BedIcon from '@mui/icons-material/Bed';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

import StraightenIcon from '@mui/icons-material/Straighten';
import BathtubIcon from '@mui/icons-material/Bathtub';


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
        title:'3 bedroomed house',
        descTitle:'model',
        desc:{title:`The brief was to come with a cozy 3 bedroom house with a helper's quaters attached. It also had to have a media room for the viewing television as well as isolate the noise and from the quiter lounge which would be used to entertain quests. The design needed to be trendy but understated. It need to sophisticated enough but too expensive to build.`}
    },

    productText:{
        features:[
            {
                name:{title:'area'},
                number:`235m2`,
                icons:<StraightenIcon className='icons'/>,
            },
            {
                name:{title:'beds'},
                number:3,
                icons:<BedIcon className='icons'/>,
            },
            {
                name:{title:'baths'},
                number:2,
                icons:<BathtubIcon className='icons'/>,
            },
            {
                name:{title:'floors'},
                number:1,
                icons:<OtherHousesIcon className='icons'/>,
            },
            {
                name:{title:'car parking'},
                number:2,
                icons:<DirectionsCarFilledIcon className='icons'/>,
            },
        ],

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
                        area: 16.56m x 23.69m,
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
                        plinth area: 235m2,
                        porch area: 40m2 `
                }
            },
            {
                title:`Bedrooms:`,
                specs:{
                    title:`
                        1 Master bedroom: 4.8m x 4.6m,
                        Walking closet: 1.38m x 4.6m,
                        sleeping area: 3.35m x 4.6m,
                        2 Bathrooms: 3.33m x 2.99m`,
                    }
            },
            {
                title:`Kitchen:`,
                specs:{
                    title:`
                        Kitchen area: 2.99m x 5.26m,
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
                        Garage area: 5.98m x 6.16m,
                        2 parking`
                    }
            },
            {
                title:`outdoor areas:`,
                specs:{
                    title:`
                        porch: 40m2`
                    }
            },
            {
                title:`roof:  `,
                specs:{
                    title:`
                        finsh: Galvanised roofing sheet (Chromadek finish) to client color,
                        pitch: 5 deegrees rise with the feature roof at 17 degrees rise
                    `}
            },
        ],
            
        outro:{
            title:`the design celebrates the life style of the client and as occured as the plot was the challenge was truely inspirational.`
        },
    },

    worldAssets:{
        enviHdriMap:'./enviMap.hdr',

        toggle1stFlr:'house_opt1_roof',
        toggleRoofFLevelOpt1: 'house_opt1_roof',
        toggleRoofFLevelOpt2: 'house_opt2_roof',

        welcome:'experience design',

        default:[-6.79,0,14],

        arPosition:[-6.79,0,5],
                    
        camPosition:[20,20,25],
        orbitTarget:[0,0,0],

        maxPolarAngle:.5,

        maxDist:[50],
        minDist:[20],

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

        roomCordsArray:{
            ext:[
            {
                name:'driveway',
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
                name:'pool area',
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
                    name:'lounge',
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
                    name:'foyer',
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
                    name:'kitchen',
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
                    name:'media room',
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
                    name:'bedroom',
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
        
        houses:[
            // {name:'house_opt1',path:'./assets/themontes/house_Opt1.glb',toogleRoofLevel:"house_opt1_roof"},
            // {name:'house_opt2',path:'./assets/themontes/house_Opt2 Baked.glb',toogleRoofLevel:"house_opt2_roof`"},
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
            {title:'bedroom',url:'./assets/themontes/option2/Opt2_360_0005.jpg'},
            {title:'dinning/kitchen',url:'./assets/themontes/option2/Opt2_360_0003.jpg'},
            {title:'lounge',url:'./assets/themontes/option2/Opt2_360_0004.jpg'},
        ]
    }
}

export {theMontes}