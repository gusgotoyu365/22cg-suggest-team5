let gamestop = false;

//시작 화면
let lapIn = 0;
let x = -160;
let n = 0;
let p = [];
let arrowArr = [];
let state = 0;
let i = 0;
let dragging = false;
let nowStage = 0;

let menu_sound = false; //메뉴 소리

//스테이지 화면
let overBox = []; //버튼위에 마우스가 있는지 나타내는 변수
let game = false; //게임 실행중을 나타내는 변수
let stage = [];
let b_size = 100; //버튼사이즈

//스테이지 박스
let cB = [];
let clearS = false;

//1스테이지
let textArr = [];
let textIndex = 0;
let textShow = 0;
let ellipseX = 800/2, ellipseY = 800/2;
let scene = 0;
let ellcoll = false;
let eyemove = true;

//무궁화 게임
let played_moo1 = false;
let played_moo2 = false;
let played_moo3 = false;
let bP2;

//피하기 게임
let aP;
let aR = [];

//미로 게임
let cols, rows; 
let m_s = 50;
let grid = [];
let gameEnd = false;

let current;
let player;
let next_p;
let stack = [];

let m_startgame = false;

let goMove = false;
let ones = true;

//슈팅 게임
let bullets = [];
let enemies = [];
let score = 0; 
let sP;
let highscore = 0;

function preload(){
  soundFormats('mp3');
  //리셋
  s_reset = loadSound('audios/reset.mp3');
  //메뉴선택
  s_menusel = loadSound('audios/menu_sel.mp3');
  s_start = loadSound('audios/start.mp3');
  s_startfast = loadSound('audios/start_fast.mp3');
  //노트북 사진, 1이 다 열린상태
  lt1= loadImage('images/laptop1.jpg');
  lt2= loadImage('images/laptop2.jpg');
  lt3= loadImage('images/laptop3.jpg');
  lt4= loadImage('images/laptop4.jpg');
  //무궁화 게임
  moo1 = loadImage('images/FirstMoo.png');
  moo2 = loadImage('images/SecondMoo.png');
  moo3 = loadImage('images/ThirdMoo.png');
  man001 = loadImage('images/001.png');
  s_moo1 = loadSound('audios/moo1.mp3');
  s_moo2 = loadSound('audios/moo2.mp3');
  s_moo3 = loadSound('audios/moo3.mp3');
  s_moo1.playMode('restart');
  s_moo2.playMode('restart');
  s_moo3.playMode('restart');
  //스테이지 박스
  s_clear = loadSound("audios/clear.mp3");
  i_reA = loadImage("images/reArrow.png");
  i_stage = loadImage("images/stage.png");
  i_neB = loadImage("images/nextButton.png");
  //1스테이지
  s_type = loadSound('audios/typing.mp3');
  s_pop = loadSound('audios/textpop.mp3');
  s_punch = loadSound('audios/punch.mp3');
  i_lightoff = loadSound('audios/lightoff.mp3');
  i_hit = loadImage('images/hit.png');
  //슈팅 게임
  s_shoot = loadSound('audios/shoot.mp3');
  //마지막
  i_house = loadImage('images/house.png');
  i_end1 = loadImage('images/end1.png');
  i_end2 = loadImage('images/end2.png');
  i_end3 = loadImage('images/end3.png');
  i_credit = loadImage('images/credit.png');
}

