export const categories = {
  blouses: { id: "001", name: "Блузы и рубашки" },
  pants: { id: "002", name: "Брюки" },
  outerwear: { id: "003", name: "Верхняя одежда" },
  underwear: { id: "004", name: "Нижнее бельё" },
  dresses: { id: "005", name: "Платья" },
  hoodies: { id: "006", name: "Cвитшоты" },
  skirts: { id: "007", name: "Юбки" },
  boots: { id: "008", name: "Ботинки" },
  sneakers: { id: "009", name: "Кроссовки" },
  bags: { id: "010", name: "Сумки" },
};

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(categories);
    }, 2000);
  });

export { fetchAll };
