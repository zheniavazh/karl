import { categories } from "./categories.api";

const goods = [
  {
    id: 1,
    category: categories.blouses,
    name: "Рубашка",
    price: 20400,
  },
  {
    id: 2,
    category: categories.blouses,
    name: "Блуза",
    price: 32500,
  },
  {
    id: 3,
    category: categories.blouses,
    name: "Блуза",
    price: 24100,
  },
  {
    id: 4,
    category: categories.pants,
    name: "Брюки",
    price: 20300,
  },
  {
    id: 5,
    category: categories.pants,
    name: "Брюки",
    price: 17900,
  },
  {
    id: 6,
    category: categories.pants,
    name: "Брюки",
    price: 18800,
  },
  {
    id: 7,
    category: categories.outerwear,
    name: "Пальто",
    price: 55900,
  },
  {
    id: 8,
    category: categories.outerwear,
    name: "Куртка кожаная",
    price: 48700,
  },
  {
    id: 9,
    category: categories.outerwear,
    name: "Пальто",
    price: 58500,
  },
  {
    id: 10,
    category: categories.underwear,
    name: "Бюстгальтер",
    price: 4900,
  },
  {
    id: 11,
    category: categories.underwear,
    name: "Трусы",
    price: 2900,
  },
  {
    id: 12,
    category: categories.underwear,
    name: "Боди",
    price: 9800,
  },
  {
    id: 13,
    category: categories.dresses,
    name: "Платье",
    price: 21300,
  },
  {
    id: 14,
    category: categories.dresses,
    name: "Платье",
    price: 30900,
  },
  {
    id: 15,
    category: categories.dresses,
    name: "Платье",
    price: 36900,
  },
  {
    id: 16,
    category: categories.dresses,
    name: "Платье",
    price: 29000,
  },
  {
    id: 17,
    category: categories.dresses,
    name: "Платье",
    price: 43200,
  },
  {
    id: 18,
    category: categories.dresses,
    name: "Платье",
    price: 22300,
  },
  {
    id: 19,
    category: categories.hoodies,
    name: "Свитшот",
    price: 17200,
  },
  {
    id: 20,
    category: categories.hoodies,
    name: "Свитшот",
    price: 17200,
  },
  {
    id: 21,
    category: categories.hoodies,
    name: "Свитшот",
    price: 17500,
  },
  {
    id: 22,
    category: categories.hoodies,
    name: "Свитшот",
    price: 25700,
  },
  {
    id: 23,
    category: categories.hoodies,
    name: "Свитшот",
    price: 15600,
  },
  {
    id: 24,
    category: categories.hoodies,
    name: "Свитшот",
    price: 20300,
  },
  {
    id: 25,
    category: categories.skirts,
    name: "Юбка",
    price: 22300,
  },
  {
    id: 26,
    category: categories.skirts,
    name: "Юбка",
    price: 29200,
  },
  {
    id: 27,
    category: categories.skirts,
    name: "Юбка",
    price: 18800,
  },
  {
    id: 28,
    category: categories.boots,
    name: "Ботинки",
    price: 25000,
  },
  {
    id: 29,
    category: categories.boots,
    name: "Ботинки",
    price: 27000,
  },
  {
    id: 30,
    category: categories.boots,
    name: "Ботинки",
    price: 25000,
  },
  {
    id: 31,
    category: categories.sneakers,
    name: "Кроссовки",
    price: 25900,
  },
  {
    id: 32,
    category: categories.sneakers,
    name: "Кроссовки",
    price: 19600,
  },
  {
    id: 33,
    category: categories.sneakers,
    name: "Кроссовки",
    price: 19600,
  },
  {
    id: 34,
    category: categories.bags,
    name: "Сумка",
    price: 24100,
  },
  {
    id: 35,
    category: categories.bags,
    name: "Сумка",
    price: 7200,
  },
  {
    id: 36,
    category: categories.bags,
    name: "Сумка",
    price: 22600,
  },
  {
    id: 37,
    category: categories.bags,
    name: "Сумка",
    price: 27800,
  },
  {
    id: 38,
    category: categories.bags,
    name: "Сумка",
    price: 27100,
  },
  {
    id: 39,
    category: categories.bags,
    name: "Сумка",
    price: 27900,
  },
  {
    id: 40,
    category: categories.bags,
    name: "Сумка",
    price: 19700,
  },
  {
    id: 41,
    category: categories.bags,
    name: "Сумка",
    price: 22600,
  },
  {
    id: 42,
    category: categories.bags,
    name: "Сумка",
    price: 33000,
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(goods);
    }, 2000);
  });

export { fetchAll };
