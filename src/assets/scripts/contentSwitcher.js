export class ContentSwitcher {
    #contentArea = undefined;
    #buttons = undefined;
    #attributeName = undefined;
    #contents = undefined;

    constructor(contentArea, buttons, attributeName, contents) {
        this.#contentArea = contentArea;
        this.#buttons = buttons;
        this.#attributeName = attributeName;
        this.#contents = contents;
    }

    #click = (e) => {
        if (this.#contentArea == undefined || this.#attributeName == undefined)
            return;

        let target = e.target;
        let content = target.getAttribute(this.#attributeName);

        this.switchOn(content);
    }

    #loadScript = (url, callback) => {
        if (!url) return;

        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = url;
        element.onload = callback;

        this.#contentArea.appendChild(element);
    }

    switchOn = (contantName) => {
        if (contantName == null || contantName == undefined)
            return;

        let content = this.#contents[contantName];

        if (content == null || content == undefined)
            return;

        this.#contentArea.innerHTML = '';
        this.#contentArea.innerHTML = content.markup;

        if (content.scripts != undefined) {
            for (const script of content.scripts) {
                this.#loadScript(script.url, script.callback);
            }
        }

        if (content.onload != undefined)
            content.onload();
    }

    init = () => {
        if (this.#buttons == undefined)
            return;

        for (const button of this.#buttons) {
            button.onclick = this.#click;
        }
    }
}