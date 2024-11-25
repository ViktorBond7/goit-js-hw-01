// `use someFnict`;

// function makeTransaction(quantity, pricePerDroid) {
//   return `You ordered ${quantity} droids worth ${
//     quantity * pricePerDroid
//   } credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//

// function isEnoughCapacity(products, containerSize) {
//   let samProdukt = 0;
//   {
//     for (const product of Object.values(products)) {
//       samProdukt += product;
//     }
//     if (samProdukt <= containerSize) {
//       return true;
//     }
//     return false;
//   }
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false

// function calcAverageCalories(days) {
//   let samProdukt = 0;

//   for (const day of days) {
//     if (days.length === 0) {
//       return 0;
//     } else {
//       samProdukt += day.calories;
//     }

//     const index = samProdukt / days.length;
//     return index;
//   }
// }

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 2040 },
//     { day: 'tuesday', calories: 2270 },
//     { day: 'wednesday', calories: 2420 },
//     { day: 'thursday', calories: 1900 },
//     { day: 'friday', calories: 2370 },
//     { day: 'saturday', calories: 2280 },
//     { day: 'sunday', calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0
// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 3010 },
//     { day: 'tuesday', calories: 3200 },
//     { day: 'wednesday', calories: 3120 },
//     { day: 'thursday', calories: 2900 },
//     { day: 'friday', calories: 3450 },
//     { day: 'saturday', calories: 3280 },
//     { day: 'sunday', calories: 3300 },
//   ])
// ); // 3180

// Доповни обєкт profile методами для роботи з його властивостями.

// Метод changeUsername(newName) повинен приймати рядок(нове імя)
// в параметр newName та змінювати значення властивості username на
// нове.Нічого не повертає.
// Метод updatePlayTime(hours) повинен приймати число(кількість годин) у
//  параметр hours та збільшити на нього значення властивості playTime.Нічого
//  не повертає.
// Метод getInfo() має повертати рядок формату < Username > has < amount > active
// hours!, де < Username > — це імя профілю, а < amount > — кількість ігрових годин.

// const profile = {
//   username: 'Jacob',
//   playTime: 400,
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//     hours = this.playTime;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername('banan');
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

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
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// function calcAverageCalories(days) {
//   debugger;

//   let samProdukt = 0;
//   for (const day of days) {
//     if (day.length) {
//       samProdukt += day.calories;
//     }
//   }
//   const index = samProdukt / days.length;
//   return index;
// }
// function calcAverageCalories(days) {
//   debugger;
//   let samProdukt = 0;
//   for (const day of days) {
//     samProdukt += day.calories;
//   }
//   if (days.length) {
//     const index = samProdukt / days.length;
//     return index;
//   }
//   return 0;
// }

// console.log(calcAverageCalories([])); // 0

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 3010 },
//     { day: 'tuesday', calories: 3200 },
//     { day: 'wednesday', calories: 3120 },
//     { day: 'thursday', calories: 2900 },
//     { day: 'friday', calories: 3450 },
//     { day: 'saturday', calories: 3280 },
//     { day: 'sunday', calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 2040 },
//     { day: 'tuesday', calories: 2270 },
//     { day: 'wednesday', calories: 2420 },
//     { day: 'thursday', calories: 1900 },
//     { day: 'friday', calories: 2370 },
//     { day: 'saturday', calories: 2280 },
//     { day: 'sunday', calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(callback(name));
// }
// registerGuest('Mango', function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// console.log(registerGuest('Mango', greet)); // "Registering Mango!"
// // "Welcome Mango!"

// console.log(registerGuest('Mango', notify)); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, index) {
//   return index(pizzaName);
// }
// console.log(makeMessage('Royal Grand', makePizza));

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   'Eating pizza ${pizzaName}';
// });
// console.log(makePizza(33333, deliverPizza));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number, index)) {
// totalPrice += number
//   }

