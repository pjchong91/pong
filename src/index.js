import './styles/game.css';
import Game from './partials/Game'
import { KEYS } from './settings';

// create a game instance
const game = new Game('game', 512, 256);

// game.render();

console.log('what is jesus');
let startMenu = document.getElementById('startMenu');
let selected = startMenu.options[startMenu.selectedIndex].value;
console.log(selected);
// startMenu.onsubmit = function() {
//     console.log('what the pizza')
// }

document.addEventListener('keydown', event => {
    let selected = startMenu.options[startMenu.selectedIndex].value; //Somehow got the right variable but don't know how.
    if(event.keyCode === 13) {
        if (selected === 'start'){
            let titleScreen = document.getElementById('titleScreen');
            titleScreen.style.display="none";
            console.log(titleScreen);
            let realH1 = document.getElementById('realH1');
            console.log(realH1);
            realH1.style.display="block";
           (function gameLoop() {
                game.render();
                requestAnimationFrame(gameLoop);
             })();

        } else {
            console.log('yo mama fat')
        }
           
    
    }});

// startMenu.options[startMenu.selected].addClass('hasArrow');
// console.log(selected);

// (function gameLoop() {
//     game.render();
//     requestAnimationFrame(gameLoop);
// })();
