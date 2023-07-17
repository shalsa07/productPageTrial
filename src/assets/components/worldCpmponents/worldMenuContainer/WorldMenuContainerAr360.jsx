import React, { useContext } from 'react'
import './WorldMenuContainer.scss'
import WorldBtn from '../worldBtn/WorldBtn'
import { useSnapshot } from 'valtio';

//levels menu
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import state from '../../../stateManagement/store';
import { AppContext } from '../../../stateManagement/AppContext';


const WorldMenuContainerAr360 = () => {
  const {productSource}=useContext(AppContext)
  const snap=useSnapshot(state)
  const uiLevels=[
      {
          icons:<ThreeDRotationIcon className='icons'/>,name:'3d model',clickFtn:()=>{
              state._3dModelState=true
              state.showWorldOptions=true
              state.showAR360Options=false
              state.maxDist=50
              state.minDist=20
              state.camTarget=[0,0,0]
              state.camPosition=productSource.worldAssets?.camPosition
              state.roomCord=productSource.worldAssets?.default
              state.title.title=productSource.worldAssets?.welcome
              state.worldMode='3d mode'
              
              productSource.worldAssets.houses.length-1 === 0 && (state.showArrows=false)
  
              // console.log('click')
            }
      },
      {
          icons:<ViewInArIcon className='icons'/>,name:'ar',clickFtn:()=>{
            state.fullSrcn=true
            state.ArMode=true
            state.worldMode='ar mode'
            state._3dModelState=true
            state.roomCord=productSource.worldAssets?.arPosition
            state.showWorldOptions=true
            state.showAR360Options=false
            state.showArrows=false
  
            // console.log('click')
          }
      },
  ]
  return (
    <div className='webgl_world_WorldMenuContainer' style={{top: '70px', scale: snap.showAR360Options? '1' : '0',transition:'all .5s ease',gap:'40px'}}>
        {uiLevels.map((btns)=><WorldBtn key={btns.name} item={btns}/>)}
    </div>
  )
}

export default WorldMenuContainerAr360