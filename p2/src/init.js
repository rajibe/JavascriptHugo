// Prepara la estructura para crear múltiples juego.
// Usa en la medida de lo posible patrones de diseño
// https://medium.com/@nile.bits/javascript-factory-design-pattern-a-comprehensive-guide-9266b726ee5c

// Crea el primero juego : Ahorcado. (Está preparado el servicio).
// Debes de crear la interfaz, crea dos intercambiables según el tamaño de la pantalla.

// Crea el segundo juego: capitales del mundo.
// Usa esta API-Rest: https://restcountries.com/

import { GamesFactory, GamesTypes } from "./games/GamesFactory.js";
import { UIHangman } from "./games/hangman/uiv1.js";
UIHangman.elements = {
    statusBar: 'stateBar',
    word: 'word',
    timeBar: 'timeBar',
    game: 'juego'
}
const game = new GamesFactory().build(GamesTypes.Hangman, UIHangman);
game.buildGame();
