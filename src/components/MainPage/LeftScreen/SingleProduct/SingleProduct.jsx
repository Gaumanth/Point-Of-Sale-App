import React from 'react'
import "./SingleProduct.scss"
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../../store'
const SingleProduct = ({id,name,price,quantity,total}) => {
    const dispach = useDispatch();
    const decrement=()=>{
        dispach(cartActions.decrementQuantity(id));
    }
    const increment=()=>{
         dispach(cartActions.incrementQuantity(id));
    }
  return (
    <div className='single-prod'>
        <div className="single-prod-container">
            <div className='prod-inside'>
                <button className='remove-btn' onClick={()=>dispach(cartActions.removeFromCart(id))}>X</button>
                <span>{name}</span>
            </div>
        <div className="price" style={{marginLeft:"110px"}}>{price}</div>
        <div className="quantity" style={{marginLeft:"100px"}} >
            <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
            </div>
        </div>
        <div className="total" style={{marginRight:"30px"}}>{total} INR</div>
        </div>
      
    </div>
  )
}

export default SingleProduct