import './styles.scss';
import fetchCountries from './js/fetchCountries';
import templateOneCountry from './templates/template-one-country.hbs';
import templateCountrysList from './templates/template-countrys-list.hbs';
import errorNotification from './js/notification';

let debounce = require('lodash.debounce');



const inputRef = document.querySelector('.search');
const countryMarkupRef = document.querySelector('.country__markup');

// Handlers
inputRef.addEventListener('input', debounce(inputHandler, 500));


function inputHandler() {

  clearMarkup();

  const searchQuery = inputRef.value;
  
  fetchCountries(searchQuery).then(array => {
    createMarkup(array);
  });
  
}


function createMarkup(array) {

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
}

function updateMarkup(value) {
countryMarkupRef.insertAdjacentHTML('beforeend', value);
}

function clearMarkup() {
  countryMarkupRef.innerHTML = '';
}