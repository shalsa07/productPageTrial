import React from 'react'
import './ModelPage.scss'
import World from '../worldCpmponents/World'
import NavBar from '../navBar/NavBar'

const ModelPage = () => {
  return (
    <div className='modelPage'>
        <NavBar/>
        <div className='webgl_Container'>
            <World/>
        </div>
    </div>
  )
}

export default ModelPage