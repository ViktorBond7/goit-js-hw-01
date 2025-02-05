`use strict`;

// const isSimilar = (arr1, arr2) => {
//   if (arr1.lenght !== arr2.lenght) return false;

//   const countMap = {};

//   for (let i = 0; i < arr1.length; i++) {
//     countMap[arr1[i]] = (countMap[arr1[i]] || 0) + 1;
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (!(arr2[i] in countMap)) return false;

//     countMap[arr2[i]] -= 1;
//   }

//   for (const key in countMap) {
//     if (countMap[key] > 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isSimilar([1, 2, 3], [3, 2, 1]));

// const isValue = (arr1, arr2) => {
//   if (arr1.lenght !== arr2.lenght) return false;

//   const countMap = {};

//   for (let i = 0; i < arr1.length; i++) {
//     countMap[arr1[i]] = (countMap[arr1[i]] || 0) + 1;
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr2[i] in countMap) return false;

//     countMap[arr2[i]] -= 1;
//   }

//   for (const key in countMap) {
//     if (countMap[key] > 0) {
//       return false;
//     }
//   }

//   return true;
// };

// const cheking = arr => {
//   const countMap = {};

//   arr.forEach(element => {
//     countMap[element] = (countMap[element] || 0) + 1;
//   });
//   return countMap;
// };

// function isSimilar(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   const const1 = cheking(arr1);
//   const const2 = cheking(arr2);

//   for (const i in const1) {
//     if (const1[i] !== const2[i]) return false;
//   }

//   return true;
// }

// console.log(isSimilar([1, 2, 3], [3, 2, 1]));

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;

// console.log('child', child.heritage);

expenses = {
  '2023-01': {
    '01': {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    '09': {
      food: [11.9],
      fuel: [190.22],
    },
  },
  '2023-03': {
    '07': {
      food: [20, 11.9, 30.2, 11.9],
    },
    '04': {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
  },
  '2023-04': {},
};

function solution1(expenses) {
  const result = {};

  for (const [yearMonth, days] of Object.entries(expenses)) {
    let firstSunday = null;

    for (let day = 1; day <= 7; day++) {
      const [year, month] = yearMonth.split('-').map(Number);
      const date = new Date(year, month - 1, day);

      if (date.getDay() === 0) {
        firstSunday = String(day).padStart(2, '0');

        break;
      }
    }

    if (firstSunday && days[firstSunday]) {
      const dailyExpenses = days[firstSunday];
      const totalExpenses = Object.values(dailyExpenses)
        .flat()
        .reduce((sum, value) => sum + value, 0);

      result[yearMonth] = totalExpenses;
    }
  }

  return result;
}

function solution2(expenses) {
  const result = {};

  for (const [yearMonth, days] of Object.entries(expenses)) {
    const sundayCandidates = [];

    for (const day of Object.keys(days)) {
      const [year, month] = yearMonth.split('-').map(Number);
      const date = new Date(year, month - 1, Number(day));

      if (date.getDay() === 0) {
        sundayCandidates.push(day);
      }
    }

    if (sundayCandidates.length > 0) {
      const firstSunday = sundayCandidates.reduce((min, d) =>
        d < min ? d : min
      );

      const dailyExpenses = days[firstSunday];
      const totalExpenses = Object.values(dailyExpenses)
        .flat()
        .reduce((sum, value) => sum + value, 0);

      result[yearMonth] = totalExpenses;
    }
  }

  return result;
}

console.log(solution1(expenses));
console.log(solution2(expenses));
