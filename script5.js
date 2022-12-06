// Иван е канен на гости в негови приятели за вечеря.
// Иван е джентълмен, но не обича да прахосва пари, затова решава, че ще отиде в магазина и ще купи 2-рото най-скъпо
// вино за да занесе на вечерята.

// Напишете функцията, която приема array от обекти, всеки обекти има name (име на виното) и price.
// Функцията трябва да намери 2рото най-скъпо вино в array-a и да върне неговото име. Ако в array-a има само 1 вино, да върне него.
//  Ако в array-a няма вино, да върне null.

const wineList = [
  {
    productId: "Merlot",

    price: 26,
  },
  {
    productId: "Savignong Blanc",

    price: 23,
  },
  {
    productId: "Cabernet",

    price: 24,
  },
  {
    productId: "Muscat",

    price: 25,
  },
  {
    productId: "Pinot Noir",

    price: 31,
  },
];

const shortWhineList = [
  {
    productId: "Pinot Noir",
    price: 31,
  },
];

const emptyWineList = [];

function secondMostExpensiveWine(arr) {
  if (arr.length > 1) {
    arr.sort((a, b) => b.price - a.price);
    return arr[1].productId;
  } else if (arr.length == 1) {
    return arr[0].productId;
  } else {
    return null;
  }
}
