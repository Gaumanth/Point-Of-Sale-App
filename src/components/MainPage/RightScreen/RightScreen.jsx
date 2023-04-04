import React from 'react'
import "./RightScreen.scss"
import { useState } from 'react';
const RightScreen = () => {
    const [rightScrollTop,setRightScrollTop] = useState(0);
    const rightLeftScroll=(event)=>{
         setRightScrollTop(event.target.scrollTop);
    }
  return (
    <div className="right-screen" >
      <div className="conatiner"></div>
  </div>
  )
}

export default RightScreen