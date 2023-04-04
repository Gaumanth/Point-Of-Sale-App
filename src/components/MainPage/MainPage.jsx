import React, { useState } from 'react';
import './MainPage.scss';
import LeftScreen from './LeftScreen/LeftScreen';
import RightScreen from './RightScreen/RightScreen';
function MainPage() {
  return (
    <div className="app-container">
     <LeftScreen/>
     <RightScreen/>
    </div>
  );
}

export default MainPage;
