import React from 'react'
import './Title1.scss'

const Title1 = ({item}) => {
  return (
    <div className='title'>
      {item.title}
    </div>
  )
}

export default Title1