function setup() {
  createCanvas(800, 800);
  //화살표를 배열로 생성
  arrowArr[0] = new Arrow(200, 200); //x좌표, y좌표
  arrowArr[1] = new Arrow(50, 50);
  arrowArr[2] = new Arrow(702, 62);
  arrowArr[3] = new Arrow(100, 500);
  arrowArr[4] = new Arrow(700, 650);
  arrowArr[5] = new Arrow(600, 300);
  arrowArr[6] = new Arrow(430, 100);
  arrowArr[7] = new Arrow(300, 700);
  //버튼을 배열로 생성
  stage.push(new stage_c(1,150,300,1));  // 스테이지, 좌표x,좌표y,활성화여부(1=활성화)
  stage.push(new stage_c(2,300,300,0));
  stage.push(new stage_c(3,450,300,0));
  stage.push(new stage_c(4,300,500,0));
  stage.push(new stage_c(5,450,500,0));
  stage.push(new stage_c(6,600,500,0));
  for(let i=0; i<stage.length;i++){
    overBox.push(false); //마우스 인식 off로 버튼마다 생성
  }
  //스테이지 박스
  cB[0] = new clearBox(210, 405, 1);
  cB[1] = new clearBox(360, 405, 2);
  cB[2] = new clearBox(510, 405, 3);
 
  //1스테이지
  bP = new boxPlayer(width/2-25, height-75);
  textArr[0] = "ellipse(width/2,height/2,50,50);";
  textArr[1] = "keyIsPressed";
  textArr[2] = "class avoidRect {}";
  textArr[3] = "grid[0]";
  textArr[4] = "dist(enemy.x, enemy.y, bullet.x, bullet.y);";
  textArr[5] = "image(i_house,400,335);";
  
  //무궁화게임
  nowStage = 1;
  bP2 = new boxPlayer(770,random(0,height-50));
  bP2.eye = 15;
  reset();
  nowStage = 0;
  
  //피하기게임
  bP3 = new boxPlayer(width/2-25,height-75);
  bP3.eye = 15;
  aP = new avoidPlayer(width/2, height-30);
  for(let i = 0; i < 7; i++) {
    aR[i] = new avoidRect(0,(i+1)*100,1,0);
    aR[i+7] = new avoidRect(width,(i+1)*100+50,-1,0);
  }
  
  //미로게임
  cols = floor(width / m_s);
  rows = floor(height / m_s);
  for (let j = 0; j <rows; j++){
    for(let i = 0 ; i < cols; i++){
      let cell = new Cell(i,j);
      grid.push(cell);
    }
  }
  
  current = grid[0];
  player = grid[0];
  
  //슈팅게임
  for (let p = 0; p < 100; p++) {
    let enemy = {
      x: random(0, width),
      y: random(-850, 0),
    };
    enemies.push(enemy);
  }
  sP = new shootP();
  
  //마지막
   bP4 = new boxPlayer(-50, height-75);
   bP4.eye = 15;
  
  //**************************************테스트용****************************************
  stageclear(1);
  stageclear(2);
  stageclear(3);
  stageclear(4);
  stageclear(5);
}

function draw() {
  //제일 처음 시작화면 노트북 펼치기
  background(255);
  display_state();
  if (state < 2) {
    for(let i=0; i<8; i++) {
    arrowArr[i].display();
    }
  }
}

function text_display() {
  let t = createP(p[i]);
  t.style('font-weight', '700');
  t.style('font-size', '30px');
  t.style('color', 'white');
  t.position(n+214, 258);
  if (lapIn%30==0 && i<7) {
    i++;
    n += 30;
  }
}

class stage_c { 
  constructor(n,x,y,a) {
    this.n = n; //스테이지 단계
    this.x = x; //스테이지 버튼 x위치
    this.y = y; //스테이지 버튼 y위치
    this.a = a; //스테이지 활성화 (1이면 활성화)
    this.sound = false;
  }
  
  b_draw() { //버튼 그리기
    textAlign(CENTER);
    textSize(40);
    if(this.a == 1) { //활성화 상태일 때
      stroke(0);
      fill(255);
      push();
      mouseLocation(this.x, this.y,this.n); //박스위에 마우스 있을시 변화
      square(this.x, this.y, b_size); //네모 그리기
      pop();
      fill(0);//글자색 검정
      text(this.n,this.x+b_size/2, this.y+b_size/2+14); //숫자 그리기
    } else { //비활성화 상태일 때
      stroke(0,0,0,25);// 회색
      fill(0,0,0,25);
      square(this.x, this.y, b_size); //버튼 그리기
      text(this.n,this.x+b_size/2, this.y+b_size/2+14); //숫자 그리기
    }
    this.t_draw(); //삼각형 그리기
  }
  
  t_draw() { //삼각형 그리기 
    let t_size = 14; //삼각형 사이즈
    let h = (t_size*2)*sqrt(3)/2; //정삼각형을 위한 삼각형 높이 계산
    let a, b;
    //이전 스테이지의 삼각형을 활성화 해야히기 때문에 a,b에 이전 버튼의 좌표를 고려한 좌표 저장
    if(this.n > 1 && this.n < 7){
      a = stage[this.n-2].x+b_size+13;
      b = stage[this.n-2].y+b_size/2;
      triangle(a, b-t_size, a, b+t_size, a+h, b); // 진행 표시(삼각형) 그리기
    }
  }
}

