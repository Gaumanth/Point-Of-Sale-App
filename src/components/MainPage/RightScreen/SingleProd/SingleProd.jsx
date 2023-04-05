import React from 'react'
import "./SingleProd.scss"
import { cartActions } from '../../../../store';
import { useDispatch} from "react-redux";
const SingleProd = ({id,name,price,description,image}) => {
   const dispach = useDispatch();
    const handleAddToCart =()=>{
        const productObj = {
            id:id,
            name:name,
            price:price,
            description:description,
            quantity:1,
            total:price
        }
        dispach(cartActions.addToCart(productObj));
    }
  return (
    <div className="product-card" onClick={handleAddToCart}>
        <span className='prod-title'>{name}</span>
       <div className="thumbnail">
        <img className='image' src={image} alt=''/>
        <div className="prod-details">
            <p className='price'>Rs {price}</p>
            <p className="desciption">{description}</p>
        </div>
       </div>
    </div>
  )
}

export default SingleProd