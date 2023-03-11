'use strict';

export class ContentSwitcher {
    #buttons = undefined;
    #attributeName = undefined;
    #hiddenClass = undefined;
    #contents = undefined;

    constructor(buttons, attributeName, hiddenClass, contents) {
        this.#buttons = buttons;
        this.#attributeName = attributeName;
        this.#hiddenClass = hiddenClass;
        this.#contents = contents;
    }

    #click = (e) => {
        if (this.#attributeName == undefined)
            return;

        let target = e.target;
        let content = target.getAttribute(this.#attributeName);

        this.switchOn(content);
    }

    #viewContent = (block) => {
        if (this.#hiddenClass == undefined || this.#hiddenClass == null) return;

        block.classList.remove(this.#hiddenClass);
    }

    #hiddenContent = (block) => {
        if (this.#hiddenClass == undefined || this.#hiddenClass == null) return;

        if (!block.classList.contains(this.#hiddenClass))
            block.classList.add(this.#hiddenClass);
    }

    #hideAllContents = () => {
        for (const content in this.#contents) {
            this.#hiddenContent(this.#contents[content]);
        }
    }

    switchOn = (contantName) => {
        if (contantName == null || contantName == undefined)
            return;

        let content = this.#contents[contantName];

        if (content == null || content == undefined)
            return;

        this.#hideAllContents();
        this.#viewContent(content);
    }

    init = () => {
        if (this.#buttons == undefined)
            return;

        for (const button of this.#buttons) {
            button.onclick = this.#click;
        }

        this.#hideAllContents();
    }
}