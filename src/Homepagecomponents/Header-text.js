import React from "react";
import Style from "./header.module.scss";
import HetImg from "./img/voice.png";

const HeaderText = () => {
  return (
    <div className={Style.headertext}>
      <div className={Style.headertop}>
        <div className={Style.side}>
          <div className={Style.side1}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="what are you looking for you" />
          </div>
          <div className={Style.button}>
            <button>Go</button>
            <img src={HetImg} alt="" />
          </div>
        </div>
        <div className={Style.headerIcon}>
          <ul>
            <li>
              <i class="fa-brands fa-square-facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-square-x-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-square-youtube"></i>
            </li>
            <li>
              {" "}
              <i class="fa-brands fa-square-instagram"></i>
            </li>
            <li>
              {" "}
              <i class="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className={Style.bottom}>
        <ul>
          <li>
            <a href="About us">
              About us <i class="fa-solid fa-caret-down"></i>
              <div className={Style.dropdown}>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
              </div>
            </a>
          </li>
          <li>
            <a href="IndianOil For You">
              IndianOil For You <i class="fa-solid fa-caret-down"></i>
            </a>
          </li>
          <li>
            <a href="IndianOil for Environment">
              IndianOil for Environment <i class="fa-solid fa-caret-down"></i>
            </a>
          </li>
          <li>
            <a href="We are Listening">
              We are Listening <i class="fa-solid fa-caret-down"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderText;
