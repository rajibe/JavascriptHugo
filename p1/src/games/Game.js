import { UI } from "./ui/ui.js";

export class Game {
    constructor(ui) {
        if (ui != undefined) {
            this.ui = ui;
        } else {
            this.ui = UI;
        }
    }

    buildGame() {
        throw new Error('Must be overridden');
    }
}