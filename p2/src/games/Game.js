import { UI } from "./ui/ui.js";

export class Game {
    constructor(ui) {
        if (ui != undefined) {
            this.ui = ui;
        } else {
            this.ui = UI;
        }
    }

    setupClock(callBack, time) {
        this.clock = setInterval(callBack,time);
    }

    stopClock() {
        clearInterval(this.clock);
        this.clock = null;
    }

    buildGame() {
        throw new Error('Must be overridden');
    }
}