//버튼위에 마우스 모양변화 & overBox로 위에있다는걸 알림
function mouseLocation(bx, by, n){
  if (//마우스가 버튼안에 있을때
    mouseX > bx &&
    mouseX < bx + b_size &&
    mouseY > by &&
    mouseY < by + b_size) {
    overBox[n] = true; //마우스가 버튼안에 있는걸 표시
    stroke(0,255,0); //선 색상 초록으로 바꾸기
    push();
    fill(0);
    stroke(0);
    strokeWeight(1);
    textSize(25);
    textAlign(CENTER);
    let b_text;
    if (n > 0 & n < 7) {
      if (n == 1) {
        b_text = "시작";
      } else if (n == 2) {
        b_text = "무궁화 게임";
      } else if (n == 3) {
        b_text = "피하기 게임";
      } else if (n == 4) {
        b_text = "미로 게임";
      } else if (n == 5) {
        b_text = "슈팅 게임";
      } else if (n == 6) {
        b_text = "끝";
      }
      text(b_text, (bx*2+b_size)/2, by+b_size+30);
    }
    if (stage[n-1].sound == false) {
      s_menusel.play();
      stage[n-1].sound = true;
    }
    if (n == 5) {
      stroke('rgb(6,177,27)');
      fill('rgb(6,177,27)');
      textSize(20);
      text("최고기록: "+ highscore,  (bx*2+b_size)/2, by+b_size+60);
    }
    pop();
  } else {
    if (stage[n-1].sound == true) {
      stage[n-1].sound = false;
    }
    overBox[n] = false; //마우스가 버튼안에 없다는걸 표시
  }
}

function mousePressed() {
  if (state == 1) {
    dragging = true;
  } else if (state == 2) {  
    if(game) { //게임중일 때 //실제 접목할땐 필요없음 (게임에서 필요할땐 써야할지도...?)
        
      //game = false; //게임종료
    } else { //게임중이 아닐 때
      for(i=0; i<=stage.length; i++) {
        if (overBox[i]) { //마우스가 버튼 위에 있을 때
          nowStage = i-1;
          s_startfast.play();
          gamef(); //게임 실행
        } 
      }
    }
  }
}

function mouseReleased() {
  if (state == 1 && lapIn > 240 && mouseX > 300 && mouseX < 357 && mouseY > 353 && mouseY < 407) {
    dragging = false;
    s_start.play();
    removeElements();
    state = 2;
  }
}

function gamef(){//게임 실행
  game = true; //게임 실행상태로 변경
}

function stageclear(i){ //이건 게임안에서 게임 클리어시 실행
  stage[i].a = 1; //스테이지 
}

function keyPressed() {
  //1스테이지
  if (game == true) {
    if (nowStage == 0 && keyIsDown(32) && textShow != 7 && textShow < 11 || keyIsDown(32) && textShow > 11 && textShow != 18 && textShow != 20 && textShow != 21 && textShow != 25 && textShow != 29 && textShow != 31 && nowStage == 0) {
    s_pop.play();
    textShow++;
    if (textShow == 18) {
      bP.x = width/2-25;
      bP.y = height-75;
    }
  } else if (nowStage == 1 && keyIsDown(32) && textShow < 3) {
    s_pop.play();
    textShow++;
  } else if (nowStage == 2 && keyIsDown(32) && textShow != 2 && textShow != 4 && textShow < 6) {
    s_pop.play();
    textShow++;
  } else if (nowStage == 3 && keyIsDown(32) && textShow == 1) {
    s_pop.play();
    textShow++;
  } else if (nowStage == 4 && keyIsDown(32) && textShow >= 1 && textShow <= 2) {
    s_pop.play();
    textShow++;
  } else if (nowStage == 5 && keyIsDown(32) && textShow >= 1 && textShow != 4 && textShow != 11 && textShow != 13 && textShow != 19) {
    s_pop.play();
    textShow++;
  }
  //슈팅게임
  if (keyCode == 32 && nowStage == 4 && textShow == 4) {
    let bullet = {
      x: sP.x,
      y: height - 50,
    };
    bullets.push(bullet);
    s_shoot.play();
  }
  }
}