import './styles.scss';
import fetchCountries from './js/fetchCountries';
import templateOneCountry from './templates/template-one-country.hbs';
import templateCountrysList from './templates/template-countrys-list.hbs';
import errorNotification from './js/notification';

let debounce = require('lodash.debounce');


console.log(debounce);


const inputRef = document.querySelector('.search');
const countryMarkupRef = document.querySelector('.country__markup');


const inputHandler = debounce(() => {

  countryMarkupRef.innerHTML = '';

  const searchQuery = inputRef.value;
  
  fetchCountries(searchQuery).then(array => {
    updateMarkup(array);
  });
  
}, 500);


inputRef.addEventListener('input', inputHandler);





// function inputHandler() {

//   const searchQuery = inputRef.value;
  
//   fetchCountries(searchQuery).then(array => {
//     updateMarkup(array);
//   });


// }

function updateMarkup(array) {

  let markup; 

  if (array.length === 1) {
    markup = templateOneCountry(array);
  }
  else if (array.length > 1 && array.length <= 10) {
    markup = templateCountrysList(array);
  } else {
    errorNotification();
    return;
  }
  countryMarkupRef.insertAdjacentHTML('beforeend', markup);
  
}

