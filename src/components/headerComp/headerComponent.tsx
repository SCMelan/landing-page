import React from "react";

import { Link } from "react-router-dom";

import HH from "../../scss/photo/HH.png";
import GH from "../../scss/photo/GH.png";

export const Header: React.FC = () => {
  return (
    <div className="body_header">
      <div className="form_header">
        <Link to="https://kemerovo.hh.ru/applicant/resumes/view?resume=894d5b97ff09e07e6e0039ed1f423170364930">
          <img src={HH} alt="HH" className="HH_logo" />
        </Link>
        <Link to="https://github.com/SCMelan">
          <img src={GH} alt="HH" className="GitHub_logo" />
        </Link>
      </div>
    </div>
  );
};
