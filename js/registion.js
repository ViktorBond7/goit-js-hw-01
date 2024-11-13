const enterEmailLogic = onError => {
  let email = '';

  while (true) {
    email = prompt('Please enter your email: ');

    if (!email) {
      onError('Please enter something');
      continue;
    } else if (!email.includes('@')) {
      onError('Please enter correct email');
      continue;
    }

    break;
  }

  return email;
};

const enterPasswordLogic = onError => {
  let password = '';

  while (true) {
    password = prompt('Please enter your password: ');

    if (!password) {
      onError('Please enter something');
      continue;
    } else if (password.length < 5) {
      onError('Please enter more then 4 symbols');
      continue;
    }

    break;
  }

  return password;
};

const correctCredentions = {
  EMAIL: 'oleh@gmail.com',
  PASSWORD: '12345',
};

let email = '';
let password = '';

while (true) {
  email = enterEmailLogic(alert);
  password = enterPasswordLogic(alert);

  const isCorrectCredentions =
    email === correctCredentions.EMAIL &&
    password === correctCredentions.PASSWORD;

  alert(
    isCorrectCredentions
      ? 'Welcome to home page'
      : 'Your password or email is incorrect'
  );

  if (!isCorrectCredentions) continue;

  break;
}

console.log(email, password);
