function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(255);
  arrow(200,200,8);
  fill(0,100,255);
  arrow(400,600,8);
  fill(255,255,0);
  arrow(600,400,8);
  fill(0,255,0);
}
function arrow(x,y,length) {
  var angle = atan2(mouseY - y, mouseX-x);
  push();
  translate(x,y);
  rotate(angle);
  beginShape();
  vertex(0,-length);
  vertex(5*length,-length);
  vertex(5*length,-3*length);
  vertex(9*length,0);
  vertex(5*length,3*length);
  vertex(5*length,length);
  vertex(0,length);
  endShape(CLOSE);
  pop();
}
