import React, { useContext, useEffect, useRef } from 'react'
import './WorldArrows.scss'

//Arrows
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import WorldBtn from '../worldBtn/WorldBtn';
import { AppContext } from '../../../stateManagement/AppContext';
import { useSnapshot } from 'valtio';
import state from '../../../stateManagement/store';

const leftArrow={
    icons:<ArrowCircleLeftIcon className='icons'/>
}

const rightArrow={
    icons:<ArrowCircleRightIcon className='icons'/>
}

const WorldArrows = () => {
    const {productSource}=useContext(AppContext)
    const snap=useSnapshot(state)
    const refArrowsContainer=useRef()

    let count=0

    const btnLeft=()=>{
        if(count === 0){
            count=productSource.worldAssets._360s.length-1
       }else if(count<productSource.worldAssets._360s.length){
            count--
       }
       state.mapCount=count
       console.log(count)
    }

    const btnRight=()=>{
        if(count<productSource.worldAssets._360s.length-1){
            count++
       }else if(count=productSource.worldAssets._360s.length-1){
            count=0
       }
       state.mapCount=count
       console.log(count)
    }

    useEffect(()=>{
        const arrowsContainerArray=[...refArrowsContainer.current.children]

        arrowsContainerArray.forEach((btn,index)=>{
            btn.addEventListener('click',()=>{
               
                // index==1 && (state.showLevel=false)
                
                switch (index) {
                    case 0:
                        btnLeft()
                        console.log('click btn',index,count)
                        break;
                    case 1:
                        btnRight()
                        console.log('click btn',index,count)
                        break;
                
                    default:
                        state.showRoof=true
                        break;
                }
                // console.log(btn,index)
            })
        })

        // console.log(arrowsContainerArray)
    })

  return (
    <div ref={refArrowsContainer} className='webgl_world_Arrows' style={{bottom: snap._3dModelState ? '80px': '20px'}}>
        <div className="webgl_world_btn_wrap">
            {/* <ArrowCircleLeftIcon className='icons'/> */}
            <WorldBtn item={leftArrow}/>
        </div>
        <div className="webgl_world_btn_wrap">
            {/* <ArrowCircleRightIcon className='icons'/> */}
            <WorldBtn item={rightArrow}/>
        </div>
    </div>
  )
}

export default WorldArrows