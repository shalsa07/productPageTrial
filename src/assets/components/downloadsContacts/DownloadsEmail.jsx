import React from 'react'
import './DownloadsEmail.scss'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const DownloadsEmail = () => {
  return (
    <div className='downloadsContact_wrap'>
        <div className="downloads">
          <span>downloads</span>
          <button className='pdf_downloads_btns'><span>brochure download</span></button>
          <button className='pdf_downloads_btns'>constuction docs download</button>
        </div>
        <div className="contact">
            <span style={{margin:'20px 0'}}>get in touch  </span>
            <div className="downloadsContact_wrap_message">
              <div className="input_wraps">
                <span className='input_title'>name</span><input className='inputs'/>
              </div>
              <div className="input_wraps">
                <span className='input_title'>number</span><input className='inputs'/>
              </div>
              <div className="input_wraps">
                <span className='input_title'>email</span><input className='inputs'/>
              </div>
              <div className="input_wraps question">
                <span className='input_title'>question</span><input className='inputs'/>
              </div>
              <button className='contact_submit_button'><span>submit</span></button>
            </div>
            <div className="downloadsContact_wrap_socials">
              <div className="socials downloadsContact_whatsap">
                <EmailIcon className='icons'/>
              </div>
              <div className="socials downloadsContact_email">
                <WhatsAppIcon className='icons'/>
              </div>
              <div className="socials downloadsContact_twitter">
                <TwitterIcon className='icons'/>
              </div>
              <div className="socials downloadsContact_threads">
                <InstagramIcon className='icons'/>
              </div>
              <div className="socials downloadsContact_instagram">
                <FacebookIcon className='icons'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadsEmail