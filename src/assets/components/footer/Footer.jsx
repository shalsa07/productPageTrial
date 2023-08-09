import React from 'react'
import './Footer.scss'
import Logo from '../logo/Logo'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const date=new Date().getFullYear()

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_wrapper">
        <div className="footer_logo">
          {/* <span className='footer_logo_text'>luyaridesigns</span> */}
          <span className='footer_logo_outro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequuntur quia, ratione consequatur libero fugit velit odit.</span>
          <div className="footer_socials_wrapper">
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
        <div className="footer_usefullLinks">
          <span className="footer_section_title">usefull links</span>
          <ul className="footer_usefullLinks_Links">
            <li className="footer_links">home</li>
            <li className="footer_links">categories</li>
            <li className="footer_links">features</li>
            {/* <li className="footer_links">home</li> */}
          </ul>
        </div>
        <div className="footer_contactDetails">
          <span className="footer_section_title">contact</span>
          <div className="footer_contactDetails_details">
            <div className="footer_contactDetails_details_item">
              <div className="footer_contactDetails_details_item_icon">
                <LocationOnOutlinedIcon className='icons'/>
              </div>
              <span>400, PO Box, Gaborone</span>
            </div>
            <div className="footer_contactDetails_details_item">
              <div className="footer_contactDetails_details_item_icon">
                <LocalPhoneOutlinedIcon className='icons'/>
              </div>
              <span>(267)74139977</span>
            </div>
            <div className="footer_contactDetails_details_item">
              <div className="footer_contactDetails_details_item_icon">
                <EmailOutlinedIcon className='icons'/>
              </div>
              <span>admin@luyari.com</span>
            </div>
            <div className="footer_contactDetails_paymentRoutes">
              {/* <img className='footer_contactDetails_paymentRoutes_img' src=''> */}
              <p>all right reserved. copyright, {date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer