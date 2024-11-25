`use strict`;

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "Charlie111", age: 40 },
];

const groupedByAge = people.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [];
  }

  acc[person.age].push(person);
  console.log("acc", acc);
  return acc;
}, {});

console.log(groupedByAge);

// { '25': [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 25 } ],
//   '30': [ { name: 'Charlie', age: 30 } ] }
