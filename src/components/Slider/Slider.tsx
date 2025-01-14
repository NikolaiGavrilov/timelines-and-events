import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./Slider.css";

const Slider = () => {
  const slides = [
    {
      year: 2015,
      message:
        "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
    },
    {
      year: 2016,
      message:
        "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
    },
    {
      year: 2017,
      message:
        "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
    },
    {
      year: 2018,
      message:
        "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
    },
    {
      year: 2019,
      message:
        "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
    },
    {
      year: 2020,
      message:
        "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
    },
    {
        year: 2021,
        message:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        year: 2022,
        message:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
  ];

  return (
    <section className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
        loop={false}
        navigation={{ enabled: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider-content">
              <h1 className="slider-heading">{slide.year}</h1>
              <p className="slider-text">{slide.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
