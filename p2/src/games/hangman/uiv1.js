import {UIBuilder} from '../ui/ui.js';


export const UIHangman = UIBuilder.init();
UIHangman.init = (gameName) => {
    let element = document.getElementById(gameName);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = './src/games/hangman/game.css';
    document.head.appendChild(link);
    let info = document.createElement('div');
    info.classList.add('info');
    element.appendChild(info);
    let stateBar = document.createElement('div');
    stateBar.classList.add('stateBar');
    element.appendChild(stateBar);
    let word = document.createElement('div');
    word.classList.add('word');
    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    let content = document.createElement('div');
    content.classList.add('content');
    content.appendChild(word);
    content.appendChild(keyboard);
    element.appendChild(content);
    const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    letters.split('').forEach(item => {
        let key = document.createElement('div');
        key.classList.add('key');
        key.textContent = item;
        keyboard.appendChild(key);
    });
}
