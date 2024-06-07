import React from "react";
import Style from "./content.module.scss";
import ConImg from "./img/Natural-Gas.jpg";

const ContentImage = () => {
  return (
    <div className={Style.contentImage}>
      <div className={Style.contentpic}>
        <ul>
          <li>
            <a href="">
              <i class="fa-solid fa-building"></i>
              <span>Refining</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-solid fa-building"></i>
              <span>Refining</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-solid fa-building"></i>
              <span>Refining</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-solid fa-building"></i>
              <span>Refining</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-solid fa-building"></i>
              <span>Refining</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-solid fa-building"></i>
              <span>Refining</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={Style.contentphoto}>
        <img src={ConImg} alt="" />
      </div>
    </div>
  );
};
export default ContentImage;
