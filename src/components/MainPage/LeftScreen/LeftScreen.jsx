import React, { useEffect, useState } from 'react';
import "./LeftScreen.scss";
import SingleProduct from './SingleProduct/SingleProduct';
import { useSelector ,useDispatch} from 'react-redux';
import { cartActions } from '../../../store';
import Receipt from '../../Reciept/Reciept';
import {createPortal} from "react-dom"
const LeftScreen = () => {

   const [subtotal,setSubtotal] = useState(0);
   const [total,setTotal] = useState(0);
   const [vat,setVat] = useState(0);
   const [discount,setDiscount] = useState(0);
   const [totalItemsInCart,setTotalItemsInCart] = useState(0);

   const dispach = useDispatch();
   const cartItems = useSelector((state) => state.cartItems);
   const showCart = useSelector((state) => state.show)
  console.log(cartItems)
   useEffect(()=>{
    //Calculating Subtotal
    const totalArray = cartItems.map((item)=> item.total);
   const totalArrayNum = totalArray.map((item) => Number(item));

   let subT =0;
   for(let i=0;i<totalArrayNum.length;i++){
      subT+=totalArrayNum[i];
   }
   setSubtotal(subT);
   const vatTax = 0.1 * subT; // 10% of subtotal
   const disc = 0.1 * subT; // 10% of subtotal
   const totalAmount = (subT+vatTax) - disc; // Total
   setSubtotal(subT);
   setVat(vatTax);
   setDiscount(disc);
   setTotal(totalAmount);
   // Caculating total Products In Cart
   const countArray = cartItems.map((item) => item.quantity);
   const countArrayNum = countArray.map((item) => Number(item));
   let cartItemCount =0;
   for(let i=0;i<countArrayNum.length;i++){
      cartItemCount+=countArrayNum[i];
   }
   setTotalItemsInCart(cartItemCount);

   },[cartItems])
    const [leftScrollTop,setLeftScrollTop] = useState(0);
    const handleLeftScroll=(event)=>{
         setLeftScrollTop(event.target.scrollTop);
    }

    const handleCancelSale =()=>{
       dispach(cartActions.emptyCart());
    }
  const handleProcess=()=>{
    dispach(cartActions.showCart());
  }



   // Creating a potal for Reciept
   const RecieptModal = ()=>{
      const modalElement=document.getElementById("reciept-modal");
      modalElement.style.position="absolute";
      modalElement.style.marginLeft="500px";
      modalElement.style.zIndex="1";
      return <Receipt />
   }

  return (
   <>
    { showCart && createPortal(<RecieptModal/>,document.getElementById("reciept-modal"))}
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
           { cartItems.length ===0 ?<div className="empty-cart">
            <span className="no-product-heading">THERE ARE NO PRODUCTS IN THE CART</span>
          </div> : cartItems.map((item)=> <SingleProduct key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} total={item.total}/>)}
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
                <span>{subtotal} INR</span>
             </div>
             <div className='rrt-b'>
                <span>10%</span>
             </div>
             <div className='rrt-b'>
                <span>10%</span>
             </div>
             <div className='rrt-b'>
                <span>{total} INR</span>
             </div>
            </div>
            <div className="right-left">
            <div className="rl-b">
                <span><b>{totalItemsInCart} items</b></span>
             </div>
             <div className="rl-b">
                <span><b>{vat} INR</b></span>
             </div>
             <div className="rl-b">
                <span><b>{discount} INR</b></span>
             </div>
            </div>
           </div>
        </div>
        <div className="buttons">
            
            <button className='cancel-btn' onClick={handleCancelSale}>Cancel Sale</button>
            <button className='process-btn' onClick={handleProcess}>Process Sale</button>
        </div>
        </div> 
     </div>
  </div>
  </>
  )
}

export default LeftScreen