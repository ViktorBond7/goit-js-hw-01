`use strict`;

// function getElementWidth(content, padding, border) {
//   return (
//     Number.parseFloat(content) +
//     Number.parseFloat(padding) * 2 +
//     Number.parseFloat(border) * 2
//   );
// }
// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200

function formatDuration(seconds) {
  // Edge case: if duration is 0
  if (seconds === 0) return 'now';

  // Define units in seconds
  const units = [
    { label: 'year', seconds: 365 * 24 * 60 * 60 },
    { label: 'day', seconds: 24 * 60 * 60 },
    { label: 'hour', seconds: 60 * 60 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  // Array to store the parts of the result
  const resultParts = [];

  // Calculate each unit's value
  for (const unit of units) {
    const unitValue = Math.floor(seconds / unit.seconds);
    if (unitValue > 0) {
      // Add formatted unit (singular/plural)
      resultParts.push(
        unitValue + ' ' + unit.label + (unitValue > 1 ? 's' : '')
      );
      // Reduce the remaining seconds
      seconds -= unitValue * unit.seconds;
    }
  }

  // Format the result using commas and "and"
  const lastPart = resultParts.pop(); // Get the last part
  return resultParts.length > 0
    ? resultParts.join(', ') + ' and ' + lastPart
    : lastPart;
}

// Example Usage:
// console.log(formatDuration(3662)); // Output: "1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(0)); // Output: "now"
// console.log(formatDuration(31536000)); // Output: "1 year"

// const foo = () => {
//   const login = prompt('login plese');

//   if (login === 'admin') {
//     const parol = prompt('parol plese');
//     parol === 'aaa' ? alert('Добрий день') : alert('Невірний пароль!');
//   } else if (login === null || login.trim() === '') {
//     alert('cancel');
//     return;
//   } else {
//     alert('i dont nov');
//     return;
//   }
// };
// foo();
// const whileNumber = d => {
//   let n = 1;
//   while (n <= d) {
//     console.log(n);
//     n++;
//   }
// };
// whileNumber(20);

// function getNumbers(min, max) {
//   min = 0;
//   max = 6;
//   let total = 0;
//   for (let index = max; index > min; index--) {
//     if (index % 2) {
//       console.log(index);
//       total += index;
//     }

//   }
//   return total;
// }
// console.log(getNumbers());

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).
// const isAdult = age => {
//   if (age >= 18) {
//     return true;
//   } else {
//     confirm('тобі не має 18');
//   }
// };
// console.log(isAdult(17));
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

const fizzBuzz = num => {
  for (let index = 1; index <= num; index++) {
    // const element = array[index];

    if (index % 3 === 0 && index % 5 === 0) {
      console.log(`${index} fizzBuzz`);
    }
    if (index % 3 === 0) {
      console.log(`${index} fizz`);
    }
    if (index % 5 === 0) {
      console.log(`${index} buzz`);
    }
  }
  // console.log(number);
};

// console.log(fizzBuzz(30));
// const promt = prompt('write minute');

const foo = promt => {
  const hour = Math.floor(promt / 60);
  const minute = promt % 60;
  const rezalt = `${String(hour).padStart(2, '0')}:${String(minute).padStart(
    2,
    '0'
  )}`;
  return rezalt;
};
// console.log(foo(promt));

// *************
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: 'Яблуко', price: 45, quantity: 7 },
  { name: 'Апельсин', price: 60, quantity: 4 },
  { name: 'Банан', price: 125, quantity: 8 },
  { name: 'Груша', price: 350, quantity: 2 },
  { name: 'Виноград', price: 440, quantity: 3 },
  { name: 'Банан', price: 125, quantity: 3 },
];
const calcTotalPrice = (fruits, fruitName) => {
  let look = fruits
    .filter(fruit => fruit.name === fruitName)
    .reduce((acum, fruit) => acum + fruit.price * fruit.quantity, 0);
  return look;
};

console.log(calcTotalPrice(fruits, 'Банан'));