//   return totalPrice;
// }

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number) {
//   console.log(number);
// });

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   let totalPrice = [];
//   numbers.forEach(function (number) {
//     if (value < number) {
//       totalPrice.push(number);
//     }
//   });
//   return totalPrice;
// }
// console.log(filterArray([4, 2, 3, 4, 5], 4));

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Inex ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function changeEven(numbers, value) {
//   const sum = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       sum.push(numbers[i] + value);
//     } else {
//       sum.push(numbers[i]);
//     }
//   }
//   return sum;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// function changeEven(numbers, value) {
//   const sum = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     numbers[i] % 2 === 0 ? sum.push(numbers[i] + value) : sum.push(numbers[i]);
//   }
//   return sum;
// }

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// const oddNumbers = numbers.filter(value => value % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, values) => {
//   return acc + values;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(books => books.rating > MIN_BOOK_RATING)
//   .map(books => books.author)
//   .toSorted((firstStudent, secondStudent) =>
//     firstStudent.localeCompare(secondStudent)
//   );
// console.log(names);

// function firstNSmallest(array, n) {
//   const minNumber = [];
//   for (let i = 0; i < array.length; i++) {
//     if (n >= array[i]) {
//       minNumber.push(array[i]);
//     }
//   }
//   return minNumber;
// }
// console.log(firstNSmallest([1, 2, 3, 4, 5], 3)); //[1, 2, 3]);
// console.log(firstNSmallest([5, 4, 3, 2, 1], 3)); //[3, 2, 1]);
// console.log(firstNSmallest([1, 2, 3, 4, 5], 5)); //[1, 2, 3, 4, 5]);
// console.log(firstNSmallest([1, 2, 3, -4, 0], 3)); //[1, -4, 0]);
// console.log(firstNSmallest([1, 2, 3, 4, 5], 0));
// console.log(firstNSmallest([2, 1, 2, 3, 4, 2], 3));

// function getCommonElements(array1, array2) {
//   let odd = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       odd.push(array1[i]);
//     }
//   }
//   return odd;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// function firstNSmallest(array, n) {
//   let newFirstNSma = [];
//   for (const i of array) {
//     if (i.array <= n) {
//       newFirstNSma.push(i);
//     }
//   }
//   return newFirstNSma;
// }
// console.log(firstNSmallest([1, 2, 3, 4, 5], 3), [1, 2, 3]);
// console.log(firstNSmallest([5, 4, 3, 2, 1], 3), [3, 2, 1]);
// console.log(firstNSmallest([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
// console.log(firstNSmallest([1, 2, 3, -4, 0], 3), [1, -4, 0]);

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// // console.log(new Car('Audi', 'Q3', 36000));

// class Car {
//   static maxPrice = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < this.maxPrice) {
//       return (this.#price = newPrice);
//     }
//     return hot;
//   }
// }

// const audi = new Car({ price: 51000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// // else {
// //       return (this.#price = newPrice);
// //     }

// class Car {
//   static maxPrice = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return 'Error! Price exceeds the maximum';
//     } else {
//       return 'Success! Price is within acceptable limits';
//     }
//   }
//   static #maxPrice = 50000;

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// class Car {
//   static checkPrice(price) {
//     return price > Car.#maxPrice
//       ? 'Error! Price exceeds the maximum'
//       : 'Success! Price is within acceptable limits';
//   }

//   static #maxPrice = 50000;

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }

// const someFn = `function foo() {
//   const arr = [1, 2, 3];
//   console.log(arr);
// }`;

// console.log(test('text with([brackets])')); // true
// console.log(test('te ([{wrong}])')); // false
// console.log(test('text with [wrong brackets')); // false
// console.log(test(`function foo() {const arr = [1, 2, 3]; console.log(arr);}`));

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };
// const fruitProcessor = function (apples, oranges) {
//   const applePrieces = cutPieces(apples);

//   const arangePieces = cutPieces(oranges);

//   const juice = `Juice with ${applePrieces} pieces apple and ${arangePieces} pieces of orange`;
//   return juice;
// };
// console.log(fruitProcessor(2, 3));

