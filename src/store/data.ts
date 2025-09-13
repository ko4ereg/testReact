export interface DateItem {
  start: number;
  end: number;
}
export interface SlideItem {
  year: number;
  event: string;
}

export interface SlideGroup {
  category: string; // Категория (например, "Кино")
  slides: SlideItem[]; // События в этой группе
}

export const dates: DateItem[] = [
  {
    start: 1987,
    end: 1992,
  },
  {
    start: 1993,
    end: 1998,
  },
  {
    start: 1999,
    end: 2004,
  },
  { start: 2005, end: 2010 },
  { start: 2011, end: 2016 },
  { start: 2017, end: 2022 },
];

export const slides: SlideGroup[] = [
  {
    category: "Музыка",  
    slides: [
      { year: 1987, event: "Выход альбома 'Bad' Майкла Джексона" },
      { year: 1988, event: "Появление первого рэп-хита в чартах Billboard" },
      { year: 1989, event: "Мадонна выпускает альбом 'Like a Prayer'" },
      { year: 1991, event: "Выход 'Nevermind' группы Nirvana — взрыв гранжа" },
      { year: 1992, event: "Альбом 'The Chronic' Dr. Dre" },
    ],
  },
  {
    category: "Кино", 
    slides: [
      { year: 1993, event: "Премьера фильма 'Парк юрского периода'" },
      { year: 1994, event: "Выход 'Криминального чтива' Квентина Тарантино" },
      { year: 1995, event: "Запуск студии Pixar — фильм 'История игрушек'" },
      { year: 1997, event: "Фильм 'Титаник' становится рекордсменом проката" },
      { year: 1998, event: "Выход 'Спасти рядового Райана'" },
    ],
  },
  {
    category: "Технологии",  
    slides: [
      { year: 1999, event: "Запуск сервиса Napster — начало эпохи файлообмена" },
      { year: 2000, event: "Бум доткомов и их крах" },
      { year: 2001, event: "Выход Windows XP" },
      { year: 2003, event: "Запуск iTunes Store от Apple" },
      { year: 2004, event: "Основание Facebook" },
    ],
  },
  {
    category: "Кино", 
    slides: [
      { year: 2005, event: "Выход фильма 'Бэтмен: Начало'" },
      { year: 2006, event: "Премьера мультфильма 'Тачки'" },
      { year: 2007, event: "Выход 'Трансформеров'" },
      { year: 2008, event: "Фильм 'Тёмный рыцарь' — мировой успех" },
      { year: 2009, event: "Премьера 'Аватара'" },
      { year: 2010, event: "Выход фильма 'Начало' (Inception)" },
    ],
  },
  {
    category: "Спорт",  
    slides: [
      { year: 2012, event: "Олимпийские игры в Лондоне" },
      { year: 2013, event: "Лионель Месси забивает рекордные 91 гол за год" },
      { year: 2014, event: "Чемпионат мира по футболу в Бразилии" },
      { year: 2015, event: "Флойд Мейвезер побеждает Мэнни Пакьяо — бой века" },
      { year: 2016, event: "Олимпийские игры в Рио-де-Жанейро" },
    ],
  },
  {
    category: "Наука", 
    slides: [
      { year: 2017, event: "Учёные фиксируют первую гравитационную волну от столкновения нейтронных звёзд" },
      { year: 2018, event: "Запуск телескопа TESS для поиска экзопланет" },
      { year: 2019, event: "Получено первое изображение чёрной дыры" },
      { year: 2020, event: "Начало пандемии COVID-19" },
      { year: 2021, event: "Запуск телескопа Джеймса Уэбба" },
      { year: 2022, event: "NASA успешно сталкивает зонд DART с астероидом" },
    ],
  },
];
