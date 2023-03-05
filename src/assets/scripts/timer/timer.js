'use strict';

function startInterval(form, timerCurrent, formatError, sound) {
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

    const id = setInterval(() => {
        timerCurrent.innerHTML = `<span>${countSeconds}s</span>`;

        countSeconds--;

        if (countSeconds <= 0) {
            timerCurrent.innerHTML = '<span>0s</span>';
            clearTimeout(id);

            sound.play();
            return;
        }

        timerCurrent.innerHTML = `<span>${countSeconds}s</span>`;
    }, 1000);

    return id;
}

function stopInterval(intervalIndex) {
    if (intervalIndex != null) clearInterval(intervalIndex);
}

async function Init() {
    const { formatError } = await import("../utils.js");
    //const { Howl, Howler } = await import("./howler.js"); //Не знаю почему, но через зависимость не работает

    const sound = new Howl({
        src: ['./assets/sounds/endSound.mp3']
    });

    const timerForm = document.getElementById("timer_form");
    const timerCurrent = document.getElementById("timer_current");

    let intervalIndex = null;

    timerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const button = e.submitter;
        if (button == null || button == undefined)
            return;

        const workMode = button.getAttribute('data-work');

        stopInterval(intervalIndex);

        if (workMode == 'start') {
            intervalIndex = startInterval(e.target, timerCurrent, formatError, sound);
        }
    });
}

Init();