import { proxy, useSnapshot } from "valtio";

const state=proxy({

    camPosition:[0,0,0],
    roomCord:[0,0,0],
    roomRot:0,

    mapCount:0,
    minDistance:0,
    maxPolarAngle:85,

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