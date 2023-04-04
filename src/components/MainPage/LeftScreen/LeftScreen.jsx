import React, { useState } from 'react';
import "./LeftScreen.scss";
import SingleProduct from './SingleProduct/SingleProduct';
const LeftScreen = () => {
    const [leftScrollTop,setLeftScrollTop] = useState(0);
    const handleLeftScroll=(event)=>{
         setLeftScrollTop(event.target.scrollTop);
    }
  return (
    <div className="left-screen" >
     <div className="container">
        <div className="headings" onScroll={handleLeftScroll}>
            <div className="products"><span>PRODUCTS</span></div>
            <div className="price"><span>PRICE</span></div>
            <div className="quantity"><span>QUANTITY</span></div>
            <div className="total"><span>TOTAL</span></div>
        </div>
        <div className="container2">

        {/*---------Product Item List------------ */}
        <div className="item-list" >
          {/*No Cart Items*/}
          {/* <div className="empty-cart">
            <span className="no-product-heading">THERE ARE NO PRODUCTS IN THE CART</span>
          </div> */}
           <SingleProduct/>
           <SingleProduct/>
           <SingleProduct/>
           <SingleProduct/>
        </div>

       {/*-------------------------------------------*/}
        <div className="sub-total">
           <div className="left">
             <div className="left-subtotal">
                <span>Subtotal</span>
             </div>
             <div className="left-subtotal">
                 <span>VAT-Tax</span>
             </div>
             <div className="left-subtotal">
                 <span>Discount</span>
             </div>
             <div className="left-subtotal">
                 <span>Total</span>
             </div>
           </div>
           <div className="right">
            <div className="right-right">
            <div className='rrt-b'>
                <span>0.000 EUR</span>
             </div>
             <div className='rrt-b'>
                <span>10%</span>
             </div>
             <div className='rrt-b'>
                <span>10%</span>
             </div>
             <div className='rrt-b'>
                <span>0.000 EUR</span>
             </div>
            </div>
            <div className="right-left">
            <div className="rl-b">
                <span><b>0 items</b></span>
             </div>
             <div className="rl-b">
                <span><b>0.000 EUR</b></span>
             </div>
             <div className="rl-b">
                <span><b>0.000 EUR</b></span>
             </div>
            </div>
           </div>
        </div>
        <div className="buttons">
            
            <button className='cancel-btn'>Cancle Sale</button>
            <button className='process-btn'>Process Sale</button>
        </div>
        </div> 
     </div>
  </div>
  )
}

export default LeftScreen