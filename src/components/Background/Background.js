import React from 'react';

import './Background.css';
import BackgroundVideoMP4 from '../../assets/video/river.mp4'; 
import BackgroundVideoWEBM from '../../assets/video/river.webm'; 

const background = () => (
  <div className="Background">
    <video autoPlay muted loop>
      <source src={BackgroundVideoMP4} type="video/mp4" />
      <source src={BackgroundVideoWEBM} type="video/webm" />
    </video>
  </div>
);

export default background;