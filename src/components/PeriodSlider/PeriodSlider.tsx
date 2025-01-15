import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./PeriodSlider.scss";

interface TimePeriod {
  label: string;
  startYear: number;
  endYear: number;
}

interface PeriodSliderProps {
  onTimePeriodChange: (startYear: number, endYear: number) => void;
}

const PeriodSlider: React.FC<PeriodSliderProps> = ({ onTimePeriodChange }) => {
  const timePeriods: TimePeriod[] = [
    { label: "04/04", startYear: 2015, endYear: 2022 },
    { label: "03/04", startYear: 2007, endYear: 2014 },
    { label: "02/04", startYear: 2000, endYear: 2006 },
    { label: "01/04", startYear: 1993, endYear: 1999 },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    const newIndex = swiper.activeIndex;
    setActiveSlide(newIndex);
    onTimePeriodChange(
      timePeriods[newIndex].startYear,
      timePeriods[newIndex].endYear
    );
  };

  return (
    <div className="time-period-swiper">
      <Swiper
        slidesPerView={1}
        navigation={true}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
      >
        {timePeriods.map((period, index) => (
          <SwiperSlide key={index}>
            <div className="time-period-slide">
              <p className="time-period-label">{period.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PeriodSlider;
