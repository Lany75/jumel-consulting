import React from "react";
import { MdPhoneAndroid } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import "./HeaderDesktop.css";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <div id="header">
      <div id="phone-mail">
        <div id="phone">
          <div className="icon">
            <MdPhoneAndroid />
          </div>
          <div className="text">06.08.97.37.44</div>
        </div>
        <div id="mail">
          <div className="icon">
            <FiMail />
          </div>
          <div className="text">julien.rivat@jumel-consulting.fr</div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
