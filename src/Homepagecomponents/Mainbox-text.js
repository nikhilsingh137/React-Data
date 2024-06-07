import React from "react";
import Style from "./mainbox.module.scss";

const MainboxText = (props) => {
  const { image, text, paragraph } = props;
  return (
    <div className={Style.mainboxText}>
      <span>
        <img src={image} alt="" />
      </span>
      <div className={Style.mainboxupper}>
        <h2>{text}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
export default MainboxText;
