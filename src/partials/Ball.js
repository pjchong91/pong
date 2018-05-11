import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;//(-1) will reverse - multiply to get direction
      // this.x = x;
      // this.y= y;
      this.reset();

      // let vy = Math.floor((Math.random() * 10) - 5);
      
      // let vx = this.direction * (6 - Math.abs(vy));
      // console.log(vy,vx);

      // document.addEventListener('click', event => {
      //     this.moveFatGurl();
   
      // });
    
    }
    reset() {
   
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;

      this.vy=0;
      while (this.vy === 0){
        this.vy = Math.floor(Math.random() * 10 - 5);}
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    // moveFatGurl(){
    //     setInterval(()=>{
    //    this.x+=this.direction;
    //    console.log(this.x);
    //   },500);



    // }

   
    

  render(svg, player1, player2) {

    this.x+= this.vx;
    this.y+= this.vy;
    
    let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'fill', '#FFFFFF');
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);

    svg.appendChild(circle);
}
}
