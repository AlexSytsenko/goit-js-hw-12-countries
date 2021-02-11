import './styles.scss';
import fotosTpl from './templates/template.hbs';
import fetchCountries from './js/fetchCountries';
import template from './templates/template.hbs';




const inputRef = document.querySelector('.search');
const countruMarkupRef = document.querySelector('.country__markup');




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
    markup = template(array);
  } else {
    markup = 'error';
  }

  console.log(array);

  countruMarkupRef.insertAdjacentHTML('beforeend', markup);
  
  
}