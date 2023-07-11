import React from "react";

import WA from "../../scss/photo/WA.png";
import TG from "../../scss/photo/TG.svg";
import VK from "../../scss/photo/VK.svg";
import GMail from "../../scss/photo/GMail.png";

import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div className="form_footer">
      <Link to="https://t.me/ShadowCherry">
        <img src={TG} alt="Telegram" />
      </Link>
      <Link to="https://vk.com/scmelan">
        <img src={VK} alt="VKontakte" />
      </Link>
      <Link to="https://wa.me/79515832009">
        <img src={WA} alt="What`sApp" />
      </Link>
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = "mailto:scmelan@gmail.com";
          e.preventDefault();
        }}
      >
        <img src={GMail} alt="GMail" className="GMail" />
      </Link>
    </div>
  );
};
