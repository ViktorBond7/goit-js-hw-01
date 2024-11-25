// Функція calculateTotal(number) приймає ціле число(параметр number).Доповни код функції так,
//   щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.Наприклад, якщо number
//   дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {

//   let sum = 0;
//   while (let i = 0; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// const user = 50;

// for (i = 1; i <= user; i += 1) {
//   if (i % 2 === 0);
// }
// {
//   console.log('person' + i);
// }

// const a = 0;
// const b = 5;
// let sum = 0;
// for (i = a; i <= b; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);

// const min = 0;
// const max = 5;

// let sum = 0;
// for (i = min; i <= max; i++) {
//   if (i % 2 === 1) continue;
//   sum += i;
// }
// console.log(sum);

// function calculateTotal(number) {
//   while (number <= 100) {}
//   // return sum;
// }
// console.log(calculateTotal(3));

// let count = 0;
// let sum = 0;
// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;

// }

// var n = 0;
// var x = 0;

// while (n < 3) {
//   n++;
//   x += n;
// }

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(2, 6, 5));

// function calculateTotal(number) {
//   let sum = 0;
//   let index = 10;
//   while (number <= index) {}
//   // return sum;
// }
// console.log(calculateTotal(3));

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// const number = 5;
// sum = 0;
// for (let i = 0; i <= number; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

/* Task 3 */

// function calcResalt(namber) {
//   let sum = 0;
//   for (let i = 0; i <= namber; i++) {
//     console.log(sum, i);
//     sum += i;
//   }
//   return sum;
// }
// console.log(calcResalt(6));

// function calculateTotal(mumber) {
//   let count = 0;
//   let sum = 0;
//   while (count <= mumber) {
//     sum += count;
//     count++;
//   }
//   return sum;
// }
// console.log(calculateTotal(0));

// function createArrayOfNumbers(min, max) {
//   let index = [];
//   for (let i = min; i <= max; i++) {
//     index.push(i);
//   }
//   return index;
// }

// console.log(createArrayOfNumbers(14, 17));

// function calculateTotalPrice(order) {
//   let sum = 0;

//   for (let i = 0; i <= order.length; i++) {
//     sum += order[i];
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// function checkStorage(storage, item) {
//   const itemTo = item.toLowerCase();
//   if (storage.includes(itemTo)) {
//     return `${itemTo} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));

// function getCommonElements(array1, array2) {
//   let odd = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       odd.push(array1[i]);
//     }
//   }
//   return odd;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function createReversedArray() {
//   const args = Array.from(arguments);
//   let rewers = [];

//   for (const arg of arguments) {
//     createReversedArray.toRevers;
//   }

//   return rewers;
// }

// console.log(createReversedArray(12, 85, 37, 4));

/****1 tesk */
// function slugify(title) {
//   const slug = title.toLowerCase().split(' ');
//   return slug.join('-');
// }

// console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

/****2 tesk */
// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

/****3 tesk */

// function filterArray(numbers, value) {
//   const higherNumber = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (value < numbers[i]) {
//       higherNumber.push(numbers[i]);
//     }
//   }
//   return higherNumber;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// function filterArray(numbers, value) {
//   const higherNumber = [];
//   for (const iterator of numbers.length) {
//     if (value < numbers) {
//       higherNumber.push(numbers);
//     }
//   }
//   return higherNumber;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// apartment.owner.phone = 'hghghgh';
// console.log(apartment.owner);

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys)
//  values.push(apartment[key]);
// }
// console.log(values);
// console.log(keys);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (let key of values) {
//     totalSalary += key;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount = keys.length;
//   }
//   return propCount;
// }

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex); // Ключ
//   rgbColors.push(color.rgb); // Значення властивості
// }

// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1100, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return `${product.price}`;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice('Engine'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Droid'));

// const nums = [2, 4, 41, 1, 100, 3];
// nums.sort((a, b) => a - b);
// let superMinValue = nums[0];
// let minValue = nums[1];
// if (superMinValue > minValue) {
//   minValue = nums[0];
//   superMinValue = nums[1];
// }
// for (let i = 2; i < nums.length; i++) {
//   if (superMinValue > nums[i]) {
//     minValue = superMinValue;
//     superMinValue = nums[i];
//   }
// }
// console.log(superMinValue, minValue);
// console.log(nums[0], nums[1]);

// const user = {
//   name: 'viktor',
//   surmame: 'bondarenko',
// };
// for (const key of object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// const salaries = {
//   anna: 200,
//   viktor: 100,
// };
// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// const platas = [
//   {
//     anna: 200,
//     viktor: 100,
//   },

//   {
//     anna: 600,
//     viktor: 100,
//   },
// ];

// let sums = [];
// for (const plata of platas) {
//   let sum = 0;
//   for (const key in plata) {
//     sum += plata[key];
//   }
//   sums.push(sum);
// }
// console.log(sums);

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   let index = [];

//   for (let product of products) {
//     if (product.hasOwnProperty(propName)) {
//       index.push(product[propName]);
//     }
//   }
//   return index;
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('category'));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   let sam = 0;
//   for (let product of products) {
//     if (product.name === productName) {
//       return (sam = product.price * product.quantity);
//     }
//   }
//   return `"Product ${productName} not found!"`;
// }
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Blaster'));

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion('Invisibility'));

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     return this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {},
// };

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let sum = 0;
//     for (let potion of this.potions) {
//       sum += potion.price;
//     }
//     return sum;
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (let potion of thispotions) {
//       if (potion.name === oldName) {
//         potion.price = newName;
//       }
//     }
//   },
// };

// function add(...args) {
//   let sum = 0;
//   for (let arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(add(12, 4, 11, 48));

// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3]
// multiply(1, 2, 3, 4); // 1 2 [3, 4]

// function addOverNum(first, ...args) {
//   let sum = 0;
//   for (let arg of args) {
//     if (arg > first) {
//       sum += arg;
//     }
//   }
//   return sum;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(50, 15, 27));

// function getExtremeScores(scores) {
//   let max = Math.max(...scores);
//   let min = Math.min(...scores);
//   {
//     return `{ best: ${max}, worst: ${min} }`;
//   }
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); //{ best: 93, worst: 17 }

// const frends = [
//   { name: 'kiwi', online: false },
//   { name: 'banan', online: true },
//   { name: 'ananas', online: true },
// ];
// for (let i = 0; i < frends.length; i++) {
//   const frend = frends[i];
//   console.log(frend.name);
// }

// for (const frend of frends) {
//   console.log(frend.name);
// }

// function getFrendName(allFrinds, frindName) {
//   for (const frend of allFrinds) {
//     if (frend.name === frindName) {
//       return frend;
//     }
//   }
// }
// console.log(getFrendName(frends, 'kiwi'));

// function getParametrFrendName(frend, propName) {
//   if (frend[propName] !== undefined) {
//     return frend;
//   }
// }

// console.log(getParametrFrendName(frends[1], 'online'));

// function max(hghg, ...numbers) {
//   let max = numbers[0];
//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// }
// console.log(max(6, 2, 5));

// let arr = [];
// debugger;
// console.log(fillArray(2, 10));
// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//     arr.push(i);
//   }
// }
