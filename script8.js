// Pizza Points

// Направете програма, която да дава информация на pizza delivery сървис, кои клиенти имат право на безплатна пица.
// Напишете функция, която приема обект от клиенти. Обекта се състои от ключ - ID/Име на клиента, и стойност - Array от numbers които са стойностите на всички поръчки на клиента. Функцията трябва да приема още 2 параметъра - минимална цена и минимален брой поръчки. 
// Всеки клиент, който отговаря на параметрите (има достатъчно брой поръчки на достатъчна обща сума която да надвишава минималната) е одобрен за безплатна пица. Функцията трябва да връща масив от имената на хората, които могат да получат free pizza.

// pizzaPoints({
// 	“DimitarTrendafilov”: [5.50, 4.50, 6, 3],
// 	“IvanVladimirov”: [4, 7.20, 6],
// 	“VasilDudinski”: [18.50],
// “NikiAngelov”: [3.50, 3.50, 2.50, 3, 4]
// }, 16.90, 3) => [“DimitarTrendafilov”, “Ivan Vladimirov” ]

// Пояснение:

// DimitarTrendafilov има похарчени $19.00 и 4 поръчки => 19.00 > 16.90 && 4 > 3 => free pizza

// VasilDudinski има похарчени $18.50 и 1 поръчка => 18.50 > 16.90 && 1 < 4 => няма free pizza, тъй като му трябват повече поръчки.

// IvanVladimirov има 3 поръчки и похарчени над $16.90 => free pizza

// NikiAngelov има 5 поръчки, но няма похарчени над $16.90 => няма free pizza

const clients = {
  DimitarTrendafilov: [5.5, 4.5, 3, 10],
  IvanNikolov: [6, 3.5, 2],
  ToniHaralambalieva: [8, 2, 6, 10, 15],
  PetkoNikolov: [4, 6, 2, 10],
  KolioShofiorcheto: [20, 2.5],
  MitioManolskiq: [3, 4, 18],
};

function orderTotalSum (orders){
   return orders.reduce((partialSum, a) => partialSum + a, 0);
}

function freePizza(obj, maxPrice, minOrders) {
  let eligiblePeople = [];
  for (let person in obj) {
   let orders = obj[person];
   let orderAmt = orders.length;
   if(orderAmt>minOrders && orderTotalSum(orders)>maxPrice) {
     eligiblePeople.push(person);
   }
  }

  return eligiblePeople;

  // for (let item in obj) {
  //   if (minOrders < obj[item].length) {
  //     Object.keys(obj).forEach((key) => {
  //       obj[key] = obj[key].reduce((partialSum, a) => partialSum + a, 0);
  //     });
  //   } else {
  //     // console.log("No free pizza for " + " " + obj);
  //   }
  // }
  // let values = [];
  // for (let item in obj) {
  //   if (obj[item] > maxPrice) {
  //     // console.log("Free pizza for " + " " + obj[item]);
  //     values.push(item);
  //   } else {
  //     // console.log("No free pizza for " + " " + obj[item]);
  //   }
  // }
  // console.log("Free pizza only for" + " " + values);
  // return values;
}


// to check diffrence between two codes


