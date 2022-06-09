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
  for(let i = 0; i < 14; i++) {
    aR[i].display();
    aR[i].move();
    aR[i].coll();
  }
  
  if (aP.y == 0) {
    gamestop = true;
    if (stage[nowStage + 1].a == 0) {function display_state() {
      if (state==0) {
        if (mouseX > 185 && mouseX < 185 + 434 && mouseY > 99 + 175 && mouseY < 99 + 333 + 175) {
          state = 1;
        } else {
          if (mouseX > 125 && mouseX < 125 + 434 + 120 && mouseY > 66  + 175&& mouseY < 66 + 333 + 66 + 175) {
            image(lt2,0,175,800,450);
          } else if (mouseX > 65 && mouseX < 65 + 434 + 240 && mouseY > 33 + 175 && mouseY < 33 + 333 + 132 + 175) {
            image(lt3,0,175,800,450);
          } else {
            image(lt4,0,175,800,450);
          }
        }
      }
      
      if (state==1) {
        image(lt1,0,175,800,450);
        lapIn = lapIn + 1;
        p = "컴퓨터그래픽스";
        text_display();
        if (lapIn > 240) {
          push();
          let ps = 50;
          let bx = 303;
          let by = 338;
          translate(bx, by+20);
          rotate(354);
          if (mouseX > 300 && mouseX < 357 && mouseY > 353 && mouseY < 407) {
            fill(100);
            stroke(50);
          } else {
            fill(227);
            stroke(255);
          }
          square(0,0,ps);
          triangle(ps/3,ps/3,ps/3,ps*2/3,ps*2/3,ps/2);
          pop();
          
        }
      }
      
      if (state==2 && game == false) {
        //버튼 그리기
        push();
        fill(0);
        textSize(60);
        textStyle(BOLD);
        text("스테이지", 400, 200);
        pop();
        strokeWeight(2);
        for(let i=0;i<stage.length;i++) { //버튼을 그려준다.
          stage[i].b_draw();
        }  
      }
      
      if (nowStage == 0 && game == true) {
        if (gamestop == false) {
          hellobox();
        } else {
          if (clearS == false) {
            s_clear.play();
            clearS = true;
          }
          drawStageBox();
        }
      } else if (nowStage == 1 && game == true) {
        background(212,200,150);
        line(180,0,180,800);
        if (gamestop == false) {
          bP2.display();
          man001s();
          if (textShow == 0) {
            s_pop.play();
            textShow++;
          } else if (textShow == 1) {
            push();
            fill(0);
            noStroke();
            textStyle(BOLD);
            textSize(20);
            textAlign(RIGHT);
            text("다시 불이 켜졌어요!", bP2.x+30, bP2.y-25);
            pop();
          } else if (textShow == 2) {
            push();
            fill(0);
            noStroke();
            textStyle(BOLD);
            textSize(20);
            textAlign(RIGHT);
            text("그나저나 옆에 할아버지는 누구죠?", bP2.x+30, bP2.y-25);
            pop();
          } else if (textShow == 3) {
            if (bP2.x > 700) {
              push();
              fill(0);
              noStroke();
              textStyle(BOLD);
              textSize(20);
              textAlign(RIGHT);
              text("시작했으니 어서가요!", bP2.x+30, bP2.y-25);
              pop();
            }
            womoo();
            time0(); //타이머 표시 및 시간 관련
            count += 1;
            timer += 1;
          }
        } else {
          s_moo1.stop();
          s_moo2.stop();
          s_moo3.stop();
          if (clearS == false) {
            s_clear.play();
            clearS = true;
          }
          drawStageBox();
        }
      } else if (nowStage == 2 && game == true) {
        if (gamestop == false) {
          if (textShow >= 0 && textShow <= 3) {
            background(100);
            bP3.display();
            sign();
            signPlate();
            push();
            noStroke();
            fill(0);
            rect(0, height-25, width, 25);
            pop();
            push();
            noStroke();
            textStyle(BOLD);
            textAlign(CENTER);
            textSize(30);
            fill(150);
            text("[피하기 게임]",width/2,200);
            textSize(20);
            fill(0);
            text("avoidRect라는 이름을 가진 객체를 생성하는 법은?",width/2,250);
            text("답: ",290,373);
            pop();
          }
          push();
          fill(0);
          noStroke();
          textStyle(BOLD);
          textSize(20);
          textAlign(CENTER);
          if (textShow == 0) {
            s_pop.play();
            textShow++;
          } else if (textShow == 1) {
            text("오셨군요!", bP3.x+30, bP3.y-25);
          } else if (textShow == 3) {
            text("이번에도 맞나요?", bP3.x+30, bP3.y-25);
          } else if (textShow == 4) {
            background(0);
            i_lightoff.play();
            textShow++;
          } else if (textShow == 5) {
            background(0);
            fill(255);
            textSize(30);
            text("너무 어두워요!!", bP3.x+30, bP3.y-25);
          }
          pop();
          if (textShow >= 2 && textShow < 4) {
            if (textShow > 1) {
              push();
              fill(0);
              noStroke();
              textStyle(BOLD);
              textSize(20);
              textAlign(CENTER);
              for(let i=0; i<textIndex+1 && i<textArr[2].length; i++) {
                if (i == textIndex) {
                  fill(255,0,0);
                } else {
                  fill(0);
                }
                text(textArr[2][i],310+i*11+30,373);
                if (key == textArr[2][textIndex]) {
                  s_type.play();
                  textIndex++;
                } else if (textArr[2][textIndex] == ' ') {
                  textIndex++;
                }
              }
              fill(0);
              if (textIndex > 0 && textShow == 2) {
                text("또 봐도 신기하네요!!", bP3.x+30, bP3.y-25);
              } else if (textIndex == 0 && textShow == 2) {
                text("아무리 봐도 전 이게 뭔지 모르겠어요!!!", bP3.x+30, bP3.y-25);
              }
              pop();
              if (textIndex == textArr[2].length) {
                if (textShow == 2) {
                  s_pop.play();
                  textShow++;
                }
              }
            }
          }
          if (textShow == 6) {
            gameOn();
          }
        } else {
          background(0);
          if (clearS == false) {
            s_clear.play();
            clearS = true;
          }
          drawStageBox();
        }
      } else if (nowStage == 3 && game == true) {
        if (gamestop == false) {
          if (textShow >= 0) {
            background('rgb(0,255,173)');
            bP3.display();
            sign();
            signPlate();
            push();
            noStroke();
            fill('green');
            rect(0, height-25, width, 25);
            pop();
            push();
            noStroke();
            textStyle(BOLD);
            textAlign(CENTER);
            textSize(30);
            fill(150);
            text("[미로 게임]",width/2,200);
            textSize(20);
            fill(0);
            text("grid라는 이름을 가진 배열의 첫번째를 뜻하는 것은?",width/2,250);
            text("답: ",290,373);
            pop();
          }
          push();
          fill(0);
          noStroke();
          textStyle(BOLD);
          textSize(20);
          textAlign(CENTER);
          if (textShow == 0) {
            textShow++;
            s_pop.play();
          } else if (textShow == 1) {
            text("앞쪽에 숲이 있는데 마치 미로같아요!", bP3.x+30, bP3.y-25);
          } else if (textShow == 2) {
            push();
            for(let i=0; i<textIndex+1 && i<textArr[3].length; i++) {
              if (i == textIndex) {
                fill(255,0,0);
              } else {
                fill(0);
              }
              text(textArr[3][i],310+i*11+60,373);
              if (key == textArr[3][textIndex]) {
                s_type.play();
                textIndex++;
              } else if (textArr[3][textIndex] == ' ') {
                textIndex++;
              }
            }
            pop();
            if (textIndex > 0 && textShow == 2) {
              text("(신기하군)", bP3.x+30, bP3.y-25);
            } else if (textIndex == 0 && textShow == 2) {
              text("그나저나 이건 뭔지 아시나요?", bP3.x+30, bP3.y-25);
            }
            if (textIndex == textArr[3].length) {
              if (textShow == 2) {
                s_pop.play();
                textShow++;
              }
            }
          }
          pop();
          if (textShow == 3) {    
            m_draw();
          }
        } else {
          background('rgb(0,255,173)');
          if (clearS == false) {
            s_clear.play();
            clearS = true;
          }
          drawStageBox();
        }
      } else if (nowStage == 4 && game == true) {
        if (gamestop == false) {
          if (textShow >= 0) {
            background(255);
            bP3.display();
            sign();
            signPlate();
            push();
            noStroke();
            fill('green');
            rect(0, height-25, width, 25);
            pop();
            push();
            noStroke();
            textStyle(BOLD);
            textAlign(CENTER);
            textSize(30);
            fill(150);
            text("[미로 게임]",width/2,200);
            textSize(20);
            fill(0);
            text("enemy객체의 변수 x와 y의 값과\nbullet객체의 변수 x와 y의 값의 거리를 계산하는 함수는?",width/2,250);
            text("답: ",130,373);
            pop();
          }
          push();
          fill(0);
          noStroke();
          textStyle(BOLD);
          textSize(20);
          textAlign(CENTER);
          if (textShow == 0) {
            textShow ++;
            s_pop.play();
          } else if (textShow == 1) {
            text("이제 슬슬 집에 가까워진것 같은데", bP3.x+30, bP3.y-25);
          } else if (textShow == 2) {
            text("작은 방해꾼들이 많이 보이네요", bP3.x+30, bP3.y-25);
          } else if (textShow == 3) {
            push();
            for(let i=0; i<textIndex+1 && i<textArr[4].length; i++) {
              if (i == textIndex) {
                fill(255,0,0);
              } else {
                fill(0);
              }
              text(textArr[4][i],310+i*11-130,373);
              if (key == textArr[4][textIndex]) {
                s_type.play();
                textIndex++;
              } else if (textArr[4][textIndex] == ' ') {
                textIndex++;
              }
            }
            pop();
            if (textIndex > 0) {
                text("(집 갈 생각에 신났다)", bP3.x+30, bP3.y-25);
              } else if (textIndex == 0) {
                text("아무튼 이거 아시나요?", bP3.x+30, bP3.y-25);
              }
            if (textIndex == textArr[4].length) {
              if (textShow == 3) {
                s_pop.play();
                textShow++;
              }
            }
          }
          pop();
          if (textShow == 4) {
            push();
            shooting_game();
            pop();
          }
        } else {
          if (clearS == false) {
            s_clear.play();
            clearS = true;
          }
          drawStageBox();
          push();
          textSize(25);
          textStyle('bold');
          textAlign(CENTER);
          noStroke();
          fill('rgb(6,177,27)');
          text("최고기록: " + highscore, width/2, height/2-25);
          pop();
        }
      } else if (nowStage == 5 && game == true) {
        if (gamestop == false) {
          byebox();
        } else {
          
        }
      }
    }
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
      console.log("Gameover");
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