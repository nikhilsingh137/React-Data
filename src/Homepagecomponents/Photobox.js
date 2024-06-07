import React from "react";
import Style from "./photo.module.scss";
import PhotImg from "./img/Chairman.jpg";

const Photo = () => {
  return (
    <div className={Style.photo}>
      <img src={PhotImg} alt="" />
    </div>
  );
};
export default Photo;
