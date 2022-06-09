function gameOn() {
  background(0);
  push();
  noStroke();
  fill(127);
  rect(200,0,20,800);
  rect(580,0,20,800);
  fill(0,255,0);
  rect(220,0,360,20);
  pop();
  aP.move();
  if (aP.y > 750) {
    push();
    fill(255);
    noStroke();
    textStyle(BOLD);
    textSize(20);
    textAlign(CENTER);
    text("어지러워요!", aP.x+30, aP.y-25);
    pop();
  }
  for(let i = 0; i < 14; i++) {
    aR[i].display();
    aR[i].move();
    aR[i].coll();
  }
  
  if (aP.y == 0) {
    gamestop = true;
    if (stage[nowStage + 1].a == 0) {
      stageclear(nowStage+1);
    }
  }
}

class avoidRect {
  constructor(x, y, d, v) {
    this.direct = d;
    this.v = v;
    if (this.v == 0) {
      this.w = random(50, 300);
      this.h = random(10, 30);
    } else {
      this.w = random(10, 30);
      this.h = random(50, 300);
    }
    this.x = x - this.w;
    this.y = y - this.h;
    this.speed = random(5,12);
  }
  
  move() {
    if (this.v == 0) {
      if (this.direct == 1 && this.x > width) {
        this.x = -this.w;
      } else if (this.direct == -1 && this.x + this.w < 0) {
        this.x = width + this.w;
      }
      this.x += this.speed * this.direct;
    } else if (this.v == 1) {
      if (this.y > height)
        this.y = -this.h;
      this.y += this.speed * this.direct;
    }
  }
  
  coll() {
    if (this.x + this.w > aP.x &&
        this.x < aP.x + aP.scl &&
        this.y + this.h > aP.y &&
        this.y < aP.y + aP.scl) {
      reset();
    }
  }
  
  display() {
    push();
    noStroke();
    fill(200,0,0);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}

class avoidPlayer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scl = 30;
    this.speed = 2;
  }
  
  move() {
    push();
    noStroke();
    fill(255);
    square(this.x, this.y, this.scl);
    pop();
    this.x += (keyIsDown(68) - keyIsDown(65))*this.speed;
    this.y += (keyIsDown(83) - keyIsDown(87))*this.speed;
    this.x = constrain(this.x, 220, 580 - this.scl);
    this.y = constrain(this.y, 0, height - this.scl);
  }
}