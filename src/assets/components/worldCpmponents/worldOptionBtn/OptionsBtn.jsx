import React, { useContext } from 'react'
import './OptionsBtn.scss'
import WorldBtn from '../worldBtn/WorldBtn'
import { AppContext } from '../../../stateManagement/AppContext'

//options
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const optionsBtn={
    icons:<QuestionMarkIcon className='icons'/>
}

const OptionsBtn = () => {
  const {productSource}=useContext(AppContext)
  return (
    <div className='webgl_world_Container_Options'>
      <div className="webgl_world_btn_wrap">
        <WorldBtn item={optionsBtn}/>
      </div>
    </div>
  )
}

export default OptionsBtn