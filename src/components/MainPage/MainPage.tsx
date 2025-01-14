import React, { useState } from "react";
import "./MainPage.css";
import Slider from "../Slider/Slider";
import CircleMenu from "../CircleMenu/CircleMenu";

const MainPage = () => {
  const startYear = 2015;
  const endYear = 2023;
    const [selectedCategory, setSelectedCategory] = useState<string | null>("Спорт");

   const handleCategoryChange = (category: string | null) => {
     setSelectedCategory(category);
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
      <Slider
        startYear={startYear}
        endYear={endYear}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default MainPage;