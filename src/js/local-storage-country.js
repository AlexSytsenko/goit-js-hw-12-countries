
const countryLocalStorage = {
    key: 'country',

    get() {
        return localStorage.getItem(this.key);
    },

    set(value) {
        localStorage.setItem(this.key, value);
    },

    clear() {
        localStorage.removeItem(this.key);
    }

};

export default countryLocalStorage;