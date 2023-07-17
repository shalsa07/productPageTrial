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
    let countOptions=0

    const decreament=(value,array)=>{
        // count === 0 ? count=productSource.worldAssets._360s.length-1 : count--
        // state.mapCount=count
        // console.log(count)

        if(count === 0){
            count=array.length-1
        }else if(count < array.length){
            count--
        }
        value=count

        console.log(count,value,array)

    }

    const increament=(value,array)=>{
        // count < productSource.worldAssets._360s.length-1 ? count++ : count = 0
        // state.mapCount=count
        // console.log(count)

        if(count < array.length -1){
            count++
        }else if(count === array-1){
            count=0
        }
        value=count

        console.log(count,value,array)
        
    }

    useEffect(()=>{
        const arrowsContainerArray=[...refArrowsContainer.current.children]

        arrowsContainerArray.forEach((btn,index)=>{
            btn.addEventListener('click',()=>{
                index === 0 && decreament(state.mapNumber,productSource.worldAssets._360s)
                index === 1 && increament(state.mapNumber,productSource.worldAssets._360s)

                productSource.worldAssets?.houses > 0 && (index === 0 && decreament(snap.mapCount,productSource.worldAssets.houses))
                productSource.worldAssets?.houses > 0 && (index === 1 && increament(snap.mapCount,productSource.worldAssets.houses))
                console.log(btn.id,index)
            })
        })

        // console.log(arrowsContainerArray)
    },[])

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