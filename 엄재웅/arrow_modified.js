let arrowArr = [];

function setup() {
  createCanvas(400, 400);
  arrowArr[0] = new Arrow(200, 200);
  arrowArr[1] = new Arrow(50, 50);
  arrowArr[2] = new Arrow(300, 300);
}

function draw() {
  background(220);
  for(let i=0; i<3; i++) {
    arrowArr[i].display();
  }
}

class Arrow {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    this.sA = dist(this.x,this.y,mouseX,mouseY)/50+2;
    this.angleA = atan2(mouseY - this.x, mouseX - this.y);
    push();
    translate(this.x,this.y);
    angleMode(DEGREES);
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