// function youSayGoodBye() {
//   console.log('Good Bye!');
//   function andISayHello() {
//     console.log('Hello!');
//   }
//   return andISayHello;
// }
// let something = youSayGoodBye();
// something();

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });

// const startField = [
//   [1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 0, 0, 0, 1, 0, 0, 1],
//   [1, 1, 0, 0, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 0, 0, 1, 1, 1, 1],
//   [1, 1, 0, 1, 1, 1, 1, 0],
//   [1, 1, 0, 0, 1, 1, 1, 0],
// ];
// console.log(startField);

// const field = startField.reduce((acc, xArray) => {
//   acc.push([...xArray]);
//   return acc;
// }, []);

// const maxX = field[0].length - 1;
// const maxY = field.length - 1;
// const startCell = '4,3'; // in format y,x

// let newCelltoFill = new Set();
// let filledCells = new Set();
// let cellsToFill = [startCell];

// let curCell = getCoordinates(startCell);
// let [y, x] = [curCell[0], curCell[1]];

// if (field[y][x]) {
//   console.log('This cell is not empty!');
// } else {
//   filledCells.clear();
//   while (cellsToFill.length > 0) {
//     newCelltoFill.clear();
//     for (let cell of cellsToFill) {
//       [y, x] = getCoordinates(cell);
//       field[y][x] = 2;
//       filledCells.add(cell);
//       const relCells = getRelatedCells(cell);
//       for (const curCell of relCells) {
//         newCelltoFill.add(curCell);
//       }
//     }
//     cellsToFill = newCelltoFill.size > 0 ? [...newCelltoFill] : [];
//   }
//   console.log(field);
// }

// function getCoordinates(currentCell = '') {
//   let arrCoo = currentCell.split(',');
//   return [Number(arrCoo[0]), Number(arrCoo[1])];
// }

// function getRelatedCells(currentCell) {
//   [y, x] = getCoordinates(currentCell);

//   const relCells = [];
//   for (let yi = y - 1; yi <= y + 1; yi++) {
//     if (yi > maxY || yi < 0) continue;
//     for (let xi = x - 1; xi <= x + 1; xi++) {
//       if (xi > maxX || xi < 0) continue;
//       if (xi === x && yi === y) continue;

//       const currCellName = yi + ',' + xi;
//       if (filledCells.has(currCellName)) continue;
//       if (field[yi][xi]) {
//         filledCells.add(currCellName);
//         continue;
//       } else {
//         relCells.push(currCellName);
//       }
//     }
//   }
//   return relCells;
// }

// const array = [1, 3, 5, 4, 6, 8, 6];
// const amount = 8;

// function findTwoNumbers(inputArray, amount) {
//   const cashArray = [];
//   for (const elem of inputArray) {
//     if (cashArray.length > 0) {
//       for (const cashElem of cashArray) {
//         if (cashElem + elem === amount) return [cashElem, elem];
//       }
//     }
//     cashArray.push(elem);
//   }
//   return [];
// }

