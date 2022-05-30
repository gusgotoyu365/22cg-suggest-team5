function preload(){
  moo1 = loadImage('FirstMoo.png');
  moo2 = loadImage('SecondMoo.png');
  moo3 = loadImage('ThirdMoo.png');
  man001 = loadImage('001.png');
}
function setup() {
  createCanvas(500,500);
  
  reset();
}

function draw() {
  
  background(212,200,150);
  
  line(0,72,500,72);
  
  womoo();
  man001s();
  
  time0();
  
  count += 1;
  timer += 1;
  textSize(12);
  text("9초 안에 들어오시오", 30, 36);
  fill(255,172,183)
  textSize(80);
  text("○△□", width/2-100, height/2-75);
  textSize(32);
}

function man001s(){
  if (keyIsPressed === true) {
    keyY-=2; //----------------move
  }
  
  if (keyIsPressed === true && out == 1){
    reset();
  }
  
  else {
    image(man001,xX,keyY,30,70);
  }
}

function womoo(){    
  
  if(count >= a){
    image(moo2,width/2-50,0,150,100);
    if (count >= b+a){
      image(moo3,width/2-50,0,150,100);
      out = 1; //------------------------------     
      if (count >= b+c){
          count = 0;
          a = floor(random(100,150));
          b = floor(random(150,200));
          c = floor(random(150,200));
          out = 0;
      }
    }
  }
  
  else {
   image(moo1,width/2-50,0,150,100);
  }
}

function time0 (){
    if (timer % 60 == 0){
      time += 1
    }

    if (time == 10 && keyY > 25 ){ //--------time------
      reset();
    } 
    
    else if (keyY < 25 ){
      noLoop()
      fill(0)
      text("WIN", width/2-30, height/2);
    }
  
    else {
      fill(0)
      text(time, 10,37);
    }
}

function reset(){
  green0 = 255;
  
  a = floor(random(50,100));
  b = floor(random(50,80)); 
  c = floor(random(150,200)); 
  
  keyY = 450;
  xX=random(0,450);
  count = 0;
  timer = 0;
  time = 0;
  
  out = 0;
}
