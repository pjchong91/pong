import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight, x, y) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 10;//(-1) will reverse - multiply to get direction
      this.x = x;
      this.y= y;

      document.addEventListener('click', event => {
          this.moveFatGurl();
   
   
 
    // this.x+=this.direction;
    // console.log(this.x);
      });
    
    }
    reset() {
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;
    }

    moveFatGurl(){
        setInterval(()=>{
       this.x+=this.direction;
       console.log(this.x);
      },500);

    }
    

  render(svg, player1, player2) {
    
 

    let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'fill', '#FFFFFF');
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);

    svg.appendChild(circle);
}
}
