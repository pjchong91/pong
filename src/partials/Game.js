import Board from './Board';
import Paddle from './Paddles';
import Ball from './Ball';
import Bomb from './Bomb';
import BuffBall from './BuffBall'
import Score from './Score';
import { SVG_NS, KEYS } from '../settings';

let textMessage = document.querySelector('.textMessage p')
export default class Game {

	constructor(element, width, height, spaceBar) {
		this.element = element;
		this.width = width;
		this.height = height;
		KEYS.spaceBar;
	
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;

		this.pause = false;

		
		this.score1= new Score(this.width/2-50,30,30);
		this.score2= new Score(this.width/2+25, 30, 30);

		document.addEventListener('keydown', event => {
			if(event.key === KEYS.spaceBar) {
					this.pause = !this.pause;
			
			}});


		this.gameElement = document.getElementById(this.element);
		this.board = new Board(this.width, this.height);

		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z,
			'player1'
			
		);

			this.player2 = new Paddle(
				this.height,
				this.paddleWidth,
				this.paddleHeight,
				(this.width - this.boardGap-this.paddleWidth),
				((this.height - this.paddleHeight) / 2),
				KEYS.up,
				KEYS.down,
				'player2',

			);

			this.ballA = new Ball (10, this.width, this.height); 
			this.ballB = new Ball (5, this.width, this.height); 

			this.bomb = new Bomb (10, this.width, this.height); 
			this.buff = new BuffBall (10, this.width, this.height);
	}


//If either player gains a +10 point advantage, game provides set paddle height
	sizePaddle(){ //A player

		if (this.player1.score>=this.player2.score+10){
			this.player2.height = 60;
			this.player1.height = 30;
			textMessage.innerHTML = 'Alright. I think P2 needs some help and P1 needs more of a challenge!'

		}
		if (this.player2.score>=this.player1.score+10){
			this.player1.height = 60;
			this.player2.height = 30;
			textMessage.innerHTML = 'Alright. I think P1 needs some help and P2 needs more of a challenge!'
		}
	}

//Cumulatively check for buffs and debuffs
	applyBuffandDebuff(){
		this.player1.height = 56 + (5*this.player1.buffCount)-(5*this.player1.debuffCount);
		this.player2.height = 56 + (5*this.player2.buffCount) - (5*this.player2.debuffCount);
		if (this.player1.height <10) {
			this.player1.height = 10
		}

		if (this.player2.height<10 ) {
			this.player2.height = 10

		}
	}
	
	render() {

		//if pause
		if (this.pause === true){
			return;
		}

		//end game, player 1 victory
		if (this.player1.score===20){
			let gameBox = document.getElementById('game');
			gameBox.style.display='none';
			let victoryScreen = document.getElementById('victory')
			victoryScreen.style.display='flex';
			let victoryAnnouncement = document.querySelector('.endGame p');
			let textMessage = document.querySelector('.textMessage p')
			textMessage.innerHTML = 'Good game!'
			victoryAnnouncement.innerHTML = 'Victory to Player 1!!'

			return;
		}
		
		//end game, player 2 victory
		if (this.player2.score===20){
			let gameBox = document.getElementById('game');
			gameBox.style.display='none';
			let victoryScreen = document.getElementById('victory')
			victoryScreen.style.display='flex';
			let victoryAnnouncement = document.querySelector('.endGame p');
			let textMessage = document.querySelector('.textMessage p')
			textMessage.innerHTML = 'Good game!'
			victoryAnnouncement.innerHTML = 'Victory to Player 2!!'
			return;
		}

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
			svg.setAttributeNS(null, 'width', this.width);
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
			this.gameElement.appendChild(svg);
			this.board.render(svg);
			this.player1.render(svg);
			this.player2.render(svg);
			this.ballA.render(svg, this.player1,this.player2);
			this.ballB.render(svg, this.player1,this.player2);
			this.bomb.render(svg, this.player1, this.player2);
			this.buff.render(svg,this.player1,this.player2);
			this.score1.render(svg,this.player1.score);
			this.score2.render(svg,this.player2.score);
			this.sizePaddle(svg, this.player1, this.player2);
			this.applyBuffandDebuff(svg, this.player1, this.player2);
		}

		}

	

