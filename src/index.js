import './styles.scss';
import fetchCountries from './js/fetchCountries';
import templateOneCountry from './templates/template-one-country.hbs';
import templateCountrysList from './templates/template-countrys-list.hbs';
import errorNotification from './js/notification';

let debounce = require('lodash.debounce');



const inputRef = document.querySelector('.search');
const countryMarkupRef = document.querySelector('.country__markup');

if (getFromLocalStorage('country')) {
  inputRef.value = getFromLocalStorage('country');
  inputHandler();
}

// Handlers
inputRef.addEventListener('input', debounce(inputHandler, 500));


function inputHandler() {

  clearMarkup();

  const searchQuery = inputRef.value;

  if (!searchQuery) {
    clearLocalStorage('country');
    return;
  }

  console.log(searchQuery);
  
  fetchCountries(searchQuery).then(array => {
    createMarkup(array, searchQuery);
  });
  
}

function createMarkup(array, searchQuery) {

  let markup; 

  if (array.status === 404) {
    errorNotification(array.status);
    return;
  } else if (array.length === 1) {
    markup = templateOneCountry(array);
  } else if (array.length > 1 && array.length <= 10) {
    markup = templateCountrysList(array);
  } else {
    errorNotification();
    return;
  }
  updateMarkup(markup);
  setToLocalStorage("country", searchQuery);
}

function updateMarkup(value) {
countryMarkupRef.insertAdjacentHTML('beforeend', value);
}

function clearMarkup() {
  countryMarkupRef.innerHTML = '';
}

function setToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}

function clearLocalStorage(key) {
  localStorage.removeItem(key);
}

