import { SVG_NS } from '../settings';

export default class Bomb {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;//(-1) will reverse - multiply to get direction
      // this.x = x;
      // this.y= y;
    //   this.ping = new Audio("public/sounds/pong-01.wav");
      this.reset();

      // let vy = Math.floor((Math.random() * 10) - 5);
      
      // let vx = this.direction * (6 - Math.abs(vy));
      // console.log(vy,vx);

      // document.addEventListener('click', event => {
      //     this.moveFatGurl();
   
      // });
    
    }


    goal(player) {
      this.reset();
      player.score--;
    //   console.log(player.score);
    }

    // moveFatGurl(){
    //     setInterval(()=>{
    //    this.x+=this.direction;
    //    console.log(this.x);
    //   },500);



    // }

    wallCollision(){
      const hitLeft = this.x-this.radius <= 0; //returns a true or false
      // console.log(hitLeft); //would show true
      const hitRight = this.x + this.radius >= this.boardWidth;
      const hitTop = this.y - this.radius <=0;
      const hitBottom = this.y + this.radius >= this.boardHeight;

      if (hitLeft === true || hitRight === true){
        this.vx *= (-1);
        // this.goal();
        // if (hitLeft === true){
        //   console.log('player 2 gets a point');}
        //   if (hitRight === true){
        //     console.log('player 1 gets a point')
        //   }
        }

        
        
      

      if (hitTop === true || hitBottom === true){
        this.vy *= (-1);
      }
    }

    reset() {
   
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;

      this.vy=0;
      while (this.vy === 0){
        this.vy = Math.floor(Math.random() * 10 - 5);}
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

  
      paddleCollision(player1, player2) {
        if (this.vx > 0) {
          let paddle2=player2.coordinates(player2.x,player2.y, player2.width,player2.height); //returns an array
          let [leftX,rightX,topY,bottomY] = paddle2; //array destructuring
        
          //Right edge of ball is >= left edge of the paddle for Player2
          if ((this.x+this.radius >= leftX) && 
              (this.x+this.radius <=rightX) && 
              (this.y >=topY && this.y <=bottomY)){
                this.vx *= (-1);
                // this.ping.play();
              } 
        } else {
          let paddle1=player1.coordinates(player1.x,player1.y, player1.width,player1.height); //returns an array
          let [leftX,rightX,topY,bottomY] = paddle1; //array destructuring
          
          if ((this.x-this.radius <= rightX) && 
             (this.x-this.radius >= leftX) && 
             (this.y >=topY && this.y <=bottomY)){
                this.vx *= (-1);
                // this.ping.play();
                }
          }
        }
          

  render(svg, player1, player2) {

    this.x+= this.vx;
    this.y+= this.vy;
    
    this.wallCollision();
    this.paddleCollision(player1,player2);

    let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'fill', 'red');
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);

        const leftGoal = this.x+this.radius >= this.boardWidth;
        const rightGoal = this.x-this.radius <=0;

      if (rightGoal){
        this.goal(player1);
        this.direction = -1;
      } else if (leftGoal){
        this.goal(player2);
        this.direction= 1;
      }
    

    
    svg.appendChild(circle);
    }
}
