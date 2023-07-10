import React, { Suspense, useContext, useEffect, useRef } from 'react'
import './Popup.scss'
import BtnShare from '../btnShare/BtnShare'
import BtnLike from '../btnLike/BtnLike'
import BtnBack from '../btnBack/BtnBack'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import Text1 from '../text1/Text1'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AppContext } from '../../stateManagement/AppContext'

import ImagePopup from '../images/ImagePopup'

const Popup = () => {
    const snap=useSnapshot(state)
    const {productSource}=useContext(AppContext)
    const refSectionWrapper=useRef()
    const refBtnSectionLeft=useRef()
    const refBtnSectionRight=useRef()

  let count=0
  let sectionWrapperArray=[]

  useEffect(()=>{
    const btnLeft=refBtnSectionLeft.current
    const btnRight=refBtnSectionRight.current
    const sectionWrapper=refSectionWrapper.current
    const sectionWrapperArray=[...refSectionWrapper.current.children]

    state.imageTotal.title=sectionWrapperArray?.length-1

    // sectionWrapper.style.transform=`translateX(-300px)`

    btnLeft.addEventListener('click',()=>{
      // count===0 && (count=sectionWrapperArray.length-1)
      // count<sectionWrapperArray.length && (count--)
      if(count===0){
        count=sectionWrapperArray.length-1
      }else if(count<sectionWrapperArray.length){
        count--
      }
      sectionWrapper.style.transform=`translateX(-${count * sectionWrapper.clientWidth}px)`
      state.imageCount.title=count
      // console.log('click left',count)
    })
    
    btnRight.addEventListener('click',()=>{
      // count<sectionWrapperArray.length-1 && (count++)
      // count===sectionWrapperArray.length-1 && (count=0)
      if(count<sectionWrapperArray.length-1){
        count++
      }
      else if(count===sectionWrapperArray.length-1){
        count=0
      }
      sectionWrapper.style.transform=`translateX(-${count * sectionWrapper.clientWidth}px)`
      state.imageCount.title=count
      // console.log('click right',count)
    })

    // console.log(sectionWrapper.children)
  },[])
  return (
    <div className='popup'>
        <div className="popup_wrap">
            <div className="popup_Info">
                <BtnBack/>
                <div className="popu_text_info">
                    <Text1 item={snap.imageCount}/>/<Text1 item={snap.imageTotal}/>
                </div>
                <div className="share_wrap">
                    <BtnLike/>
                    <BtnShare/>
                </div>
            </div>

            <section className="popup_images_container">
            <div ref={refBtnSectionLeft} className="popup_arrows left">
                <ArrowBackIosNewIcon className='icons'/>
            </div>
            <div ref={refBtnSectionRight} className="popup_arrows right">
                <ArrowForwardIosIcon className='icons'/>
            </div>
            <div ref={refSectionWrapper} className="popup_images_wrapper">
                {productSource.popup_imgs?.map((item)=><Suspense key={item.id}><ImagePopup path={item.url}/></Suspense>)}
                <div className="sectionWrap">
                </div>
            </div>
            </section>
        </div>
    </div>
  )
}

export default Popup