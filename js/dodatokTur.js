const elements = {
  form: document.querySelector('.js-search'),
  formContainer: document.querySelector('.js-form-container'),
  addField: document.querySelector('.js-add'),
  list: document.querySelector('.js-list'),
};

elements.addField.addEventListener('click', handlerAddField);
elements.form.addEventListener('submit', handlerSearchCountry);

async function handlerSearchCountry(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);

  const countries = formData
    .getAll('country')
    .map(country => country.trim())
    .filter(country => !!country);

  //   const result = countries.filter(
  //     (country, idx, arr) => arr.indexOf(country) === idx
  //   );
  //   const result = new Set(countries);
  //   console.log([...result]);
  try {
    const capitals = await serviceCountries(countries);
    const forecast = await serviceWeather(capitals);

    elements.list.innerHTML = createMarkup(forecast);
  } catch (e) {
    console.log(e);
  } finally {
    elements.formContainer.innerHTML = '<input type="text" name="country" />';
  }
}

async function serviceWeather(capitals) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const END_POINT = 'current.json';
  const API_KEY = '14c56bddeab14583a6e164909231107';

  const responses = capitals.map(async capital => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: capital,
      lang: 'uk',
    });

    const response = await fetch(`${BASE_URL}/${END_POINT}?${params}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value);
}

async function serviceCountries(countries) {
  const BASE_URL = 'https://restcountries.com/v3.1/name';
  const responses = await countries.map(async country => {
    const resp = await fetch(`${BASE_URL}/${country}`);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value[0].capital[0]);
}

function handlerAddField() {
  elements.formContainer.insertAdjacentHTML(
    'beforeend',
    '<input type="text" name="country" />'
  );
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        current: {
          temp_c,
          condition: { icon, text },
        },
        location: { country, name },
      }) => `
      <li>
        <img src="${icon}" alt="${text}">
        <h2>${country}</h2>
        <h2>${name}</h2>
        <p>${text}</p>
        <p class="temp">${temp_c} °C</p>
      </li>`
    )
    .join('');
}
