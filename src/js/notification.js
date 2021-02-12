import { error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaults.delay = 3000;

function specifyQueryNotification() {
const specifyQuery = error({
    text: "Too many matches found. Please enter a more specific query!",
});
    
    return specifyQuery;
}

function errorNotification() {
const statusError = error({
    text: "Please specify your request",
});
    
    return statusError;
}

export  { specifyQueryNotification, errorNotification };