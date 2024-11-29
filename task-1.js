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

function isSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (current of arr1) {
    if (!arr2.includes(current)) {
      return false;
    }
  }
  return true;
}
console.log(isSimilar([2, 2, 3], [3, 2, 1]));
