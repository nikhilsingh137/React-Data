import React from "react";
import Style from "./socialsite.module.scss";
import SocialSiteText from "./SocialSite-text";

const SocialSite = () => {
  return (
    <div className={Style.social}>
      <SocialSiteText />
    </div>
  );
};

export default SocialSite;
