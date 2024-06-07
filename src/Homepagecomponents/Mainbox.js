import React from "react";
import Style from "./mainbox.module.scss";
import MainboxText from "./Mainbox-text";
import ManImg from "./img/inddianOil.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Mainbox = () => {
  return (
    <div className={Style.mainbox}>
      <div className={Style.mainboxTop}>
        <h2>
          Most <span>Popular</span>
        </h2>
      </div>
      <div className={Style.mainboxdivide}>
        <OwlCarousel className="owl-theme" margin={10} items={3} autoPlay nav>
          <MainboxText
            image={ManImg}
            text="IndianOil's Green Agenda"
            paragraph=" Heath, Safety & Environment: The three pillars to ensure safe communities and happy stakeholders."
          />

          <MainboxText
            image={ManImg}
            text="IndianOil's Green Agenda"
            paragraph=" Heath, Safety & Environment: The three pillars to ensure safe communities and happy stakeholders."
          />
          <MainboxText
            image={ManImg}
            text="IndianOil's Green Agenda"
            paragraph=" Heath, Safety & Environment: The three pillars to ensure safe communities and happy stakeholders."
          />
          <MainboxText
            image={ManImg}
            text="IndianOil's Green Agenda"
            paragraph=" Heath, Safety & Environment: The three pillars to ensure safe communities and happy stakeholders."
          />
          <MainboxText
            image={ManImg}
            text="IndianOil's Green Agenda"
            paragraph=" Heath, Safety & Environment: The three pillars to ensure safe communities and happy stakeholders."
          />
        </OwlCarousel>
      </div>
    </div>
  );
};
export default Mainbox;
