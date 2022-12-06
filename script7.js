// Напишете функция, която намира най-високата оценка в годината на всеки студент.

// topNote([{
// 	“name”: “Ivan”,
// 	“notes”: [5, 6, 4]
// }, {
// 	“name”: “Dimitar”,
// 	“notes: [4, 4, 3]
// }]) => [{“name”: “Ivan”, “topNote”: 6}, {“name”: “Dimitar”, “topNote”: 4}]

// Напишете втора функция, която получава резултата от 1вата и връща името на студента с най-висока оценка.

// topNoteStudent([{“name”: “Ivan”, “topNote”: 6}, {“name”: “Dimitar”, “topNote”: 4}]) => “Ivan”

const students = [
  {
    name: "Dimitar",
    grade: [5, 5, 4, 4, 2],
  },
  {
    name: "Ivan",
    grade: [2, 3, 3, 5, 2],
  },
  {
    name: "Vasil",
    grade: [6, 6, 4, 6, 5],
  },
  {
    name: "Miroslav",
    grade: [5, 4, 4, 4, 3],
  },
  {
    name: "Hristo",
    grade: [2, 3, 2, 3, 3],
  },
];

function topNote(arr) {
  const newArr = arr.map((obj) => {
    return { ...obj, grade: Math.max(...obj.grade) };
  });
  const newArrayOfObj = newArr.map(({ grade: topGrade, ...rest }) => ({
    ...rest,
    topGrade,
  }));
  console.log(newArrayOfObj);
  return newArrayOfObj;
}

function topNoteStudent(arr) {
  let result = arr.sort((a, b) => {
    return b.topGrade - a.topGrade;
  });

  topNote(students);
  let resultFromFirstFunction = topNote(students);

  console.log(`The student with best grade is ${result[0].name}`);
}

//don't use newArray
