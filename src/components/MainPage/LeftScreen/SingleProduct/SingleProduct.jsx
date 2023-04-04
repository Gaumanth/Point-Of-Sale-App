import React from 'react'
import "./SingleProduct.scss"
const SingleProduct = () => {
  return (
    <div className='single-prod'>
        <div className="single-prod-container">
            <div className='prod-inside'>
                <button className='remove-btn'>X</button>
                <span>Sweater</span>
            </div>
        <div className="price" style={{marginLeft:"100px"}}>2,000</div>
        <div className="quantity" style={{marginLeft:"100px"}} >
            <div className="quantity-buttons">
                <span>-</span>
                <span>2</span>
                <span>+</span>
            </div>
        </div>
        <div className="total" style={{marginRight:"30px"}}>4,000 INR</div>
        </div>
      
    </div>
  )
}

export default SingleProduct