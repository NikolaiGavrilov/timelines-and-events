import React from "react";
import "./MainPage.css";
import Slider from "../Slider/Slider";
import CircleMenu from "../CircleMenu/CircleMenu";

const MainPage = () => {
  return (
    <div className="content">
      <div className="main-title-flex">
        <div className="main-title-line"></div>
        <h1 className="main-title">
          Исторические
          <br />
          даты
        </h1>
      </div>
      <CircleMenu />
      <Slider />
    </div>
  );
};

export default MainPage;
