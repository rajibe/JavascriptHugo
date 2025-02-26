import { Game } from "../Game.js";
import { Generalservice } from "../services/GeneralService.js";

export class HangmanGame extends Game {
    constructor(ui) {
        super(ui);
        this.generalservice = new Generalservice(
            "https://random-word-api.herokuapp.com", 
            this.newWord, this.fail);
    }

    buildGame() {
        this.ui.init(this.ui.elements.game);
        this.generalservice.fetchData("word?lang=es");
    }

    newWord(data) {
        console.log(data[0]);
    }
}