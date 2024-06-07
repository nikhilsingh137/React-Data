import React from "react";
import Style from "./banner.module.scss";
import BanTxt from "./img/bannertext-image.jpg";
import TiImg from "./img/Logo-iew24.svg";

const Bannertext = () => {
  return (
    <div className={Style.bannertext}>
      <div className={Style.bannertop}>
        <img src={BanTxt} alt="" />
        <div className={Style.timer}>
          <div className={Style.bannertime}>
            <h2>21</h2>
            <h3>9</h3>
            <h4>8</h4>
            <h5>20</h5>
          </div>
          <div className={Style.timetext}>
            <img src={TiImg} alt="" />
          </div>
        </div>
      </div>
      <div className={Style.director}>
        <h2>What's New</h2>
        <h6>
          Selection for the post of Director (Refineries) in Indian Oil
          Corporation Limited
        </h6>
        <p>
          Engagement of Apprentices under the Apprentices Act, 1961 in Pipelines
          Division
        </p>
      </div>
      <div className={Style.color}>
        <h2>Ministry/Industry Updates</h2>
        <p>
          Ministry Of Petroleum & Natural Gas - Celebration of Azadi Ka Amrit
          Mahotsav
        </p>
      </div>
      <div className={Style.change}>
        <h2>Announcement</h2>
        <p>
          It has come to our attention that unscrupulous agencies/person(s)
          purporting to represent IndianOil, are granting fake Indane dealership
          certificates to individuals. The public is advised to beware of this
          fraud. People are advised to visit the nearest area office of OMCs for
          authentication. Visit the Career section of this website for
          IndianOil's recruitment related announcements. IndianOil recruits
          candidates on merit only and no third party has been authorized to
          recruit on our behalf. Please
        </p>
      </div>
    </div>
  );
};
export default Bannertext;
