import { HangmanGame } from "./hangman/Game.js";

export const GamesTypes = {
    Hangman: 0
}

export class GamesFactory {
    build(type,ui) {
        switch(type) {
            case GamesTypes.Hangman:
                return new HangmanGame(ui);
            default:
                return null;
        } 
    }
}