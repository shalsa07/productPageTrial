import React, { useContext, useEffect } from 'react'
import './WorldMenuContainer.scss'
import WorldBtn from '../worldBtn/WorldBtn'

import { useSnapshot } from 'valtio';
import state from '../../../stateManagement/store';
import { AppContext } from '../../../stateManagement/AppContext';

const WorldMenuContainerRooms = () => {
    const snap=useSnapshot(state)
    const {productSource}=useContext(AppContext)

    // console.log(uiExtRooms[0])
    return (
    <div className='webgl_world_WorldMenuContainer_levels' style={{bottom: snap.showRoomsOptions ? '10px' : '-80px'}}>
        <p style={{textTransform:'uppercase',fontWeight:'300',letterSpacing:'3px'}}>exterior</p>
        {productSource.worldAssets?.roomCordsArray.ext.map((btns)=><div key={btns.name} className='worldBtn_wrap'><WorldBtn item={btns}/></div>)}
        <p style={{textTransform:'uppercase',fontWeight:'300',letterSpacing:'3px'}}>interior</p>
        {productSource.worldAssets?.roomCordsArray.int.map((btns)=><div key={btns.name} className='worldBtn_wrap'><WorldBtn item={btns}/></div>)}
        {/* {uiIntRooms.map((btns)=><WorldBtn key={btns.name} item={btns}/>)} */}
    </div>
  )
}

export default WorldMenuContainerRooms