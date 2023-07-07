import { proxy, useSnapshot } from "valtio";

const state=proxy({

    camPosition:[0,0,0],
    roomCord:[0,0,0],
    roomRot:0,

    maxDistance:0,
    minDistance:0,
    maxPolarAngle:85,

    hideRoofLevel:true,

    worldTitle:'vision 3d',
    textHighlight:'text',
})

export default state