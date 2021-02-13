// function setToLocalStorage(key, value) {
//   localStorage.setItem(key, value);
// }

// function getFromLocalStorage(key) {
//   return localStorage.getItem(key);
// }

// function clearLocalStorage(key) {
//   localStorage.removeItem(key);
// }


//localStorage.getItem(this.key);


const countryLocalStorage = {
    key: 'country',
    // value: localStorage.getItem(this.key),

    get() {
        return localStorage.getItem(this.key);
    },

    set(value) {
        // this.value = value;
        localStorage.setItem(this.key, value);
    },

    clear() {
        localStorage.removeItem(this.key);
    }

};

export default countryLocalStorage;