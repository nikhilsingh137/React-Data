import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Homepagecomponents/Header";
import Banner from "./Homepagecomponents/Banner";
import Imagebox from "./Homepagecomponents/Imagebox";
import Content from "./Homepagecomponents/Content";
import Photo from "./Homepagecomponents/Photobox";
import Mainbox from "./Homepagecomponents/Mainbox";
import SocialSite from "./Homepagecomponents/SocialSite";
import Footer from "./Homepagecomponents/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Imagebox />
    <Content />
    <Photo />
    <Mainbox />
    <SocialSite />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
