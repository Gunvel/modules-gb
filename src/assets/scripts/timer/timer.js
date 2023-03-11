'use strict';

import { formatError } from "../utils.js";
import { Howl } from "howler";
import endSound from "../../sounds/endSound.mp3";

let timerForm = null;
let timerCurrent = null;
let sound = null;
let intervalIndex = null;

function startInterval(form) {
    let { countSeconds } = form.elements;
    countSeconds = +countSeconds.value;

    if (isNaN(countSeconds)) {
        timerCurrent.innerHTML = formatError('Значение в секундах должно быть указанно цифрами');
        return;
    }

    if (countSeconds < 1) {
        timerCurrent.innerHTML = formatError('Значение в секундах должно быть больше 0');
        return;
    }

    timerCurrent.innerHTML = `<span>${countSeconds}s</span>`;

    stopInterval();
    intervalIndex = setInterval(() => {
        timerCurrent.innerHTML = `<span>${countSeconds}s</span>`;

        countSeconds--;

        if (countSeconds <= 0) {
            timerCurrent.innerHTML = '<span>0s</span>';
            stopInterval();

            sound.play();
            return;
        }

        timerCurrent.innerHTML = `<span>${countSeconds}s</span>`;
    }, 1000);
}

function stopInterval() {
    if (intervalIndex != null) {
        clearInterval(intervalIndex);
        intervalIndex = null;
    }
}

function formSubmitHandler(e) {
    e.preventDefault();

    const button = e.submitter;
    if (button == null || button == undefined)
        return;

    const workMode = button.getAttribute('data-work');

    stopInterval();

    if (workMode === 'start') {
        startInterval(e.target);
    }
}

export function init() {
    sound = new Howl({
        src: [endSound]
    });

    timerForm = document.getElementById("timer");
    timerCurrent = document.getElementById("timer_current");

    timerForm.addEventListener("submit", formSubmitHandler);
}