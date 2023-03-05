export const formatError = text => `
    <span style="color: red;">
        ${text}
    </span>
`;

export const calculatorMarkup = `
    <form id="datecalc">
        <h3>Калькулятор дат</h3>
        <label>
            <strong>Первая дата:</strong>
            <input type="date" name="firstDate" />
        </label>
        <label>
            <strong>Вторая дата:</strong>
            <input type="date" name="secondDate" />
        </label>
        <button type="submit">Расчитать промежуток</button>
        <p id="datecalc__result"></p>
    </form >
`;

export const timerMarkup = `
    <form id="timer_form">
        <h3>Счетчик</h3>
        <label>
            <strong>Считать (сек):</strong>
            <input type="text" name="countSeconds" />
        </label>
        <button type="submit" data-work="start">Старт</button>
        <button type="submit" data-work="stop">Стоп</button>
        <p id="timer_current">0s</p>
    </form>
`;