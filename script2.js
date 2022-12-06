// Напишете функция, която получава за параметър обект със 3 ключа (cyan, magenta, yellow).
// Всеки от тях има за стойност number, който отговаря на количеството страници за които дадения цвят ще бъде достатъчен.
//  Функцията трябва да върне за колко страници ще стигнат цветовете.

// inkLevels({ cyan: 8, magenta: 22, yellow: 10}) => 8
// inkLevels({ cyan: 100, magenta: 400, yellow: 55}) => 55

const colors1 = {
  cyan: 8,
  magenta: 10,
  yellow: 33,
};

const colors2 = {
  cyan: 66,
  magenta: 24,
  yellow: 13,
};

function inkLevels(obj) {
  const values = Object.values(obj);
  console.log(values);
  const max = Math.min(...values);
  console.log("The inks will be enough for" + " " + max + " " + "pages");
}

//////SECOND WAY

function getMaxPages(obj) {
  let values = [];
  for (item in obj) {
    values.push(obj[item]);
  }

  let maxValue = values.sort((a, b) => b - a);
  console.log(maxValue);
  let pages = maxValue[maxValue.length - 1];
  return pages;
}
