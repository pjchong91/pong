import Board from './Board';
import Paddle from './Paddles';
import Ball from './Ball';
import Bomb from './Bomb';
import Score from './Score';
import { SVG_NS, KEYS } from '../settings';



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
					console.log(this.pause);
			
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
			
		);

			this.player2 = new Paddle(
				this.height,
				this.paddleWidth,
				this.paddleHeight,
				(this.width - this.boardGap-this.paddleWidth),
				((this.height - this.paddleHeight) / 2),
				KEYS.up,
				KEYS.down

				
		
			);

			this.ballA = new Ball (10, this.width, this.height); //????? Why are we using width and height
			this.ballB = new Ball (5, this.width, this.height); //????? Why are we using width and height

			this.bomb = new Bomb (15, this.width, this.height); //????? Why are we using width and height
		

		// Other code goes here...

		// console.log(this.player1);
		// console.log(this.player2);
	}
	
	render() {
		// More code goes here...
		if (this.pause === true){
			return;
		} else {

		this.gameElement.innerHTML = '';

		// console.log(this.player1.score);
	


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
			this.score1.render(svg,this.player1.score);
			this.score2.render(svg,this.player2.score);
			
		}
		
		// if (this.player1.score>this.player2.score){
		// 	this.player1.paddleHeight=10;
		// 	console.log(this.player1.paddleHeight);
		// }

	}

}