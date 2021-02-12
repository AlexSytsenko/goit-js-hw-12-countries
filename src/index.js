import './styles.scss';
import fetchCountries from './js/fetchCountries';
import templateOneCountry from './templates/template-one-country.hbs';
import templateCountrysList from './templates/template-countrys-list.hbs';
import { specifyQueryNotification, errorNotification } from './js/notification';

let debounce = require('lodash.debounce');

const inputRef = document.querySelector('.search');
const countryMarkupRef = document.querySelector('.country__markup');

// Handlers
inputRef.addEventListener('input', debounce(inputHandler, 500));


function inputHandler() {

  clearMarkup();

  const searchQuery = inputRef.value;
  
  fetchCountries(searchQuery).then(array => {
    updateMarkup(array);
  });
  
}


function updateMarkup(array) {

  let markup; 

  if (array.status === 404) {
    errorNotification();
    return;
  } else if (array.length === 1) {
    markup = templateOneCountry(array);
  } else if (array.length > 1 && array.length <= 10) {
    markup = templateCountrysList(array);
  } else {
    specifyQueryNotification();
    return;
  }
  countryMarkupRef.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
  countryMarkupRef.innerHTML = '';
}