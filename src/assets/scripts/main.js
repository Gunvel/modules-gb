import { calculatorMarkup, timerMarkup } from "./utils.js";
import { ContentSwitcher } from "./contentSwitcher.js";

const buttons = document.querySelectorAll(".contentSwitcher");
const contentArea = document.querySelector("#contentArea");

var content = {
    calculator: { 
        markup: calculatorMarkup,
        scripts: [{ url: "./assets/scripts/calculator/calculator.js"}],
        onload : () => {console.log('calculator - loaded')} 
    },
    timer: { 
        markup: timerMarkup,
        scripts: [{ url: "./assets/scripts/timer/timer.js"}],
        onload : () => {console.log('timer - loaded')} 
    }
};

let switcher = new ContentSwitcher(contentArea, buttons, 'data-content', content);
switcher.init();

//switcher.switchOn('calculator');