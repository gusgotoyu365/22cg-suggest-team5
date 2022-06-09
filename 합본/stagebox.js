function drawStageBox() {
  push();
  fill(230);
  stroke(0);
  rect(150,250,500,300);
  textAlign(CENTER);
  textSize(40);
  fill(0);
  text((nowStage+1) + "스테이지 완료!", width/2, height/2-70);
  pop();
  for (let i = 0; i < 3; i++) {
    cB[i].mouseHover();
    cB[i].display();
  }
}

class clearBox {
  constructor(x, y, t) {
    this.x = x;
    this.y = y;
    this.scl = 80;
    this.type = t;
    this.mH = false;
  }
  
  mouseHover() {
    if (mouseX > this.x && mouseX < this.x + this.scl &&
        mouseY > this.y && mouseY < this.y + this.scl) {
      this.mH = true;
      push();
      strokeWeight(1);
      textSize(20);
      if (this.type == 1) {
          text("스테이지", (this.x*2 + this.scl)/2, this.y + this.scl + 40);
        } else if (this.type == 2) {
          text("다시하기", (this.x*2 + this.scl)/2, this.y + this.scl + 40);
        } else if (this.type == 3 && nowStage != 5) {
          text("다음 스테이지", (this.x*2 + this.scl)/2, this.y + this.scl + 40);
        }
      pop();
      if (mouseIsPressed) {
        if (this.type == 1) {
          textIndex = 0;
          textShow = 0;
          reset();
          gamestop = false;
          game = false;
          clearS = false;
        } else if (this.type == 2) {
          textIndex = 0;
          textShow = 0;
          reset();
          gamestop = false;
          clearS = false;
        } else if (this.type == 3) {
          if (nowStage != 5) {
            textIndex = 0;
            textShow = 0;
            reset();
            nowStage ++;
            gamestop = false;
            clearS = false;
          }
        }
      }
    } else {
      this.mH = false;
    }
  }
  
  display() {
    push();
    if (this.mH == true) {
      stroke(127);
      tint(255,127);
    } else {
      stroke(0);
      noTint();
    }
    fill(255);
    square(this.x-10, this.y-10, 100, 20);

    if (this.type == 1) { //스테이지 버튼
      image(i_stage, this.x, this.y-2, this.scl, this.scl);
    } else if (this.type == 2) { //다시하기 버튼
      image(i_reA, this.x, this.y, this.scl, this.scl);
    } else if (this.type == 3) { //다음 스테이지 버튼
      image(i_neB, this.x, this.y, this.scl, this.scl);
    }
    pop();
  }
}