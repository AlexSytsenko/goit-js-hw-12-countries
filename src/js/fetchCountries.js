

function fetchCountries(searchQuery) {

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

    console.log(25);

    return fetch(url)
        .then(response => response.json())
        .then((array) => array)
        .catch(error => console.log(error));
    
}

export default fetchCountries;