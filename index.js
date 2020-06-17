import { redundantAlert, returnText } from "testModule.js";

document.body.innerHTML += '<div>js put this here, and a module tried to put something after this colon:' + returnText("test") + '</div>';

//trying to make index.js into a module now...
//i could also try to load the module and just call the code from here without making here a module too