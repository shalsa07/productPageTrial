import { proxy, useSnapshot } from "valtio";

const state=proxy({
    camTarget:[0,0,-1],
    camPosition:[20,10,40],

    roomCord:[-6.79,0,2.5],
    roomRot:0,

    optionCount:1,

    mapCount:0,
    minDist:.1,
    maxDist:.5,
    maxPolarAngle:110,
    minPolarAngle:60,

    ArMode:false,
    _3dModelState:false,
    showRoof:true,
    showLevel:true,
    showAR360Options:false,
    showWorldOptions:false,
    showLevelsOptions:false,
    showColoursOptions:false,
    showRoomsOptions:false,

    worldTitle:'vision 3d',
    textHighlight:'text',
})

export default state