import React, { useState } from "react";
import "./MainPage.scss";
import Slider from "../Slider/Slider";
import CircleMenu from "../CircleMenu/CircleMenu";
import PeriodSlider from "../PeriodSlider/PeriodSlider";

const MainPage = () => {
  const [startYear, setStartYear] = useState(2015);
  const [endYear, setEndYear] = useState(2022);
  const [selectedCategory, setSelectedCategory] = useState<string | null>("Спорт");

   const handleCategoryChange = (category: string | null) => {
     setSelectedCategory(category);
   };

  const handleTimePeriodChange = (startYear: number, endYear: number) => {
      setStartYear(startYear);
      setEndYear(endYear);
  };

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
        <CircleMenu
          startYear={startYear}
          endYear={endYear}
          onCategoryChange={handleCategoryChange}
        />
        <PeriodSlider onTimePeriodChange={handleTimePeriodChange}/>
      <Slider
        startYear={startYear}
        endYear={endYear}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default MainPage;