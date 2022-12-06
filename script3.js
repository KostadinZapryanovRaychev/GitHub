// Напишете функция, която да проверява честотата на елементите в един array и да ги връща в обект.

// getFrequencies([“A”, “B”, “A”, “A”, “A”]) => {A: 4, B: 1}
// getFrequencies([1, 2, 3, 1, 1]) => {1: 3, 2: 1, 3: 1}

const array1 = [
  "A",
  "A",
  "A",
  "A",
  "B",
  "B",
  "B",
  "B",
  "A",
  "A",
  "A",
  "C",
  "C",
  "C",
  "B",
  "B",
  "A",
];

const array2 = [1, 1, 2, 1, 1, 2, 3, 3, 1];

function findDuplicates(arr) {
  const duplicates = {};

  arr.forEach((element) => {
    duplicates[element] = (duplicates[element] || 0) + 1;
  });

  return duplicates;
}
