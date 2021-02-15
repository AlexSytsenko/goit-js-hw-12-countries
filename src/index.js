import './styles.scss';
import fetchCountries from './js/fetchCountries';
import templateOneCountry from './templates/template-one-country.hbs';
import templateCountrysList from './templates/template-countrys-list.hbs';
import errorNotification from './js/notification';
import countryLocalStorage from './js/local-storage-country';

let debounce = require('lodash.debounce');

const inputRef = document.querySelector('.search');
const countryMarkupRef = document.querySelector('.country__markup');

if (countryLocalStorage.get) {
  inputRef.value = countryLocalStorage.get();
  inputHandler();
}

function inputHandler() {

  clearMarkup();

  const searchQuery = inputRef.value;

  if (!searchQuery) {
    countryLocalStorage.clear();
    return;
  }
  
  fetchCountries(searchQuery).then(array => {
    createMarkup(array, searchQuery);
  });
  
}

function createMarkup(array, searchQuery) {

  let markup; 

  if (array.status === 404) {
    errorNotification(array.status);
    countryLocalStorage.clear();
    return;
  } else if (array.length === 1) {
    markup = templateOneCountry(array);
  } else if (array.length > 1 && array.length <= 10) {
    markup = templateCountrysList(array);
  } else {
    errorNotification();
    countryLocalStorage.clear();
    return;
  }
  updateMarkup(markup);
  countryLocalStorage.set(searchQuery);
}

function updateMarkup(value) {
countryMarkupRef.insertAdjacentHTML('beforeend', value);
}

function clearMarkup() {
  countryMarkupRef.innerHTML = '';
}


// Handlers
inputRef.addEventListener('input', debounce(inputHandler, 500));
