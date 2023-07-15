import { proxy, useSnapshot } from "valtio";

const state=proxy({
    camPosition:[0,0,0],

    orbitTarget:[0,0,-0.7],

    roomCord:[0,0,0],

    optionCount:0,

    mapCount:0,
    minDist:.1,
    maxDist:.5,
    maxPolarAngle:110,
    minPolarAngle:60,
    
    imageCount:{title:0},
    imageTotal:{title:0},

    fullSrcn:false,
    ArMode:false,
    popup:false,
    _3dModelState:false,
    showRoof:true,
    showLevel:true,
    showArrows:true,
    showAR360Options:false,
    showWorldOptions:false,
    showLevelsOptions:false,
    showColoursOptions:false,
    showRoomsOptions:false,

    worldTitle:'vision 3d',
    textHighlight:'text',
})

export default state