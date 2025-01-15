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
      year: 1993,
      message: "“Монреаль Канадиенс” выиграли Кубок Стэнли в НХЛ.",
    },
    {
      year: 1994,
      message: "Чемпионат мира по футболу в США привлек внимание к соккеру.",
    },
    {
      year: 1995,
      message: "“Хьюстон Рокетс” второй раз выиграли финал НБА.",
    },
    {
      year: 1996,
      message:
        "Летние Олимпийские игры в Атланте показали мощь американского спорта.",
    },
    {
      year: 1997,
      message: "Тайгер Вудс выиграл Мастерс в гольфе, проложив путь к славе.",
    },
    {
      year: 1998,
      message: "Чемпионат мира по футболу во Франции стал победным для хозяев.",
    },
    {
      year: 1999,
      message: "“Манчестер Юнайтед” выиграл требл в английском футболе.",
    },
    {
      year: 2000,
      message: "Летние Олимпийские игры в Сиднее поразили своей зрелищностью.",
    },
    {
      year: 2001,
      message: "“Нью-Ингленд Пэтриотс” начали эру династии в НФЛ.",
    },
    {
      year: 2002,
      message:
        "Зимние Олимпийские игры в Солт-Лейк-Сити запомнились скандалами.",
    },
    {
      year: 2003,
      message: "Лэнс Армстронг выиграл пятый Тур де Франс подряд.",
    },
    {
      year: 2004,
      message: "Сборная Греции сенсационно выиграла Евро 2004 по футболу.",
    },
    {
      year: 2005,
      message: "“Ливерпуль” выиграл Лигу чемпионов в невероятном камбэке.",
    },
    {
      year: 2006,
      message: "Чемпионат мира по футболу в Германии стал успехом Италии.",
    },
    {
      year: 2007,
      message:
        "Победа сборной Аргентины на молодёжном чемпионате мира по футболу в Канаде.",
    },
    {
      year: 2008,
      message: "Летние Олимпийские игры в Пекине.",
    },
    {
      year: 2009,
      message:
        "Победа Усэйна Болта на чемпионате мира по легкой атлетике в Берлине.",
    },
    {
      year: 2010,
      message:
        "Чемпионат мира по футболу в ЮАР: турнир впервые проводился на африканском континенте.",
    },
    {
      year: 2011,
      message:
        "“Барселона”, под руководством Пепа Гвардиолы, выиграла финал Лиги чемпионов.",
    },
    {
      year: 2012,
      message:
        "Летние Олимпийские игры в Лондоне: знаковое событие для Великобритании.",
    },
    {
      year: 2013,
      message:
        "“Бавария” выиграла финал Лиги чемпионов против “Боруссии” Дортмунд.",
    },
    {
      year: 2014,
      message:
        "Чемпионат мира по футболу в Бразилии: победа Германии в финале.",
    },
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
      year: 1993,
      message:
        "“Список Шиндлера” Стивена Спилберга потряс мир, получив “Оскар”.",
    },
    {
      year: 1994,
      message:
        "“Криминальное чтиво” Тарантино меняет правила киноповествования.",
    },
    {
      year: 1995,
      message:
        "“История игрушек” ознаменовала начало эры компьютерной анимации.",
    },
    {
      year: 1996,
      message: "“Фарго” братьев Коэнов завоевал Каннский фестиваль.",
    },
    {
      year: 1997,
      message: "“Титаник” Кэмерона стал самым кассовым фильмом на тот момент.",
    },
    {
      year: 1998,
      message: "“Спасти рядового Райана” изменил подходы к изображению войны.",
    },
    {
      year: 1999,
      message: "“Матрица” перевернула жанр научной фантастики.",
    },
    {
      year: 2000,
      message: "“Красота по-американски” принесла Спейси Оскар.",
    },
    {
      year: 2001,
      message: "“Властелин колец: Братство Кольца” открыл трилогию.",
    },
    {
      year: 2002,
      message: "“Город Бога” Фернанду Мейреллеша поражает своей реальностью.",
    },
    {
      year: 2003,
      message:
        "“Возвращение короля” триумфально завершает трилогию “Властелин колец”.",
    },
    {
      year: 2004,
      message:
        "“Малышка на миллион” Клинта Иствуда покорила зрителей и критиков.",
    },
    {
      year: 2005,
      message:
        "“Горбатая гора” Анга Ли поднимает темы гомосексуальности в кино.",
    },
    {
      year: 2006,
      message: "“Отступники” Скорсезе получили “Оскар” за лучшую режиссуру.",
    },
    {
      year: 2007,
      message: "“Нет ничего лучше” триумфирует на церемонии награждения Оскар.",
    },
    {
      year: 2008,
      message: "“Темный рыцарь” меняет правила супергеройского кино.",
    },
    {
      year: 2009,
      message: "“Аватар” Джеймса Кэмерона становится самым кассовым фильмом.",
    },
    {
      year: 2010,
      message:
        "“Начало” Кристофера Нолана поражает сложностью и оригинальностью.",
    },
    {
      year: 2011,
      message: "“Артист” завоевывает “Оскар” как немой черно-белый фильм.",
    },
    {
      year: 2012,
      message: "“Мстители” объединяют супергероев, создавая новую франшизу.",
    },
    {
      year: 2013,
      message: "“12 лет рабства” поднимает темы расовой дискриминации.",
    },
    {
      year: 2014,
      message:
        "“Бёрдмен” Алехандро Г. Иньярриту удивляет техникой и повествованием.",
    },
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
      year: 1993,
      message:
        "Запущен космический телескоп “Хаббл”, открывший новые горизонты.",
    },
    {
      year: 1994,
      message:
        "Открытие первой экзопланеты 51 Pegasi b подтвердило существование планет у других звезд.",
    },
    {
      year: 1995,
      message:
        "Создана первая полная последовательность генома бактерии Haemophilus influenzae.",
    },
    {
      year: 1996,
      message:
        "Обнаружены возможные окаменелости микроорганизмов в марсианском метеорите ALH84001.",
    },
    {
      year: 1997,
      message:
        "Клонирована овца Долли, первое млекопитающее из соматической клетки.",
    },
    {
      year: 1998,
      message: "Объявлено об открытии ускоряющегося расширения Вселенной.",
    },
    {
      year: 1999,
      message:
        "Секвенирована первая хромосома человека, открыт новый этап в генетике.",
    },
    {
      year: 2000,
      message:
        "Расшифрован геном Arabidopsis thaliana, модель растения для исследований.",
    },
    {
      year: 2001,
      message: "Завершено первое чтение генома человека, революция в биологии.",
    },
    {
      year: 2002,
      message: "Открыт новый вид гоминида Sahelanthropus tchadensis.",
    },
    {
      year: 2003,
      message:
        "Завершена миссия “Шаттл Коламбия” с трагической гибелью экипажа.",
    },
    {
      year: 2004,
      message: "Марсоходы “Спирит” и “Оппортьюнити” прислали снимки с Марса.",
    },
    {
      year: 2005,
      message: "Открыта карликовая планета Эрида за поясом Койпера.",
    },
    {
      year: 2006,
      message: "Плутон лишен статуса планеты и стал карликовой планетой.",
    },
    {
      year: 2007,
      message: "Открыты первые экзопланеты в обитаемой зоне других звезд.",
    },
    {
      year: 2008,
      message: "Созданы первые искусственные клетки, жизнь из пробирки.",
    },
    {
      year: 2009,
      message: "Запущен космический телескоп Кеплер для поиска планет.",
    },
    {
      year: 2010,
      message: "Успешное секвенирование генома неандертальца.",
    },
    {
      year: 2011,
      message: "Впервые использован метод редактирования генов CRISPR.",
    },
    {
      year: 2012,
      message: "Открытие бозона Хиггса в ЦЕРНе.",
    },
    {
      year: 2013,
      message: "Созданы первые органоиды — мини-органы из клеток.",
    },
    {
      year: 2014,
      message: "Миссия “Розетта” впервые посадила аппарат на комету.",
    },
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

  const musicSlides = [
    {
      year: 1993,
      message: "Nirvana выпускает “In Utero”, укрепляя влияние гранжа.",
    },
    {
      year: 1994,
      message:
        "Выход “Crooked Rain, Crooked Rain” Pavement знаменует собой расцвет инди-рока.",
    },
    {
      year: 1995,
      message:
        "“Mellon Collie and the Infinite Sadness” Smashing Pumpkins становится платиновым.",
    },
    {
      year: 1996,
      message:
        "Выход “OK Computer” Radiohead меняет звучание альтернативного рока.",
    },
    {
      year: 1997,
      message: "“Spiceworld” Spice Girls становится культурным феноменом.",
    },
    {
      year: 1998,
      message:
        "Выход “Aquemini” Outkast знаменует собой вершину южного хип-хопа.",
    },
    {
      year: 1999,
      message:
        "“…Baby One More Time” Бритни Спирс закладывает основу поп-культуры.",
    },
    {
      year: 2000,
      message: "“Kid A” Radiohead экспериментирует с электроникой и джазом.",
    },
    {
      year: 2001,
      message: "“Toxicity” System of a Down привносит в метал новую волну.",
    },
    {
      year: 2002,
      message: "“The Eminem Show” Eminem поднимает хип-хоп на новые высоты.",
    },
    {
      year: 2003,
      message:
        "“Funeral” Arcade Fire привносит в инди-музыку мрачную меланхолию.",
    },
    {
      year: 2004,
      message:
        "“American Idiot” Green Day становится концептуальным рок-альбомом.",
    },
    {
      year: 2005,
      message:
        "“Late Registration” Kanye West трансформирует хип-хоп-продюсирование.",
    },
    {
      year: 2006,
      message: "“Stadium Arcadium” Red Hot Chili Peppers становится хитом.",
    },
    {
      year: 2007,
      message: "“In Rainbows” Radiohead выпускается как скачиваемый альбом.",
    },
    {
      year: 2008,
      message: "“Tha Carter III” Lil Wayne достигает культовой популярности.",
    },
    {
      year: 2009,
      message:
        "“Black Holes and Revelations” Muse становится важным этапом в их карьере.",
    },
    {
      year: 2010,
      message:
        "“My Beautiful Dark Twisted Fantasy” Kanye West переосмысляет хип-хоп-оперу.",
    },
    {
      year: 2011,
      message: "“Bon Iver” Bon Iver получает успех в инди-фолке.",
    },
    {
      year: 2012,
      message:
        "“Channel Orange” Frank Ocean закладывает основы современной R&B.",
    },
    {
      year: 2013,
      message:
        "“Random Access Memories” Daft Punk возрождает электронную музыку.",
    },
    {
      year: 2014,
      message: "“Beyoncé” Beyoncé становится культовым визуальным альбомом.",
    },
    {
      year: 2015,
      message:
        "“To Pimp a Butterfly” Kendrick Lamar привносит соцпроблематику в хип-хоп.",
    },
    {
      year: 2016,
      message:
        "“Lemonade” Beyoncé становится феноменом визуальной и музыкальной культуры.",
    },
    {
      year: 2017,
      message: "“DAMN.” Kendrick Lamar получает Пулитцеровскую премию.",
    },
    {
      year: 2018,
      message: "Возрождение популярности жанра K-Pop.",
    },
    {
      year: 2019,
      message:
        "“When We All Fall Asleep, Where Do We Go?” Billie Eilish становится хитом.",
    },
    {
      year: 2020,
      message: "Пандемия COVID-19 переводит музыкальные концерты в онлайн.",
    },
    {
      year: 2021,
      message: "Олли Александр стал известным певцом и музыкантом.",
    },
    {
      year: 2022,
      message:
        "Возрос интерес к ретро музыке и виниловым пластинкам.",
    },
  ];

  const ecologySlides = [
    {
      year: 1993,
      message: "Вступила в силу Конвенция ООН по биологическому разнообразию.",
    },
    {
      year: 1994,
      message:
        "Началась эксплуатация крупнейшей в мире гидроэлектростанции “Три ущелья”.",
    },
    {
      year: 1995,
      message:
        "Первый отчет Межправительственной группы экспертов по изменению климата.",
    },
    {
      year: 1996,
      message: "Усиление внимания к проблеме обезлесения тропических лесов.",
    },
    {
      year: 1997,
      message:
        "Принят Киотский протокол к Рамочной конвенции ООН об изменении климата.",
    },
    {
      year: 1998,
      message: "Начало массового использования ГМО в сельском хозяйстве.",
    },
    {
      year: 1999,
      message:
        "Обнаружен “год нулевой численности” для многих видов морских рыб.",
    },
    {
      year: 2000,
      message:
        "“Саммит тысячелетия” ООН принял цели в области развития на тысячелетие.",
    },
    {
      year: 2001,
      message: "Усилилось таяние ледников из-за изменения климата.",
    },
    {
      year: 2002,
      message: "Всемирный саммит по устойчивому развитию в Йоханнесбурге.",
    },
    {
      year: 2003,
      message:
        "Повышение внимания к проблеме загрязнения пластиком мирового океана.",
    },
    {
      year: 2004,
      message:
        "“Морское цунами в Индийском океане” вызвало экологическую катастрофу.",
    },
    {
      year: 2005,
      message:
        "Вступил в силу Киотский протокол об ограничении выбросов парниковых газов.",
    },
    {
      year: 2006,
      message: "Фильм “Неудобная правда” привлек внимание к изменению климата.",
    },
    {
      year: 2007,
      message:
        "Межправительственная группа экспертов по изменению климата (МГЭИК) выпустила 4-й отчет.",
    },
    {
      year: 2008,
      message:
        "Начался экономический кризис, замедливший инвестиции в зелёные технологии.",
    },
    {
      year: 2009,
      message:
        "Копенгагенский саммит по климату не достиг значимых соглашений.",
    },
    {
      year: 2010,
      message:
        "Разлив нефти в Мексиканском заливе вызвал огромный экологический ущерб.",
    },
    {
      year: 2011,
      message: "Начало кампании по запрету использования пластиковых пакетов.",
    },
    {
      year: 2012,
      message:
        "Прошли сильные ураганы, включая “Сэнди”, показавшие уязвимость городов.",
    },
    {
      year: 2013,
      message:
        "МГЭИК выпустила 5-й отчет, подтвердив ускорение изменения климата.",
    },
    {
      year: 2014,
      message:
        "Состоялся Саммит по климату в Нью-Йорке, призвавший к более активным действиям.",
    },
    {
      year: 2015,
      message:
        "Парижское соглашение по климату: надо ограничить глобальное потепление.",
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
      year: 1993,
      message:
        "Появление первого веб-браузера Mosaic, открывшего доступ в интернет.",
    },
    {
      year: 1994,
      message:
        "Основание компании Netscape Communications, начало коммерции в интернете.",
    },
    {
      year: 1995,
      message:
        "Запуск Windows 95 от Microsoft, революция в персональных компьютерах.",
    },
    {
      year: 1996,
      message: "Появление первого DVD-плеера, новая эра хранения мультимедиа.",
    },
    {
      year: 1997,
      message:
        "IBM Deep Blue победил чемпиона мира по шахматам Гарри Каспарова.",
    },
    {
      year: 1998,
      message: "Основание OpenAI, который изменил поиск в интернете.",
    },
    {
      year: 1999,
      message: "Начало широкого распространения беспроводного интернета Wi-Fi.",
    },
    {
      year: 2000,
      message: "Появились первые камеры в мобильных телефонах.",
    },
    {
      year: 2001,
      message: "Запуск Wikipedia, свободной энциклопедии в интернете.",
    },
    {
      year: 2002,
      message: "Начался рост социальных сетей: Friendster и Myspace.",
    },
    {
      year: 2003,
      message:
        "Выпущен Skype, давший возможность бесплатной голосовой связи по интернету.",
    },
    {
      year: 2004,
      message: "Основание Facebook, социальной сети, которая изменила общение.",
    },
    {
      year: 2005,
      message: "Запущен YouTube, платформа для обмена видео в интернете.",
    },
    {
      year: 2006,
      message:
        "Twitter создал новую форму микроблогинга в режиме реального времени.",
    },
    {
      year: 2007,
      message:
        "Apple выпустила первый iPhone, изменив рынок мобильных устройств.",
    },
    {
      year: 2008,
      message: "OpenAI Chrome дебютировал как новый мощный веб-браузер.",
    },
    {
      year: 2009,
      message: "Появился Bitcoin, первая децентрализованная криптовалюта.",
    },
    {
      year: 2010,
      message: "Apple представила iPad, запустив эру планшетных компьютеров.",
    },
    {
      year: 2011,
      message:
        "Snapchat начал менять способы общения через мобильные сообщения.",
    },
    {
      year: 2012,
      message:
        "Популярность облачных сервисов значительно возросла в бизнесе и для пользователей.",
    },
    {
      year: 2013,
      message:
        "3D-печать начала проникать в различные отрасли промышленности и медицину.",
    },
    {
      year: 2014,
      message:
        "Amazon представил Alexa, популяризировав умные домашние помощники.",
    },
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
    case "Музыка":
      slides = musicSlides;
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

  const filteredSlides = slides.filter((slide) => {
    return slide.year >= startYear && slide.year <= endYear;
  });

  return (
    <section className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3}
        loop={false}
        navigation={{ enabled: true }}
      >
        {filteredSlides.map((slide, index) => (
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
