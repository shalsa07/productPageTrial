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

    const btnLeft=()=>{
        count === 0 ? count=productSource.worldAssets._360s.length-1 : count--

        console.log(count)
        // if(!snap.showAR360Options){
        //     if(count === 0){
        //         count=productSource.worldAssets._360s.length-1
        //    }else if(count<productSource.worldAssets._360s.length){
        //         count--
        //    }
        //    state.mapCount=count
        //    //    state.orbitTarget=[5,0,0]
        //    console.log('360 left',count)
        // // console.log('360 left',count)

        // }else if(snap._3dModelState){
        //     if(countOptions === 0){
        //         countOptions=productSource.worldAssets.houses.length-1
        //    }else if(countOptions<productSource.worldAssets.houses.length){
        //         countOptions--
        //    }
        //    console.log('model options',countOptions)
        // //    state.optionCount=countOptions
        // }
    //    console.log(snap.camTarget)
    }

    const btnRight=()=>{
        count < productSource.worldAssets._360s.length ? count++ : 0

        console.log(count,productSource.worldAssets._360s.length-1)
        // if(!snap._3dModelState){
        //     if(count<productSource.worldAssets._360s.length-1){
        //         count++
        //    }else if(count=productSource.worldAssets._360s.length-1){
        //         count=0
        //    }
        //    state.mapCount=count
        // //    state.orbitTarget=[5,0,0]
        // console.log('360 right',count)

        //    console.log('360 right',count)
        // }else if(snap._3dModelState){
        //     if(countOptions<productSource.worldAssets.houses.length-1){
        //         countOptions++
        //     }else if(countOptions=productSource.worldAssets.houses.length-1){
        //         countOptions=0
        //     }
        //     state.optionCount=countOptions
        //     console.log('model options',countOptions,snap.optionCount)
        // }
    //    console.log(snap.camTarget)
    }

    useEffect(()=>{
        const arrowsContainerArray=[...refArrowsContainer.current.children]

        arrowsContainerArray.forEach((btn,index)=>{
            btn.addEventListener('click',()=>{
               
                // index==1 && (state.showLevel=false)
                
                switch (index) {
                    case 0:
                        btnLeft()
                        // console.log('click btn',index,count)
                        break;
                    case 1:
                        btnRight()
                        // console.log('click btn',index,count)
                        break;
                
                    default:
                        state.mapCount=0
                        state.optionCount=0
                        break;
                }
                // console.log(btn,index)
            })
        })

        // console.log(arrowsContainerArray)
    },[snap.mapCount])

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