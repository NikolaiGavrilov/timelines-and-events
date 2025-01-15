import React, { useState, useEffect, useRef } from "react";
import "./CircleMenu.scss";

interface CircleMenuProps {
  startYear: number;
  endYear: number;
  onCategoryChange: (category: string | null) => void;
}

const CircleMenu: React.FC<CircleMenuProps> = ({
  startYear,
  endYear,
  onCategoryChange,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>("Спорт");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const labels = [
    "Наука",
    "Кино",
    "Спорт",
    "Музыка",
    "Технологии и ИТ",
    "Экология",
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

  const handleItemClick = (label: string, index: number) => {
    setSelectedLabel(label);
    onCategoryChange(label);
  };

  return (
    <div className="circle-container">
      <div className="circle-years">
        <p className="circle-start-year">{startYear}</p>
        <p className="circle-end-year">{endYear}</p>
      </div>
      <div className="circle-menu" ref={menuRef}>
        {labels.map((label, index) => (
          <div
            key={index}
            className={`menu-item ${
              selectedLabel === label ? "selected" : ""
            } ${hoveredIndex === index ? "hovered" : ""}`}
            data-label={label}
            onClick={() => handleItemClick(label, index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {(hoveredIndex === index || selectedLabel === label) && (
              <span className="menu-item-index">{index + 1}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleMenu;
