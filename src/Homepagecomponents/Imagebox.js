import React, { useState } from "react";
import Style from "./imagebox.module.scss";
import Imageboxtext from "./Imagebox-text";

const Imagebox = () => {
  const [show, setShow] = useState(true);
  const ShowDiv = () => {
    setShow(!show);
  };
  return (
    <div className={Style.imageboxtop}>
      {show && (
        <div className={Style.imagebox}>
          <div className={Style.imageboxheading}>
            <h2>
              Discover <span>More</span>
            </h2>
          </div>

          <Imageboxtext />
        </div>
      )}
      <button onClick={ShowDiv}>Show/hide</button>
    </div>
  );
};
export default Imagebox;