// console.log(findTwoNumbers(array, amount)); // [3,5]
// const postId = 1;
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// const postToAdd = {
//   title: 'CRUD',
//   body: 'CRUD is awesome!',
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch('<https://jsonplaceholder.typicode.com/posts>', options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// function stopWatch() {
//   let startTime = Date.now();
//   function getDelay() {
//     let elapsedTime = Date.now() — startTime;
//     alert(elapsedTime);
//   }
//   return getDelay;
// }
// let timer = stopWatch();

// let names = ['marge', 'homer', 'bart', 'lisa', 'maggie'];
// let newNames = [];
// for (let i = 0; i < names.length; i++) {
//   let name = names[i];
//   let firstLetter = name.charAt(0).toUpperCase();

//   newNames.push(firstLetter + name.slice(1));
// }
// console.log(newNames);

//*********** */
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

//////////**** */

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     alt: 'Elephant Beside on Baby Elephant',
//   },
//   {
//     url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     alt: 'Blue Geeen and Orange Parrot',
//   },
//   {
//     url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     alt: 'Zebras on Zebra',
//   },
// ];

// const tableEl = document.querySelector('.gallery');

// function transactionTemplate() {
//   const markup = images
//     .map(image => {
//       return `<li>
//       <img src="${image.url}" alt="${image.alt}" width = 150,
//     height = 150>
//     </li>`;
//     })
//     .join('');

//   return markup;
// }

// const markup = transactionTemplate();
// tableEl.insertAdjacentHTML('beforeend', markup);

// const galleryEll = document.querySelector('.gallery');

// const galleryss = images
//   .map(
//     image => `<li>
// <img width = "360" height = "300" src = "${image.url}" alt = "${image.alt}">
// </li>`
//   )
//   .join('');

// galleryEll.innerHTML = galleryss;

// const markup = images.reduce(
//   (html, image) =>
//     html +
//     `<li>
// <img width = "360" height = "300" src = "${image.url}" alt = "${image.alt}">
// </li>`,
//   ''
// );
// tableEl.innerHTML = markup;

// function render() {
//   const markup = images.reduce(
//     (html, image) =>
//       html +
//       `<li>
// <img width = "360" height = "300" src = "${image.url}" alt = "${image.alt}">
// </li>`,
//     ''
//   );
//   return markup;
// }
// const markups = render();
// tableEl.innerHTML = markups;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const dataCreate = document.querySelector('button[data-create]');
// const dataDestroy = document.querySelector('button[data-destroy]');
// const boxesEll = document.querySelector('#boxes');
// const input = document.querySelector('input');
// dataCreate.addEventListener('click', createBoxes());

// function createBoxes(amount = []) {
//   boxesEll.removeEventListener('click', destroyBoxes());
//   const element = input.value;
//   const boxes = [];
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.classList.add('box');
//     box.style.width = `${30 + i * 10}px`;
//     box.style.height = `${30 + i * 10}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.push(box);
//   }
//   boxesEll.append(...boxes);
//   input.value = '';
// }
// const createBtnRef = document.querySelector('[data-create]');
// const destroyBtnRef = document.querySelector('[data-destroy]');
// const boxesEll = document.querySelector('#boxes');
// const input = document.querySelector('input');

// createBtnRef.style.margin = '16px';
// destroyBtnRef.style.backgroundColor = '#FF4E4E';

// createBtnRef.addEventListener('click', createBoxes);
// destroyBtnRef.addEventListener('click', destroyBoxes);

// function createBoxes() {
//   boxesEll.innerHTML = '';
//   const amount = input.value;

//   const boxes = [];
//   for (let i = 0; i < amount; i++) {
//     const box = createElement('div');
//     box.classList.add('box');
//     box.style.width = `${30 + i * 10}px`;
//     box.style.height = `${30 + i * 10}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.push(box);
//   }
//   boxesEll.append(...boxes);
//   input.value = '';
// }

// const list = document.querySelector('.list');

// const newTechnologies = ['React', 'TypeScript', 'Node.js'];

// const ggg = document.querySelector('.ggg');

// ggg.addEventListener('click', () => {
//   const markup = newTechnologies
//     .map(technology => `<li class="list-item new">${technology}</li>`)
//     .join('');

//   list.insertAdjacentHTML('beforeend', markup);
//   list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');
// });
// const fruit = {
//   name: 'apple',
//   price: 10,
//   inStock: true,
// };
// const { price = 20 } = fruit;
// console.log(price);

// fs.readFile('path_to_file', (err, fileContent) => {
// 		someOtherFunctionWithCallback(fileContent, (err, data) => {
// 			anotherFunctionWithCallback(data, () => {....})
// 		}
// });

// (() => {
//   var a = 7;

//   function test() {
//     // console.log(a);
//   }

//   function b() {
//     debugger;
//     console.log(a);
//     var a = 10;

//     test();
//   }
//   b();
// })();

// const a = [1, 2, 3] + 'abc';
// const b = { name: 'bob' } + '';
// conct c = Boolean('')
// const d = +'123dfg'
// conct e = +true

// console.log(a, b);

// const obj = {
//   name: 'bob',
// };

// Object.defineProperty(obj, 'profession', {
//   enumerable: false,
//   writable: false,
//   value: 'QA',
// });

// obj.age = 40;
// obj.profession = 'enginner';
// console.log(obj);
// Object.defineProperties;

// const value = function a() {
//   let fdfd = 0;

//   const b = () => {
//     fdfd++;
//   };

//   const c = () => {
//     return b;
//   };

//   return {
//     b,
//     c,
//   };
// };

// const resalt = f();
// resalt.b();

// console.log(resalt.c());
// var fanc = () => 2;

// function makeCounter() {
//   let currentCount = 1;

//   return function () {
//     return currentCount++;
//   };
// }

// let counter = makeCounter();
// counter();
// counter();

// counter = makeCounter();
// let lastRes = counter();
// console.log(lastRes);

// (() => {
//   const animasObj = {
//     gog: true,
//     cat: true,
//     horse: true,
//   };

//   const getAllAnamas = () => Object.keys(animasObj);

//   const getSomeAnamal = (animal, animalsList) =>
//     animalsList.filter(animalFromList => animal === animalFromList);

//   const saveToLs = data => localStorage.setItem(anamals, JSON.stringify);

//   const horst = getSomeAnamal('horse', getAllAnamas());

//   saveToLs(horst);
// })();

// (() => {
//   const animasObj = {
//     dog: true,
//     cat: true,
//     horse: true,
//   };

//   const getAllAnimals = () => Object.keys(animasObj);

//   const getSomeAnimal = (animal, animalsList) =>
//     animalsList.filter(animalFromList => animal === animalFromList);

//   const saveToLs = data =>
//     localStorage.setItem('animals', JSON.stringify(data));

//   const animalsList = getAllAnimals(); // Получаем список всех животных
//   const horse = getSomeAnimal('horse', animalsList); // Фильтруем список на наличие 'horse'

//   const ggg = saveToLs(horse); // Сохраняем отфильтрованный список в localStorage
//   console.log(horse);
// })();

// const promisify = func => {
//   return (...args) => {
//     return new Promise((res, rej) => {
//       return func.apply(this, [res, ...args]);
//     });
//   };
// };

// const promisify = func => {
//   return (...args) => {
//     return new Promise((resolve, reject) => {
//       func(...args, (err, result) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(result);
//       });
//     });
//   };
// };
// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }
// console.log(i);
// function tribonacci(signature, n) {
//   if (n === 0) return [];
//   if (n <= 3) return signature.slice(0, n);

//   let result = [...signature];

//   console.log(result);

//   while (result.length < n) {
//     const nextValue = result.reduce((a, b) => a + b, 0);
//     result.push(nextValue);
//   }

//   console.log(result);
// }

// function duplicateCount(text) {
//   text = text.toLowerCase();

//   const charCount = {};

//   for (const char of text) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   let duplicateCount = 0;
//   for (const char in charCount) {
//     if (charCount[char] > 1) {
//       duplicateCount++;
//     }
//   }

//   console.log(duplicateCount);
// }
// function expandedForm(num) {
//   const strNum = String(num);
//   const length = strNum.length;
//   let result = [];

//   for (let i = 0; i < length; i++) {
//     let digit = strNum[i];
//     if (digit !== '0') {

//       let placeValue = digit + '0'.repeat(length - i - 1);
//       result.push(placeValue);
//     }
//   }

//   return result.join(' + ');
// }

// function expandedForm(num) {
//   return String(num)
//     .split('')
//     .map((digit, index, arr) => digit + '0'.repeat(arr.length - index - 1))
//     .filter(term => term[0] !== '0')
//     .join(' + ');
// }

// function mix(s1, s2) {
//   function countFrequency(str) {
//     let freq = {};
//     for (const char of str) {
//       if (/[a-z]/.test(char)) {
//         freq[char] = (freq[char] || 0) + 1;
//       }
//     }
//     return freq;
//   }

//   const freq1 = countFrequency(s1);
//   const freq2 = countFrequency(s2);

//   let resultParts = [];
//   const allLetters = new Set([...Object.keys(freq1), ...Object.keys(freq2)]);

//   for (const letter of allLetters) {
//     const count1 = freq1[letter] || 0;
//     const count2 = freq2[letter] || 0;

//     if ((count1, count2) > 1) {
//       if (count1 > count2) {
//         resultParts.push(`1:${letter.repeat(count1)}`);
//       } else if (count2 > count1) {
//         resultParts.push(`2:${letter.repeat(count2)}`);
//       } else {
//         resultParts.push(`=:${letter.repeat(count1)}`);
//       }
//     }
//   }

//   resultParts.sort((a, b) => {
//     if (b.length !== a.length) return b.length - a.length;
//     if (a[0] !== b[0]) return a[0].localeCompare(b[0]);
//     return a.localeCompare(b);
//   });

//   return resultParts.join('/');
// }

// console.log(
//   mix(
//     'my&friend&Paul has heavy hats! &',
//     'my friend John has many many friends &'
//   )
// );

// console.log(
//   mix(
//     'mmmmm m nnnnn y&friend&Paul has heavy hats! &',
//     'my frie n d Joh n has ma n y ma n y frie n ds n&'
//   )
// );

// function add(a, b) {
//   return (Number(a) + Number(b)).toString(); // Fix me!
// }

// function nextBigger(n) {
//   const digits = n.toString().split('').map(Number);

//   let i = digits.length - 2;

//   while (i >= 0 && digits[i] >= digits[i + 1]) {
//     i--;
//   }

//   if (i === -1) return -1;

//   let j = digits.length - 1;
//   while (digits[j] <= digits[i]) {
//     j--;
//   }

//   [digits[i], digits[j]] = [digits[j], digits[i]];

//   const left = digits.slice(0, i + 1);
//   const right = digits.slice(i + 1).sort((a, b) => a - b);

//   const result = parseInt(left.concat(right).join(''), 10);

//   return result;
// }

// console.log(nextBigger(256));

function validateBattlefield(field) {
  
  const ships = { 4: 1, 3: 2, 2: 3, 1: 4 }; // Кількість кораблів різних розмірів
  const visited = Array.from({ length: 10 }, () => Array(10).fill(false)); // Відмічені комірки

  // Функція для пошуку всіх клітин корабля і визначення його розміру
  function dfs(x, y) {
    if (
      x < 0 ||
      x >= 10 ||
      y < 0 ||
      y >= 10 ||
      visited[x][y] ||
      field[x][y] === 0
    )
      return 0;
    visited[x][y] = true;
    return 1 + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1);
  }

  // Перевірка на діагональні сусідства
  function hasDiagonal(x, y) {
    const diagonals = [
      [x - 1, y - 1],
      [x - 1, y + 1],
      [x + 1, y - 1],
      [x + 1, y + 1],
    ];
    return diagonals.some(
      ([dx, dy]) =>
        dx >= 0 && dx < 10 && dy >= 0 && dy < 10 && field[dx][dy] === 1
    );
  }

  // Обхід всього поля
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        if (hasDiagonal(i, j)) return false; // Якщо є діагональні з’єднання, поле некоректне
        const size = dfs(i, j); // Визначаємо розмір корабля
        if (!ships[size]) return false; // Якщо розмір не відповідає, поле некоректне
        ships[size]--; // Зменшуємо лічильник потрібних кораблів
      }
    }
  }

  // Перевіряємо, чи всі кораблі були знайдені
  return Object.values(ships).every(count => count === 0);
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
