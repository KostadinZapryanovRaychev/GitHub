// alert("Hello World!");

// Напишете функция, която получава array от обекти (drinks), като всеки обекти има 2 ключа - name и price.
//  Функцията трябва да сортира array-a по price ascending и да върне новия array.

const drinks = [
  {
    name: "Coca Cola",
    price: 1.5,
  },
  {
    name: "Fanta",
    price: 1.3,
  },
  {
    name: "Lemonade",
    price: 1.9,
  },
  {
    name: "Green Tea",
    price: 2,
  },
  {
    name: "Beer",
    price: 2.2,
  },
];

function getThePricelist(arr) {
  return arr
    .filter((drink) => nameGt(drink, 4))
    .filter((drink) => drink.price > 1.5)
    .sort((a, b) => a.pirce - b.price);
}

function nameGt(drink, nameLen) {
  return drink.name.length > nameLen;
}

// higher order functions ----------- to check it

//     .sort((a, b) => a.pirce - b.price);  recomended usage
