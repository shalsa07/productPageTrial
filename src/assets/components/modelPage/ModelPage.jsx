import React, { Suspense, useContext, useEffect, useRef } from 'react'
import './ModelPage.scss'
import NavBar from '../navBar/NavBar'
import Title1 from '../title1/Title1'
import Title2 from '../title2/Title2'
import Text1 from '../text1/Text1'
import Text2 from '../text2/Text2'
import { AppContext } from '../../stateManagement/AppContext'
import LikeBtn from '../btnLike/BtnLike'
import BtnShare from '../btnShare/BtnShare'
import DownloadsEmail from '../downloadsContacts/DownloadsEmail'
import Footer from '../footer/Footer'

// import World from '../worldCpmponents/World'
// const World=React.lazy(()=>{
//   return import('../worldCpmponents/World')
// })

import SectionWrap from '../sectionWrap/SectionWrap'
// const SectionWrap=React.lazy(()=>{
//   return import('../sectionWrap/SectionWrap')
// })

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BtnLike from '../btnLike/BtnLike'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import Experience from '../worldCpmponents/Experience'
import FeaturesSection from '../featuresSection/FeaturesSection'

const ModelPage = () => {
  const snap=useSnapshot(state)
  const {productSource,sectionCount,setSectionCount}=useContext(AppContext)
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

    // sectionWrapper.style.transform=`translateX(-300px)`

    btnLeft.addEventListener('click',()=>{
      // count===0 && (count=sectionWrapperArray.length-1)
      // count<sectionWrapperArray.length && (count--)
      if(count===0){
        count=sectionWrapperArray.length-1
      }else if(count<sectionWrapperArray.length){
        count--
      }
      // setSectionCount(count)
      sectionWrapper.style.transform=`translateX(-${count * sectionWrapper.clientWidth}px)`
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
      // setSectionCount(count)
      sectionWrapper.style.transform=`translateX(-${count * sectionWrapper.clientWidth}px)`
      // console.log('click right',count)  
    })

    // console.log(sectionWrapper.children)
  },[])
  // console.log(productSource.productText.features)
  return (
    <div className='modelPage'>
      <Title1 item={productSource.productText?.projectTitle}/>

      <div className='share_section'>
        <Text1 item={productSource.productText?.typeOfDesign}/>
        <div className="share_wrap">
          <BtnLike/>
          <BtnShare/>
        </div>
      </div>

      <section className="section_render_drawings_webgl_contaner">
        <div ref={refBtnSectionLeft} className="section_arrows left">
          <ArrowBackIosNewIcon className='icons'/>
        </div>
        <div ref={refBtnSectionRight} className="section_arrows right">
          <ArrowForwardIosIcon className='icons'/>
        </div>
        <div ref={refSectionWrapper} className="section_render_drawings_webgl_contaner_wrapper">
          {productSource.section?.map((section)=><Suspense key={section.id}><SectionWrap item={section.imgs}/></Suspense>)}
          <div className="webglWrap">
            <Suspense><Experience/></Suspense>
          </div>
        </div>
      </section>

      <section className='modelPage_desc'>
        <div className="modelPage_details_download">
          <div className="modelPage_desc_details">
            <div className="modelPage_desc_intro">
              <Title1 item={productSource.productText?.typeOfHouse}/>
              <FeaturesSection/>
              <Text1 item={productSource.desc?.desc}/>
              <br/>
              <Text1 item={productSource.productText?.specialFeatures}/>
            </div>
            <hr/>
            <div className="modelPage_desc_detail_wrap">
              {productSource.productText?.houseSpaces.map((item)=><div key={item?.title} className="modelPage_desc_detail_wrap_items">
                <Title2 item={item}/>
                <Text2 item={item.specs}/>
              </div>)}
            </div>
            <hr/>
            <div className="modelPage_desc_outro">
              <Text1 item={productSource.productText?.outro}/>
            </div>
          </div>
          <div className="modelPage_desc_downloads">
            <div className="modelPage_desc_downloads_container">
              <DownloadsEmail/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ModelPage