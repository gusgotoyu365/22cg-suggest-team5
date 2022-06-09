function man001s(){
  if (count < a+b) {
    if (keyX >= 80 && textShow == 3) {
      keyX = keyX - 1;
    }
  }
  if (keyIsPressed == true  && textShow == 3) {
    bP2.x -= 1;
  }
  if (keyIsPressed === true && out == 1) {
    reset();
  } else {
    image(man001, keyX, yY, 30, 70);
  }
}

function womoo() { //영희가 뒤돌아보는거  
  if(count >= a) {
    image(moo2,0,height/2-50,150,100);
    if (played_moo2 == false) {
      s_moo2.play();
      played_moo2 = true;
    }
    if (count >= b+a) {
      image(moo3,0,height/2-50,150,100);
      if (played_moo3 == false) {
        s_moo3.play();
        played_moo1 = false;
        played_moo3 = true;
      }
      out = 1; //------------------------------     
    }
    if (count >= a+b+c) {
      count = 0;
      a = floor(random(50,100));
      b = floor(random(50,100));
      c = floor(random(50,70));
      out = 0;
    }
  } else {
    image(moo1,0,height/2-50,150,100);
    if (played_moo1 == false) {
      s_moo1.play();
      played_moo1 = true;
      played_moo2 = false;
      played_moo3 = false;
    }
  }
}

function time0() { //타이머 표시 및 시간 관련
  push();
  stroke(0);
  fill(200);
  rect(height/2-50,20,110,50);
  rect(height/2,0,8,20);
  fill(0);
  rect(height/2-45,23,100,44);
  fill(230);
  rect(height/2-30,10,70,20);
  fill(255,172,183);
  textSize(13);
  textAlign(CENTER);
  stroke(255,172,183);
  text("○△□", width/2+4, 23);
  pop();
  if (timer % 60 == 0){
    time = time - 1;
  }
  if (time <= 0 && bP2.x > 180) { //시간초과시 초기화
    reset();
  } else if (bP2.x < 180) {
    gamestop = true;
    if (stage[nowStage + 1].a == 0) {
      stageclear(nowStage+1);
    }
  } else {
    fill(255,0,0);
    textSize(30);
    textAlign(LEFT);
    if (time >= 10) {
      text("00:" + time, height/2-32,56);
    } else {
      text("00:0" + time, height/2-32,56);
    }
  }
}