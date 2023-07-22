import React, { useContext } from 'react'
import { AppContext } from '../../stateManagement/AppContext'
import { useSnapshot } from 'valtio'
import state from '../../stateManagement/store'
import './FeaturesSection.scss'

const FeaturesSection = () => {
    const snap=useSnapshot(state)
  const {productSource,sectionCount,setSectionCount}=useContext(AppContext)
  return (
    <div className="modelPage_desc_keytFeatures">
      {productSource.productText.features?.map((item,index)=><div className='modelPage_desc_keytFeatures_wrapper' key={item.name?.title}>
        <div className="modelPage_desc_keytFeatures_wrapper_container">
          <div className="modelPage_desc_keytFeatures_wrapper_icons">{item.icons}</div>
          <span className='modelPage_desc_keytFeatures_wrapper_number'>{item?.number}</span>
          <span className='modelPage_desc_keytFeatures_wrapper_name'>{item.name?.title}</span>
        </div>
      </div>)}
    </div>
  )
}

export default FeaturesSection