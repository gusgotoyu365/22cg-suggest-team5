class Arrow {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.cR = random(100,255);
    this.cG = random(100,255);
    this.cB = random(100,255);
  }
  
  display() {
    this.sA = dist(this.x,this.y,mouseX,mouseY)/50+2;
    this.angleA = atan2(mouseY - this.y, mouseX - this.x);
    push();
    fill(this.cR,this.cG,this.cB);
    translate(this.x,this.y);
    rotate(this.angleA);
    beginShape();
    vertex(-2*this.sA,-this.sA);
    vertex(2*this.sA,-this.sA);
    vertex(2*this.sA,-2*this.sA);
    vertex(4*this.sA,0);
    vertex(2*this.sA,2*this.sA);
    vertex(2*this.sA,this.sA);
    vertex(-2*this.sA,this.sA);
    endShape(CLOSE);
    pop();
  }
}