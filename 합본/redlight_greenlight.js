function man001s(){
  if (keyIsPressed === true) {
    keyX = keyX - 2;
  }
  if (keyIsPressed === true && out == 1) {
    reset();
  } else {
    //rect(keyX, yY, 70, 70);
    image(man001, keyX, yY, 30, 70);
  }
} 

function womoo() { //영희가 뒤돌아보는거
  if(count >= a) {
    image(moo2,0,height/2-50,150,100);
    if (count >= b+a) {
      image(moo3,0,height/2-50,150,100);
      out = 1; //------------------------------     
      if (count >= b+c) {
          count = 0;
          a = floor(random(20,150));
          b = floor(random(20,80));
          c = floor(random(20,150));
          out = 0;
      }
    }
  } else {
   image(moo1,0,height/2-50,150,100);
  }
}

function time0() { //타이머 표시 및 시간 관련
  push();
  fill(200);
  rect(height/2-50,20,110,50);
  rect(height/2,0,8,20);
  fill(0);
  rect(height/2-45,23,100,44);
  fill(230);
  rect(height/2-30,10,70,20);
  fill(255,172,183)
  textSize(13);
  textAlign(CENTER);
  text("○△□", width/2+4, 23);
  pop();
  if (timer % 60 == 0){
    time = time - 1;
  }
  if (time <= 0 && keyX > 180) { //시간초과시 초기화
    reset();
  } else if (keyX < 180) {
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

function reset() {
  green0 = 255;
  a = floor(random(20,150));
  b = floor(random(20,80)); 
  c = floor(random(20,150)); 
  yY = random(0,450);
  keyX=770;
  count = 0;
  timer = 0;
  time = 30;
  out = 0;
}