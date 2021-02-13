import { error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.delay = 3000;


function errorNotification(value) {

    const errorText = value === 404 ? "Please specify your request" : "Too many matches found. Please enter a more specific query!";
const statusError = error({
    text: `${errorText}`,
});
    
    return statusError;
}

export default errorNotification;