import './styles/game.css';
import Game from './partials/Game'
import { KEYS } from './settings';

// create a game instance
const game = new Game('game', 512, 256);

// game.render();

// console.log('what is jesus');
let startMenu = document.getElementById('startMenu');
let selected = startMenu.options[startMenu.selectedIndex].value;
// console.log(selected);

let titleScreen = document.getElementById('titleScreen');

let offStart = false; 
let controls = document.getElementById('controls');
let rules = document.getElementById('rules');

//Press 'enter' off of start page to return to start
// console.log(titleScreen);

// let realH1 = document.getElementById('realH1');
//             console.log(realH1);
// startMenu.onsubmit = function() {
//     console.log('what the pizza')
// }

document.addEventListener('keydown', event => {
    let selected = startMenu.options[startMenu.selectedIndex].value; //Somehow got the right variable but don't know how.
    console.log(selected, 'SELECTED');
    if(event.keyCode === 13) {
        if (offStart===true){
            controls.style.display='none';
            rules.style.display='none';
            console.log('buttness')
            titleScreen.style.display="flex";
            offStart = !offStart;
            return;
        }
        if (selected === 'start'){
            let titleScreen = document.getElementById('titleScreen');
            titleScreen.style.display="none";
            console.log(titleScreen);
            let realH1 = document.getElementById('realH1');
            console.log(realH1);
            realH1.style.display="block";
            let textMessage = document.querySelector('.textMessage');
            textMessage.style.display="block";
           (function gameLoop() {
                game.render();
                requestAnimationFrame(gameLoop);
             })();

        } else if (selected === 'playerControls') {
            let controls = document.getElementById('controls');
            controls.style.display="flex";
           
            let titleScreen = document.getElementById('titleScreen');
            console.log(titleScreen);
            offStart = !offStart;
            titleScreen.style.display="none";
            console.log('yo mama fat')
            console.log(offStart);
        } else if (selected === 'rules') {
            let rules = document.getElementById('rules');
            rules.style.display="flex";
            // console.log(titleScreen);
            let titleScreen = document.getElementById('titleScreen');
            offStart = !offStart;
            titleScreen.style.display="none";
            console.log('yo mama fat')
        }
           
    
    }});

// startMenu.options[startMenu.selected].addClass('hasArrow');
// console.log(selected);

// (function gameLoop() {
//     game.render();
//     requestAnimationFrame(gameLoop);
// })();
