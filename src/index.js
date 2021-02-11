import './styles.scss';
import fetchCountries from './js/fetchCountries';
import templateOneCountry from './templates/template-one-country.hbs';
import templateCountrysList from './templates/template-countrys-list.hbs';






const inputRef = document.querySelector('.search');
const countryMarkupRef = document.querySelector('.country__markup');




inputRef.addEventListener('change', inputHandler);

function inputHandler() {

  const searchQuery = inputRef.value;
  
  fetchCountries(searchQuery).then(array => {
    updateMarkup(array);
  });


}

function updateMarkup(array) {

  let markup; 

  if (array.length === 1) {
    markup = templateOneCountry(array);
  }
  else if (array.length > 1 && array.length <= 10) {
    markup = templateCountrysList(array);
  } else {
    alert('Пожалуйста введите более конкретнее запрос');
    return;
  }
  countryMarkupRef.innerHTML = '';
  countryMarkupRef.insertAdjacentHTML('beforeend', markup);
  
  
}