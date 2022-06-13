function hellobox() {
  background(255);
  stroke(0);
  strokeWeight(1);
  fill(0);
  if (scene == 0) {
    let tx = 100;
    let ty = 150;
    textStyle(BOLD);
    textSize(20);
    push();
    textAlign(CENTER);
    if (textShow == 7) {
      bP.x = width/2-25;
      bP.y = height-75;
      stroke(0);
      fill(255);
      rect(310,757,181,30);
      fill(0);
      noStroke();
      text("키를 입력하여 진행",width/2,height-20);  
    } else {
      stroke(0);
      fill(255);
      rect(323,757,156,30);
      fill(0);
      noStroke();
      text("SPACE키로 진행",width/2,height-20);
    }
    pop();
    textAlign(LEFT);

    push();
    noFill();
    rect(30,30,720,40);
    rect(650,30,100,40);
    rect(30,30,720,500);
    pop();
    
    push();
    noStroke();
    if (textShow > 0) {
      text("22cg",tx-50,ty);
      text("| 여러분~ p5.js를 이용해서",tx,ty);
    }
    if (textShow > 1) {
      text("| 즐거운 컴퓨터그래픽스 수업을 해봅시다~~",tx,ty+25);
    }
    if (textShow > 2) {
      text("| 먼저 원부터 그려볼까요?",tx,ty+50);
    }
    if (textShow > 3) {
      text("| square를 사용해서 화면 중앙에 크기가 50인 원을 만드려면",tx,ty+75);
    }
    if (textShow > 4) {
      text("| ellipse(width/2,height/2,50,50);을 쓰면 됩니다.",tx,ty+100);
    }
    if (textShow > 5) {
      text("| 여러분들도 따라해보세요~~",tx,ty+125);
    }
    if (textShow > 6) {
      text("| Me",674,326);
      push();
      textAlign(CENTER);
      for(let i=0; i<textIndex+1 && i<textArr[0].length; i++) {
        if (i == textIndex) {
          fill(255,0,0);
        } else {
          fill(0);
        }
        text(textArr[0][i],310+i*11+10,176+150);
        if (key == textArr[0][textIndex]) {
          s_type.play();
          textIndex++;
        } else if (textArr[0][textIndex] == ' ') {
          textIndex++;
        }
      }
      pop();
      if (textIndex == textArr[0].length) {
        if (textShow == 7) {
          s_pop.play();
          textShow++;
        }
      }
    }
    if (textShow > 7) {
      text("22cg",tx-50,ty+232);
      text("| 와 잘했어요~~",tx,ty+232);
      push();
      stroke(0);
      fill(255);
      ellipse(ellipseX,ellipseY,50,50);
      pop();
      if (ellipseY - 50 > height) {
        ellipseY = -50;
        textIndex = 0;
        scene = 1;
      }
    }
    if (textShow > 8) {
      text("| 이번에는 이 공을",tx,ty+257);
    }
    if (textShow > 9) {
      text("| 움직이게 해볼까요?",tx,ty+283);
    }
    if (textShow > 10) {
      text("| y좌표를 바꾸면 됩니다.",tx,ty+308);
      ellipseY += 7;
    }
    pop();
  } 
  else if (scene == 1) {
    bP.display();
    push();
    noStroke();
    fill(227);
    rect(0, height-25, width, 25);
    pop();
    push();
    textStyle(BOLD);
    textSize(20);
    textAlign(CENTER);
    noStroke();
    if (ellipseX > -25) {
      push();
      stroke(0);
      fill(255);
      ellipse(ellipseX,ellipseY,50,50);
      pop();
      if (ellipseY + 25 >= height-75 && ellcoll == false) {
        ellcoll = true;
        s_punch.play();
        bP.y += 10;
        push();
        image(i_hit,366,711,70,50);
        pop();
      } else if (ellcoll == true) {
        ellipseX -= 8;
        ellipseY -= 3;
      } else {
        ellipseY += 7;
      }
    } else if (textShow >= 11 && textShow <= 12) {
      text("아야!", width/2, height-90);
      bP.y = height-75;
      if (textShow == 11) {
        textShow++;
      }
    } else if (textShow == 13) {
      text("누구야!!", width/2, height-90);
    } else if (textShow == 14) {
      text("!!", width/2, height-90);
    } else if (textShow == 15) {
      bP.eye = 15;
      text("사람이었군요!", width/2, height-90);
    } else if (textShow == 16) {
      text("제가 집으로 돌아가야 하는데", width/2, height-90);
    } else if (textShow == 17) {
      text("이대로는 움직일 수가 없어요...", width/2, height-90);
      if (bP.eye > 10) {
        bP.eye--;
        bP.x += random(-1, 1);
        bP.y += random(-1, 1);
      }
    } else if (textShow == 18) {
      text("도와줘요...", bP.x+30, bP.y-25);
      if (bP.x+50 >= 482) {
        s_pop.play();
        textShow++;
      } else {
        push();
        noStroke();
        fill(0,255,0);
        rect(432,776,50,10);
        pop();
      }
    } else if (textShow == 19) {
      text("우와 대단해요!!", bP.x+30, bP.y-25);
    } else if (textShow == 20) {
      text("오른쪽으로 갑시다!", bP.x+30, bP.y-25);
      if (bP.x+50 >= width) {
        s_pop.play();
        textShow++;
      } else {
        push();
        noStroke();
        fill(0,255,0);
        rect(width-50,776,50,10);
        pop();
      }
    } else if (textShow == 21) {
      bP.x = 0;
      scene++;
    }
    if (textShow > 11) {
      push();
      fill(255);
      stroke(0);
      rect(323,27,156,30);
      pop();
      if (textShow > 11 && textShow < 18 || textShow > 18) {
        push();
        fill(0);
        text("SPACE키로 진행",width/2,50);
        pop();
      }
      if (textShow == 18) {
        push();
        fill(0);
        text("A / D 키로 진행",width/2,50);
        pop();
      }
      if (bP.eye < 15 && textShow == 14) {
        bP.eye++;
      }
      if (bP.eye < 15 && textShow == 19) {
        bP.eye++;
      }
      if (textShow > 17) {
        bP.move();
      }
    }
    pop();
  }
  else if (scene == 2) {
    if (textShow < 31) {
      textStyle(BOLD);
      textSize(20);
      textAlign(CENTER);
      noStroke();
      bP.display();
      push();
      noStroke();
      fill(227);
      rect(0, height-25, width, 25);
      pop();
      sign();
    }
    if (textShow == 21) {
      if (bP.x < 100) {
        bP.x++;
      } else {
        textShow++;
      }
      eyemove = false;
      bP.Leye = bP.x+40;
      bP.Reye = bP.x+40;
      text("분명 여기쯤이었는데...", bP.x+30, bP.y-25);
    } else if (textShow == 22) {
      eyemove = true;
      bP.x = 100;
      text("아! 맞아요!", bP.x+30, bP.y-25);
    } else if (textShow == 23) {
      text("집으로 가는길은 안보이는데", bP.x+30, bP.y-25);
    } else if (textShow == 24) {
      text("이런 표지판들만 보여요!", bP.x+30, bP.y-25);
    } else if (textShow == 25) {
      text("한번 가까이 가봐요!", bP.x+30, bP.y-25);
      bP.move();
      push();
      noStroke();
      fill(0,255,0);
      rect(width/2-25,height-25,50,10);
      pop();
      if (bP.x + 50 >= width/2+25) {
        textShow++;
      }
    } else if (textShow == 26) {
      text("여기에는 정체불명의 문제가 적혀있어요", bP.x+30, bP.y-25);
    } else if (textShow == 27) {
      text("저는 도저히 모르겠는걸요...", bP.x+30, bP.y-25);
    } else if (textShow == 28) {
      text("도와주세요!!", bP.x+30, bP.y-25);
    } else if (textShow == 30) {
      text("이게 정답인건가요?", bP.x+30, bP.y-25);
    } else if (textShow == 31) {
      background(0);
      i_lightoff.play();
      textShow++;
    } else if (textShow == 32) {
      background(0);
      push();
      fill(255);
      text("그런가 보네요!", bP.x+30, bP.y-25);
      pop();
    } else if (textShow == 33) {
      gamestop = true;
      if (stage[nowStage + 1].a == 0) {
        stageclear(nowStage+1);
      }
    }
    if (textShow > 20 && textShow < 31) {
      /*push();
      fill(255);
      stroke(0);
      rect(323,27,156,30);
      pop();
      text("SPACE키로 진행",width/2,50);*/
      
      if (textShow > 25) {
        signPlate();
        push();
        textSize(30);
        fill(150);
        text("[무궁화 꽃이 피었습니다]",width/2,200);
        pop();
        text("키가 눌려지고 있는 것을 감지해서 반환하는 시스템 변수는?",width/2,250);
        text("답: ",290,373);
      }
      if (textShow > 28 && textShow < 31) {
        push();
        for(let i=0; i<textIndex+1 && i<textArr[1].length; i++) {
          if (i == textIndex) {
            fill(255,0,0);
          } else {
            fill(0);
          }
          text(textArr[1][i],310+i*11+30,373);
          if (key == textArr[1][textIndex]) {
            s_type.play();
            textIndex++;
          } else if (textArr[1][textIndex] == ' ') {
            textIndex++;
          }
        }
        pop();
        if (textIndex > 0 && textShow == 29) {
            text("우와, 글씨가 생기고 있어요!!", bP.x+30, bP.y-25);
          }
        if (textIndex == textArr[1].length) {
          if (textShow == 29) {
            s_pop.play();
            textShow++;
          }
        }
      }
    }
  }
}

