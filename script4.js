// Напишете функция, която получава като аргумент Number парична сума. Функцията трябва да разделя тази сума
// на монети по най-ефикасния начин (възможно най-малко монети) като монетите са по 1 ст, 2 ст, 5 ст, 10 ст, 20 ст, 50 ст, 1 лев.

// makeChange(45) => { “20st”: 2, “5st”: 1 }
// makeChange(17) => { “10st”: 1, “5st”: 1, “2st”: 1 }

const coins = [100, 50, 20, 10, 5, 2, 1];

function amountTocoins(amount, arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    if (amount >= arr[i]) {
      amount = amount - arr[i];
      str = str + arr[i] + ",";
      i--;
    }
  }
  let newArray = str.split(",");
  newArray.pop();
  console.log(newArray);
  const duplicates = {};

  newArray.forEach((element) => {
    duplicates[element] = (duplicates[element] || 0) + 1;
  });

  let centObj = {};
  for (let key in duplicates) {
    if (duplicates.hasOwnProperty(key)) {
      // assign property to new object with modified key
      centObj[key + "st"] = duplicates[key];
    }
  }

  return centObj;
}
