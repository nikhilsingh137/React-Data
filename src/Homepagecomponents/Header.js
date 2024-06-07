import React from "react";
import Style from "./header.module.scss";
import HeadImg from "./img/logo oil.gif";
import HeaderText from "./Header-text";

const Header = () => {
  return (
    <div className={Style.header}>
      <div className={Style.headerfile}>
        <img src={HeadImg} alt="" />
      </div>
      <HeaderText />
    </div>
  );
};
export default Header;
