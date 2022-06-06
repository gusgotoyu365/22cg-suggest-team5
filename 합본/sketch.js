let gamestop = false;

//시작 화면
let lapIn = 0;
let x = -160;
let n = 0;
let p = [];
let arrowArr = [];
let state = 2;
let i = 0;
let dragging = false;
let nowStage = 0;

//스테이지 화면
let overBox = []; //버튼위에 마우스가 있는지 나타내는 변수
let game = false; //게임 실행중을 나타내는 변수
let stage = [];
let b_size = 100; //버튼사이즈

//스테이지 박스
let cB = [];

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
let score = 50; //테스트용이라 50임, 바꿀것!!!
let sP;
let highscore = 0;

function preload(){
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
  //스테이지 박스
  i_reA = loadImage("images/reArrow.png");
  i_stage = loadImage("images/stage.png");
  i_neB = loadImage("images/nextButton.png");
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
  
  //무궁화게임
  reset();
  
  //피하기게임
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
  
  //테스트용
  stageclear(3);
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
  } else {
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
          gamef(); //게임 실행
        } 
      }
    }
  }
}

function mouseReleased() {
  if (state == 1 && lapIn > 240 && mouseX > 300 && mouseX < 357 && mouseY > 353 && mouseY < 407) {
    dragging = false;
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
  if (keyCode == 32 && nowStage == 3) {
    let bullet = {
    x: sP.x,
    y: height - 50,
  };
    bullets.push(bullet);
  }
}