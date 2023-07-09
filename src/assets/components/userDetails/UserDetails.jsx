import React from 'react'
import './UserDetails.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const UserDetails = () => {
  return (
    <div className='useDetails'>
        <div className="useDetails_menu">
            <MenuIcon className='icons'/>
        </div>
        <div className="useDetails_user">
            <AccountCircleIcon className='icons'/>
        </div>
    </div>
  )
}

export default UserDetails