import React from "react";
import "./Footer.css";
import image1 from "../assets/cricket.jpg";
import image2 from "../assets/BANER-SHANNH 1.png";
import image3 from "../assets/Daily_View.png";
import image4 from "../assets/sports.png";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="image-container">
        <div className="image-track">
          <img src={image1} alt="Imag1" />
          <img src={image2} alt="Imag2" />
          <img src={image3} alt="Imag3" />
          <img src={image4} alt="Imag4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
