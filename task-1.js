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

const cheking = arr => {
  const countMap = {};

  arr.forEach(element => {
    countMap[element] = (countMap[element] || 0) + 1;
  });
  return countMap;
};

function isSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const const1 = cheking(arr1);
  const const2 = cheking(arr2);

  for (const i in const1) {
    if (const1[i] !== const2[i]) return false;
  }

  return true;
}

console.log(isSimilar([1, 2, 3], [3, 2, 1]));

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};

const child = Object.create(parent);

child.name = 'Jason';
child.age = 27;

console.log('child', child.heritage);
