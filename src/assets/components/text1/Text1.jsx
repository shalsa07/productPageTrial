import React from 'react'
import './Text1.scss'

const Text1 = ({item}) => {
  return (
    <div className='text'>
      {item.title}
    </div>
  )
}

export default Text1