//Fake start screen and victory screen created through toggling display:none/display:flex of HTML elements
import './styles/game.css';
import Game from './partials/Game'
import { KEYS } from './settings';

// create a game instance
const game = new Game('game', 512, 256);

let startMenu = document.getElementById('startMenu');
let selected = startMenu.options[startMenu.selectedIndex].value;

let titleScreen = document.getElementById('titleScreen');

let offStart = false; 
let controls = document.getElementById('controls');
let rules = document.getElementById('rules');

document.addEventListener('keydown', event => {
    let selected = startMenu.options[startMenu.selectedIndex].value; //Somehow got the right variable but don't know how.
    if(event.keyCode === 13) {
        if (offStart===true){
            controls.style.display='none';
            rules.style.display='none';
            titleScreen.style.display='flex';
            offStart = !offStart;
            return;
        }
        if (selected === 'start'){
            let titleScreen = document.getElementById('titleScreen');
            titleScreen.style.display='none';
            let realH1 = document.getElementById('realH1');
            realH1.style.display='block';
            let textMessage = document.querySelector('.textMessage');
            textMessage.style.display='block';
           (function gameLoop() {
                game.render();
                requestAnimationFrame(gameLoop);
             })();

        } else if (selected === 'playerControls') {
            let controls = document.getElementById('controls');
            controls.style.display='flex';
           
            let titleScreen = document.getElementById('titleScreen');
            offStart = !offStart;
            titleScreen.style.display='none';

        } else if (selected === 'rules') {
            let rules = document.getElementById('rules');
            rules.style.display='flex';
            let titleScreen = document.getElementById('titleScreen');
            offStart = !offStart;
            titleScreen.style.display='none';
        }
           
    
    }});

