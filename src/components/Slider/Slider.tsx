import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./Slider.css";

interface SliderProps {
  startYear: number;
  endYear: number;
  selectedCategory: string | null;
}

const Slider: React.FC<SliderProps> = ({
  startYear,
  endYear,
  selectedCategory,
}) => {
  const sportSlides = [
    {
      year: 2015,
      message:
        "Чемпионат мира по футболу среди женщин в Канаде: сборная США выиграла чемпионат.",
    },
    {
      year: 2016,
      message:
        "Летние Олимпийские игры в Рио-де-Жанейро: эти игры были первыми в Южной Америке.",
    },
    {
      year: 2017,
      message:
        "Чемпионат мира по легкой атлетике в Лондоне: прощальный турнир для бегуна Усэйна Болта.",
    },
    {
      year: 2018,
      message:
        "Чемпионат мира по футболу в России: Франция выиграла чемпионат, победив Хорватию.",
    },
    {
      year: 2019,
      message:
        "Чемпионат мира по баскетболу в Китае: Сборная Испании стала чемпионом.",
    },
    {
      year: 2020,
      message:
        "Пандемия COVID-19 отменила или перенесла большинство спортивных событий.",
    },
    {
      year: 2021,
      message:
        "Летние Олимпийские игры в Токио: перенесенные с 2020 года из-за пандемии.",
    },
    {
      year: 2022,
      message: "Чемпионат мира по футболу в Катаре.",
    },
  ];

  const cinemaSlides = [
    {
      year: 2015,
      message:
        "Выход фильма “Безумный Макс: Дорога ярости”: революция в экшн-кино и признание критиков.",
    },
    {
      year: 2016,
      message:
        "Триумф фильма “Ла-Ла Ленд”: этот мюзикл стал одним из самых обсуждаемых фильмов года.",
    },
    {
      year: 2017,
      message:
        "Скандал вокруг Харви Вайнштейна и движение #MeToo, осуждение харассмента в киноиндустрии.",
    },
    {
      year: 2018,
      message:
        "Выход фильма “Черная Пантера” - кассовый хит и фильм с сильным африканским влиянием.",
    },
    {
      year: 2019,
      message:
        "Завершение саги “Мстители” фильмом “Мстители: Финал”: этот фильм установил множество рекордов.",
    },
    {
      year: 2020,
      message:
        "Пандемия COVID-19: закрытие кинотеатров привело к росту стриминговых платформ.",
    },
    {
      year: 2021,
      message:
        "Победа Хлои Чжао на “Оскаре” за фильм “Земля кочевников” за лучшую режиссуру.",
    },
    {
      year: 2022,
      message:
        "Выход фильма “Всё везде и сразу”: этот фильм стал неожиданным хитом.",
    },
  ];

  const scienceSlides = [
    {
      year: 2015,
      message:
        "Подтверждение существования гравитационных волн обсерваторией LIGO",
    },
    {
      year: 2016,
      message: "Открытие планеты Проксима Центавра b.",
    },
    {
      year: 2017,
      message: "Первое успешное редактирование генома человеческого эмбриона.",
    },
    {
      year: 2018,
      message: "Запуск космического телескопа Джеймс Уэбб.",
    },
    {
      year: 2019,
      message:
        "Коллаборация Event Horizon Telescope представила 1-ю фотографию черной дыры.",
    },
    {
      year: 2020,
      message: "Успешная разработка и внедрение вакцин против COVID-19.",
    },
    {
      year: 2021,
      message: "Посадка марсохода Perseverance на Марс.",
    },
    {
      year: 2022,
      message:
        "Успешное испытание термоядерного синтеза с чистым приростом энергии.",
    },
  ];

  const artSlides = [
    {
      year: 2015,
      message:
        "Выход романа “Между миром и мной” Та-Нехаси Коутса про расовые отношения в США.",
    },
    {
      year: 2016,
      message:
        "Рост популярности интерактивных инсталляций: больше художников стали использовать эти технологии.",
    },
    {
      year: 2017,
      message: "Рост популярности латиноамериканской музыки.",
    },
    {
      year: 2018,
      message: "Нобелевская премия по литературе Ольге Токарчук.",
    },
    {
      year: 2019,
      message:
        "Биеннале в Венеции: Выставка “May You Live In Interesting Times”.",
    },
    {
      year: 2020,
      message: "Рост цифрового искусства и NFT (невзаимозаменяемых токенов).",
    },
    {
      year: 2021,
      message:
        "Выход альбома “30” Адель: Возвращение Адель на сцену с новым альбомом.",
    },
    {
      year: 2022,
      message:
        "Выход альбома “Renaissance” Бейонсе: эволюция Бейонсе как артистки.",
    },
  ];

  const ecologySlides = [
    {
      year: 2015,
      message:
        "экология 20Парижское соглашение по климату: надо ограничить глобальное потепление.",
    },
    {
      year: 2016,
      message:
        "Ученые начали активно изучать и освещать проблемы загрязнения микропластиком.",
    },
    {
      year: 2017,
      message:
        "Выход США из Парижского соглашения как удар по усилиям в борьбе с изменением климата.",
    },
    {
      year: 2018,
      message: "Доклад МГЭИК о последствиях глобального потепления на 1,5°C.",
    },
    {
      year: 2019,
      message: "Массовые климатические протесты и движение Fridays for Future.",
    },
    {
      year: 2020,
      message:
        "Масштабные лесные пожары в Австралии, Сибири и других регионах.",
    },
    {
      year: 2021,
      message:
        "Климатическая конференция COP26 в Глазго по борьбе с изменениями климата.",
    },
    {
      year: 2022,
      message: "Глобальный договор по биоразнообразию в Монреале (COP15).",
    },
  ];

  const techSlides = [
    {
      year: 2015,
      message:
        "Компании начали активно тестировать и внедрять технологии автономного вождения.",
    },
    {
      year: 2016,
      message:
        "Активное использование голосовых помощников Siri, OpenAI Assistant и Alexa.",
    },
    {
      year: 2017,
      message:
        "Распространение технологии блокчейн в сфере криптовалют и не только.",
    },
    {
      year: 2018,
      message:
        "ИИ стал использоваться в медицине, финансах, транспорте, и др. сферах.",
    },
    {
      year: 2019,
      message:
        "Началось массовое внедрение сетей 5G, новые возможности для передачи данных.",
    },
    {
      year: 2020,
      message:
        "COVID показал важность онлайн-платформ, электронной коммерции и удаленной работы.",
    },
    {
      year: 2021,
      message:
        "Технологии виртуальной и дополненной реальности стали более доступными и популярными.",
    },
    {
      year: 2022,
      message: "Развитие генеративного ИИ, такого как DALL-E 2 и ChatGPT.",
    },
  ];

  let slides = [];
  switch (selectedCategory) {
    case "Спорт":
      slides = sportSlides;
      break;
    case "Кино":
      slides = cinemaSlides;
      break;
    case "Наука":
      slides = scienceSlides;
      break;
    case "Искусство":
      slides = artSlides;
      break;
    case "Технологии и ИТ":
      slides = techSlides;
      break;
    case "Экология":
      slides = ecologySlides;
      break;
    default:
      slides = sportSlides;
      break;
  }

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
