import React, { useState } from "react";
import Style from "./banner.module.scss";
import BanImg from "./img/banner-image.jpg";
import Bannertext from "./Banner-text";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Banner = () => {
  const [show, setShow] = useState(true);
  const showHide = () => {
    setShow(!show);
  };
  return (
    <div className={Style.banner} onClick={showHide}>
      {show && (
        <div className={Style.bannerimage}>
          <div className={Style.bannerpic}>
            <OwlCarousel className="owl-theme" items={1} autoPlay nav>
              <img src={BanImg} alt="" />
              <img src={BanImg} alt="" />
              <img src={BanImg} alt="" />
              <img src={BanImg} alt="" />
            </OwlCarousel>
          </div>
        </div>
      )}
      <Bannertext />
    </div>
  );
};
export default Banner;
