// src/components/AutoScrollingFooter.tsx
import React from 'react';
import './AutoScrollingFooter.css';
import image1 from "../assets/sports.png"
import image2 from "../assets/Daily_View.png"
import image3 from "../assets/BANER-SHANNH 1.png"
import image4 from "../assets/image 65 (1).png"
import image5 from "../assets/cricket.jpg"
import ImagePopup from './ImagePopup';


const AutoScrollingFooter: React.FC = () => {
    
  return (
    <footer className="footer">
        <div className="img-container">

      <img src={image1} alt="Footer" className="footer-image" />
      <img src={image2} alt="Footer" className="footer-image" />
      <img src={image3} alt="Footer" className="footer-image" />
      <img src={image4} alt="Footer" className="footer-image" />
      <img src={image5} alt="Footer" className="footer-image" />
      <img src={image4} alt="Footer" className="footer-image" />
        </div>
    </footer>
      
  );
};

export default AutoScrollingFooter;
