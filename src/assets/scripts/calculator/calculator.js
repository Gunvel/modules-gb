async function Init() {
    const { diffDates, diffToHtml } = await import("./datecalc.js");
    const { formatError } = await import("../utils.js");

    const dateCalcForm = document.getElementById("datecalc");
    const dateCalcResult = document.getElementById("datecalc__result");

    dateCalcForm.addEventListener("submit", (e) => {
        dateCalcResult.innerHTML = "";
        e.preventDefault();

        let { firstDate, secondDate } = e.target.elements;
        firstDate = firstDate.value, secondDate = secondDate.value;

        if (firstDate && secondDate) {
            const diff = diffDates(firstDate, secondDate);
            dateCalcResult.innerHTML = diffToHtml(diff);
        }
        else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
    });
}

Init();