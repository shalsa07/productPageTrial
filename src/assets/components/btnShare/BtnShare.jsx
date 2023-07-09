import React from 'react'
import './BtnShare.scss'

import IosShareIcon from '@mui/icons-material/IosShare';

const BtnShare = () => {
  return (
    <div className='share_Container'>
        <div className="share_icon">
          <IosShareIcon className='icons'></IosShareIcon>
        </div>
        <span className='share_text'>share</span>
    </div>
  )
}

export default BtnShare