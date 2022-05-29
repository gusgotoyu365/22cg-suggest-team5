//game playing상태에서 마우스를 누르면 선택화면으로 돌아옵니다.

let overBox = []; //버튼위에 마우스가 있는지 나타네는 변수
let game = false; //게임 실행중을 나타네는 변수
let stage = [];
let b_size = 50; //버튼사이즈
function setup() {
  createCanvas(400, 400);
  
  //버튼을 배열로 생성
  stage.push(new stage_c(1,20,75,1));  // 스테이지, 좌표x,좌표y,활성화여부(1=활성화)
  stage.push(new stage_c(2,120,75,0));
  stage.push(new stage_c(3,220,75,0));
  stage.push(new stage_c(4,50,225,0));
  stage.push(new stage_c(5,150,225,0));
  stage.push(new stage_c(6,250,225,0));
  for(let i=0; i<stage.lenght;i++){
    overBox.push(false); //마우스 인식 off로 버튼마다 생성
  }
}

function draw() {
  background(220);
  
  //버튼 그리기
  if(game){ //게임 실행
    textSize(30);
    text("game playing...", 200, 200); //test문구
  }
  else{ //게임이 실행중이지 않을 때(실행화면일때)
    strokeWeight(2);
    for(let i=0;i<stage.length;i++){ //버튼을 그려준다.
      stage[i].b_draw();
    }  
  }
  
  
}

class stage_c{ 
  constructor(n,x,y,a){
    this.n = n; //스테이지 단계
    this.x = x; //스테이지 버튼 x위치
    this.y = y; //스테이지 버튼 y위치
    this.a = a; //스테이지 활성화 (1이면 활성화)
  }
  
  b_draw(){ //버튼 그리기
    textAlign(CENTER);
    textSize(20);
    if(this.a == 1){ //활성화 상태일 때
      stroke(0);
      fill(255);
      push();
      mouseLocation(this.x, this.y,this.n); //박스위에 마우스 있을시 변화
      rect(this.x, this.y,b_size,b_size); //네모 그리기
      pop();
      fill(0);//글자색 검정
      text(this.n,this.x+b_size/2, this.y+b_size/2+7); //숫자 그리기
    }
    else{ //비활성화 상태일 때
      stroke(0,0,0,25);// 회색
      fill(0,0,0,25);
      rect(this.x, this.y,b_size,b_size); //버튼 그리기
      text(this.n,this.x+b_size/2, this.y+b_size/2+7); //숫자 그리기
    }
    this.t_draw(); //삼각형 그리기
  }
  
  t_draw(){ //삼각형 그리기 
    let t_size =7; //삼각형 사이즈
    let h =(t_size*2)*sqrt(3)/2 //정삼각형을 위한 삼각형 높이 계산
    let a,b;
    //이전 스테이지의 삼각형을 활성화 해야히기 때문에 a,b에 이전 버튼의 좌표를 고려한 좌표 저장
    if(this.n !=1 && this.n !=7){
      a = stage[this.n-2].x+b_size+13
      b = stage[this.n-2].y+b_size/2
    }
    triangle(a, b-t_size, a, b+t_size, a+h, b); // 진행 표시(삼각형) 그리기
  }
    
}

//버튼위에 마우스 모양변화 & overBox로 위에있다는걸 알림
function mouseLocation(bx, by,n){
  if (//마우스가 버튼안에 있을때
    mouseX > bx &&
    mouseX < bx + b_size &&
    mouseY > by &&
    mouseY < by + b_size
  ) {
    overBox[n] = true; //마우스가 버튼안에 있는걸 표시
    stroke(0,255,0); //선 색상 초록으로 바꾸기
  } else {
    overBox[n] = false; //마우스가 버튼안에 없다는걸 표시
  }
}
//마우스 클릭
function mousePressed() {
  if(game){//게임중일 때 //실제 접목할땐 필요없음 (게임에서 필요할땐 써야할지도...?)
    //아래 for문은 테스트용
    for(let i=0;i<stage.length;i++){ //활성화안된 스테이지 활성화 (순서대로)
        if(stage[i].a == 1){
          continue;
        }
        else{
          stageclear(i); //게임클리어시 실행
          break;
        }
    }
    game = false; //게임종료
  }else{ //게임중이 아닐 때
    
    for(i=0; i<=stage.length;i++){
      if (overBox[i]) { //마우스가 버튼 위에 있을 때
        gamef(); //게임 실행
      } 
    }
  }
}

function gamef(){//게임 실행
  game = true; //게임 실행상태로 변경
}
function stageclear(i){ //이건 게임안에서 게임 클리어시 실행
  stage[i].a = 1; //스테이지 
}