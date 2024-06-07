import React from "react";
import Style from "./footer.module.scss";
import FootImg from "./img/ind.png";

const FooterText = () => {
  return (
    <div className={Style.footertoper}>
      <div className={Style.footertop}>
        <h2>Copyright © Indian Oil Corporation Ltd</h2>
        <h3>
          Site Map | Terms of Use | Data Privacy Policy | Hyperlinking Policy
        </h3>
      </div>
      <div className={Style.footertoll}>
        <h2>
          Toll FREE Number: 1800-2333-555 Commercial LPG Helpline No.
          1860-5991-111 Last updated on 16/01/2024 11:02 AM
        </h2>
      </div>
      <div className={Style.footercenter}>
        <h2>LPG Emergency Helpline: </h2>
        <h3>1906</h3>
        <h4>Powered By PECS</h4>
      </div>
      <div className={Style.footerimage}>
        <img src={FootImg} alt="" />
      </div>
    </div>
  );
};
export default FooterText;