function sign() {
  push();
  stroke(0);
  strokeWeight(1);
  fill('rgb(243,238,211)');
  rect(width/2-25,height-75,50,25);
  rect(width/2-5,height-50,10,25);
  pop();
}

function signPlate() {
  push();
  stroke(0);
  strokeWeight(1);
  fill('rgb(243,238,211)');
  rect(50,110,700,350);
  pop();
}

class boxPlayer {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.eye = 0;
    this.Leye = this.x+14;
    this.Reye = this.x+50-14;
  }
  
  move() {
    this.x += ((keyIsDown(68)|keyIsDown(39)) - (keyIsDown(65)|keyIsDown(37)))*4;
    this.x = constrain(this.x, 0, width - 50);
  }
  
  display() {
    if (nowStage != 1 && eyemove == true) {
      if (((keyIsDown(68)|keyIsDown(39)) - (keyIsDown(65)|keyIsDown(37))) == 0) {
        this.Leye = this.x+14;
        this.Reye = this.x+36;
      } else if (keyIsDown(68)|keyIsDown(39)) {
        this.Leye = this.x+40;
        this.Reye = this.x+40;
      } else if (keyIsDown(65)|keyIsDown(37)) {
        this.Leye = this.x+10;
        this.Reye = this.x+10;
      }
    } else if (eyemove == true) {
      if (keyIsPressed && textShow == 3) {
        this.Leye = this.x+10;
        this.Reye = this.x+10;
      } else {
        this.Leye = this.x+14;
        this.Reye = this.x+36;
      }
    }
    
    push();
    fill(255);
    stroke(0);
    rect(this.x,this.y,50,50);
    fill(0);
    ellipse(this.Leye,this.y+21,5,this.eye);
    ellipse(this.Reye,this.y+21,5,this.eye);
    pop();
  }
}