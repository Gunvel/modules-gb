'use strict';

import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "../utils.js";

let dateCalcForm = null;
let dateCalcResult = null;

function formSubmitHandler(e) {
    dateCalcResult.innerHTML = "";
    e.preventDefault();

    let { firstDate, secondDate } = e.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

export function init() {
    dateCalcForm = document.getElementById("datecalc");
    dateCalcResult = document.getElementById("datecalc__result");

    dateCalcForm.addEventListener("submit", formSubmitHandler);
}