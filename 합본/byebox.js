function byebox() {
  if (textShow < 15) {
    if (textShow >= 0) {
      push();
      sign();
      background('rgb(15,232,248)');
      bP4.display();
      sign();
      noStroke();
      fill('green');
      rect(0, height-25, width, 25);
      pop();
    }
    if (textShow >= 5 && textShow < 12) {
      signPlate();
      push();
      noStroke();
      textStyle(BOLD);
      textAlign(CENTER);
      textSize(30);
      fill(150);
      text("/*[메모]*/",width/2,200);
      textSize(20);
      fill(0);
      text("//이미지 바꿀 예정, 현재는 삭제함.",width/2,250);
      pop();
    }
    if (textShow >= 12) {
        image(i_house,400,335);
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
      eyemove = false;
      bP4.Leye = bP4.x+40;
      bP4.Reye = bP4.x+40;
      text("여기가 제 집이에요!", bP4.x+30, bP4.y-25);
      if (bP4.x < 200) {
        bP4.x += 2;
      }
    } else if (textShow == 2) {
      eyemove = true;
      bP4.x = 200;
      text("...그런데 뭐죠?", bP4.x+30, bP4.y-25);
    } else if (textShow == 3) {
      text("여기에도 표지판만 덩그러니 놓여있네요", bP4.x+30, bP4.y-25);
    } else if (textShow == 4) {
      text("한번 볼까요?", bP4.x+30, bP4.y-25);
      bP4.move();
      push();
      noStroke();
      fill(0,255,0);
      rect(width/2-25,height-25,50,10);
      pop();
      if (bP4.x + 50 >= width/2+25) {
        textShow++;
      }
    } else if (textShow == 5) {
      text("여기에는 아무것도 적혀있지 않네요...?", bP4.x+30, bP4.y-25);
    } else if (textShow == 6) {
      text("그러면 여기서 할 수 있는것도 없는건가요...?", bP4.x+30, bP4.y-25);
    } else if (textShow == 7) {
      push();
      textSize(30);
      text("왜 제 집이 없어진거죠?!?!", bP4.x+30, bP4.y-25);
      pop();
    } else if (textShow == 8) {
      text("분명히 좋은 집이었다고요!", bP4.x+30, bP4.y-25);
    } else if (textShow == 9) {
      text("지붕에는 i_house라고 적혀있었고... 또...", bP4.x+30, bP4.y-25);
    } else if (textShow == 10) {
      text("누군가가 제 집의 위치를 말할때 되게 특이하게 말했었는데...", bP4.x+30, bP4.y-25);
    } else if (textShow == 11) {
      push();
      for(let i=0; i<textIndex+1 && i<textArr[5].length; i++) {
        if (i == textIndex) {
          fill(255,0,0);
        } else {
          fill(0);
        }
        text(textArr[5][i],310+i*11-20,373);
        if (key == textArr[5][textIndex]) {
          s_type.play();
          textIndex++;
        } else if (textArr[5][textIndex] == ' ') {
          textIndex++;
        }
      }
      pop();
      if (textIndex > 0) {
        text("빈 표지판에 글씨를 쓰는거에요...?", bP3.x+30, bP3.y-25);
      } else if (textIndex == 0) {
        text("400, 335라고 했어요... 뭔가 암호인걸까요...?", bP4.x+30, bP4.y-25);
      }
      if (textIndex == textArr[5].length) {
        if (textShow == 11) {
          s_pop.play();
          textShow++;
        }
      }
    } else if (textShow == 12) {
      text("와, 제 집이에요!!", bP4.x+30, bP4.y-25);
      eyemove = false;
      bP4.Leye = bP4.x+40;
      bP4.Reye = bP4.x+40;
      if (bP4.x + 50 < width/2+50) {
         bP4.x += 2;
      }
    } else if (textShow == 13) {
      eyemove = true;
      if (bP4.x + 50 < width/2+150) {
         bP4.x += 2;
      } else {
        textShow ++;
      }
      text("고마워요!!", bP4.x+30, bP4.y-25);
    } else if (textShow == 14) {
      bP4.x = width/2 + 100;
      push();
      textSize(50);
      text("한편...", width/2, height/2);
      pop();
    }
  } else {
    if (textShow == 15) {
      image(i_end1,0,0);
    } else if (textShow == 16) {
      image(i_end2,0,0);
    } else if (textShow == 17) {
      image(i_end3,0,0);
    } else if (textShow == 18) {
      push();
      textSize(100);
      text("끝",width/2,height/2);
      pop();
    } else if (textShow == 19) {
      image(i_credit,0,0,800,800);
    }
  }
}