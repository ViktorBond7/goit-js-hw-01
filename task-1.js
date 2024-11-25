`use strict`;

let arr1 = [1, 1, 1, 0, 0, 1, 1];

const foo = (arr) => {
  let maxLendx = 0;
  let thisLendx = 0;

  arr.forEach((element) => {
    if (element === 1) {
      thisLendx++;
    } else {
      thisLendx = 0;
    }
    maxLendx = Math.max(thisLendx, maxLendx);
  });
  return maxLendx;
};
// console.log(foo(arr1));

const string = "([{}])";

const test = (str) => {
  let index = [];

  for (let i = 0; i < str.length; i++) {
    const element = str[i];

    if (element === "[" || element === "(" || element === "{") {
      index.push(element);
    } else {
      if (
        index.length === 0 ||
        (element === "]" && index[index.length - 1] !== "[") ||
        (element === ")" && index[index.length - 1] !== "(") ||
        (element === "}" && index[index.length - 1] !== "{")
      ) {
        return false;
      }
      index.pop();
    }
  }
  return !index.length;
};

console.log(test(string));
