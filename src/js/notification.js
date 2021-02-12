import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import { defaultModules } from '@pnotify/core';
import * as PNotify from '@pnotify/core';




function errorNotification() {
const myError = error({
  text: "Too many matches found. Please enter a more specific query!"
});
    
    return myError;
}

export default errorNotification;