// Напишете функция, която приема string, намира индексите на всяка буква от string-a и ги записва в обект по следния начин:

// mapLetterIndices(“dodo”) => {“d”: [0, 2], “o”: [1, 3]}
// mapLetterIndices(“ivan”) => {“i”: [0], “v”: [1], “a”: [2], “n”: [3]}

const word1 = "dodo";
const word2 = "ivan";
const word3 = "georgi";

function mapLetterIndices(word) {
  let arrayedWord = word.split("");
  console.log(arrayedWord);
  res = {};

  arrayedWord.forEach((element, index) => {
    res[element] = res[element] || [];
    // making value of obj to be [] ?
    res[element].push(index);
  });
  console.log(res);
}
