import React from 'react'
import "./RightScreen.scss"
import { useState } from 'react';
import SingleProd from './SingleProd/SingleProd';
const RightScreen = () => {
    const [rightScrollTop,setRightScrollTop] = useState(0);
    const rightLeftScroll=(event)=>{
         setRightScrollTop(event.target.scrollTop);
    }
    console.log(rightLeftScroll)
  return (
    <div className="right-screen" onScroll={rightLeftScroll} >
      <div className="container">
        <SingleProd/>
        <SingleProd/>
        <SingleProd/>
        <SingleProd/>
        <SingleProd/>
        <SingleProd/>
        <SingleProd/>
        <SingleProd/>
        <SingleProd/>
      </div>
  </div>
  )
}

export default RightScreen