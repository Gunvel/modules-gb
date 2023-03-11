import { ContentSwitcher } from "./contentSwitcher.js";
import { init as calculatorInit } from "./calculator/calculator.js"
import { init as timerInit } from "./timer/timer.js"

const buttons = document.querySelectorAll(".contentSwitcher");
const datecalc = document.querySelector("#datecalc");
const timer = document.querySelector("#timer");

var contents = {
    calculator: datecalc,
    timer: timer
};

let switcher = new ContentSwitcher(buttons, 'data-content', 'hidden', contents);
switcher.init();

switcher.switchOn('calculator');
calculatorInit();
timerInit();