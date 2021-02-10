import './styles.css';
import fotosTpl from './templates/template.hbs';
import fetchCountries from './js/fetchCountries';
import template from './templates/template.hbs';




const inputRef = document.querySelector('.search');
const countruMarkupRef = document.querySelector('.country__markup');




inputRef.addEventListener('input', inputHandler);

function inputHandler() {

  const searchQuery = inputRef.value;
  
  fetchCountries(searchQuery).then(array => {
    updateMarkup(array);
  });


}

function updateMarkup(array) {

  const markup = template(array);

  console.log(36, markup);
  
}