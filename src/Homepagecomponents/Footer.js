import React from "react";
import Style from "./footer.module.scss";
import FooterText from "./Footer-text";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <FooterText />
    </div>
  );
};

export default Footer;
