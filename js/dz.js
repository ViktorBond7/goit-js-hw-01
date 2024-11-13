/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/

const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

console.log(tcheckBrackets(someFn));

function tcheckBrackets(someFn) {
  let chars = someFn.split('');
  let stack = [];
  const open = ['{', '(', '['];
  const close = ['}', ')', ']'];
  let closeIndex;
  let openIndex;

  for (let i = 0; i <= chars.length; i++) {
    openIndex = open.indexOf(chars[i]);
    if (openIndex !== -1) {
      stack.push(openIndex);
      continue;
    }

    closeIndex = close.indexOf(chars[i]);
    if (closeIndex !== -1) {
      openIndex = stack.pop();
      if (closeIndex !== openIndex) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
}
const names = ['bob', ...['donald'], 'suzy', 'lacy', ...['richard', 'alex']];
console.log(names);
