import React, { useContext } from 'react'
import './SectionWrap.scss'
import ImageContainer from '../images/ImageContainer'
import { AppContext } from '../../stateManagement/AppContext'

const SectionWrap = ({item}) => {
    // console.log(item)
  return (
    <div className='sectionWrap'>
        <div className="singleImage">
            <div className="image_wrap">
                <ImageContainer path={item[0]?.url}/>
            </div>
        </div>
        <div className="columnImage">
            <div className="image_wrap">
                <ImageContainer path={item[1]?.url}/>
            </div>
            <div className="image_wrap">
                <ImageContainer path={item[2]?.url}/>
            </div>
        </div>
        <div className="columnImage two">
            <div className="image_wrap">
                <ImageContainer path={item[3]?.url}/>
            </div>
            <div className="image_wrap">
                <ImageContainer path={item[4]?.url}/>
            </div>
        </div>
    </div>
  )
}

export default SectionWrap