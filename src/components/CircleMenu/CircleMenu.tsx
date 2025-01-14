import React, { useState, useEffect, useRef } from "react";
import "./CircleMenu.css";

const CircleMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>("Спорт");
  const labels = [
    "Наука",
    "Кино",
    "Спорт",
    "Литература",
    "Искусство",
    "Технологии",
  ];

  useEffect(() => {
    if (menuRef.current) {
      const items = Array.from(menuRef.current.children) as HTMLDivElement[];
      const totalItems = items.length;
      const radius = menuRef.current.offsetWidth / 2;
      const centerX = menuRef.current.offsetWidth / 2;
      const centerY = menuRef.current.offsetHeight / 2;

      items.forEach((item, index) => {
        const angle = (index / totalItems) * 2 * Math.PI - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
      });
    }
  }, []);

  const handleItemClick = (label: string) => {
    setSelectedLabel(label);
  };

  return (
    <div className="">
      <div className="circle-years">
        <p className="circle-start-year">2015</p>
        <p className="circle-end-year">2022</p>
      </div>
      <div className="circle-menu" ref={menuRef}>
        {labels.map((label, index) => (
          <div
            key={index}
            className={`menu-item ${selectedLabel === label ? "selected" : ""}`}
            data-label={label}
            onClick={() => handleItemClick(label)}
          />
        ))}
      </div>
    </div>
  );
};

export default CircleMenu;
