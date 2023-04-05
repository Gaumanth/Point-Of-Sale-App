import React from 'react'
import "./SingleProd.scss"
import Camera from "../../../../assets/camera.jpg"
const SingleProd = () => {
  return (
    <div className="product-card">
        <span className='prod-title'>Camera</span>
       <div className="thumbnail">
        <img className='image' src={Camera}  alt=''/>
        <div className="prod-details">
            <p className='price'>Rs 20,000</p>
            <p className="desciption">Product Description</p>
        </div>
       </div>
    </div>
  )
}

export default SingleProd