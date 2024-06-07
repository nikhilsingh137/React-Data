import React from "react";
import Style from "./content.module.scss";
import ContentImage from "./Content-image";

const Content = () => {
  return (
    <div className={Style.content}>
      <div className={Style.contenttop}>
        <h2>
          Our <span>Business</span>
        </h2>
      </div>
      <ContentImage />
    </div>
  );
};
export default Content;
