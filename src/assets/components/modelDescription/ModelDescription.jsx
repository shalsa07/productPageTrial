import React from 'react'
import './ModelDescription.scss'

const ModelDescription = () => {
  return (
    <section className='modelPage_desc'>
        <div className="modelPage_details_download">
        <div className="modelPage_desc_details">
            <div className="modelPage_desc_intro">
            <Title1 item={productSource.productText?.typeOfHouse}/>
            <Text2 item={productSource.productText?.specialFeatures}/>
            </div>
            <hr/>
            <div className="modelPage_desc_detail_wrap">
            {productSource.productText?.houseSpaces.map((item)=><div key={item?.title} className="modelPage_desc_detail_wrap_items">
                <Title2 item={item}/>
                <Text2 item={item}/>
            </div>)}
            </div>
            <hr/>
            <div className="modelPage_desc_outro">
            <Text2 item={productSource.productText?.outro}/>
            </div>
        </div>
        <div className="modelPage_desc_downloads">
            <div className="modelPage_desc_downloads_container">
            <DownloadsEmail/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default ModelDescription