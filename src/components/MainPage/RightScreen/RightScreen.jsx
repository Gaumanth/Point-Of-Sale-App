import React from 'react'
import "./RightScreen.scss"
import { useState } from 'react';
import SingleProd from './SingleProd/SingleProd';
import products from "../../../data.json"
const RightScreen = () => {
    const [rightScrollTop,setRightScrollTop] = useState(0);
    const rightLeftScroll=(event)=>{
         setRightScrollTop(event.target.scrollTop);
    }
    console.log(rightLeftScroll)
  return (
    <div className="right-screen" onScroll={rightLeftScroll} >
      <div className="container">
       {products.map((item) => <SingleProd id={item.id} key={item.id} name={item.name} price={item.price} description={item.description} image={item.image}/>)}
      </div>
  </div>
  )
}

export default RightScreen