import React, { useContext, useEffect, useRef } from 'react'
import './ModelPage.scss'
import World from '../worldCpmponents/World'
import NavBar from '../navBar/NavBar'
import Title1 from '../title1/Title1'
import Title2 from '../title2/Title2'
import Text1 from '../text1/Text1'
import Text2 from '../text2/Text2'
import { AppContext } from '../../stateManagement/AppContext'
import LikeBtn from '../btnLike/BtnLike'
import BtnShare from '../btnShare/BtnShare'
import SectionWrap from '../sectionWrap/SectionWrap'
import DownloadsEmail from '../downloadsContacts/DownloadsEmail'
import Footer from '../footer/Footer'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const ModelPage = () => {
  const {productSource}=useContext(AppContext)
  const refSectionWrapper=useRef()
  const refBtnLeft=useRef()
  const refBtnRight=useRef()

  useEffect(()=>{
    let count=0
    const btnLeft=refBtnLeft.current
    const btnRight=refBtnRight.current
    const sectionWrapper=refSectionWrapper.current
    const sectionWrapperArray=[...refSectionWrapper.current.children]

    btnLeft.addEventListener('click',()=>{
      console.log('click left')
    })

    btnRight.addEventListener('çlick',()=>{
      console.log('click right')
    })

    console.log(btnLeft,btnRight)
  },[])
  // console.log(productSource.section[0].imgs)
  return (
    <>
      <NavBar/>
      <div className='modelPage'>
        <Title1 item={productSource.productText?.projectTitle}/>

        <div className='share_section'>
          <Text1 item={productSource.productText?.typeOfDesign}/>
          <div className="share_wrap">
            <LikeBtn/>
            <BtnShare/>
          </div>
        </div>

        <section className="section_render_drawings_webgl_contaner">
          <div ref={refSectionWrapper} className="section_render_drawings_webgl_contaner_wrapper">
            <div ref={refBtnLeft} className="section_arrows left">
              <ArrowBackIosNewIcon className='icons'/>
            </div>
            <div ref={refBtnRight} className="section_arrows right">
              <ArrowForwardIosIcon className='icons'/>
            </div>
            {productSource.section?.map((section)=><SectionWrap key=  {section.id} item={section.imgs}/>)}
            <World/>
          </div>
        </section>

        <section className='modelPage_desc'>
          <div className="modelPage_details_download">
            <div className="modelPage_desc_details">
              <div className="modelPage_desc_intro">
                <Title1 item={productSource.productText?.typeOfHouse}/>
                <Text2 item={productSource.productText?.specialFeatures}/>
              </div>
              <hr/>
              <div className="modelPage_desc_detail_wrap">
                {productSource.productText?.houseSpaces.map((item)=><div key={item?.title} className="modelPage_desc_detail_wrap_items">
                  <Title2 item={item}/>
                  <Text2 item={item}/>
                </div>)}
              </div>
              <hr/>
              <div className="modelPage_desc_outro">
                <Text2 item={productSource.productText?.outro}/>
              </div>
            </div>
            <div className="modelPage_desc_downloads">
              <div className="modelPage_desc_downloads_container">
                <DownloadsEmail/>
              </div>
            </div>
          </div>
          {/* <div className="modelPage_desc_outro">
            <Text2 item={productSource.productText?.outro}/>
          </div> */}
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default ModelPage