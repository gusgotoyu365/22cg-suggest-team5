function preload(){
  //노트북 사진
  img1= loadImage('1.PNG');
  img2= loadImage('22.PNG');
  img3= loadImage('333.PNG');
  img4= loadImage('4444.PNG');
}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  //제일 처음 시작화면 노트북 펼치기 
  pop();
  tint(255,50-(frameCount*3));
  image(img4,100,50,700,600);
  tint(255,(frameCount*3)-50);
  image(img3,100,50,700,600);
  tint(255,(frameCount*3)-150);
  image(img2,100,50,700,600);
  tint(255,(frameCount*3)-250)
  image(img1,100,50,700,600)
  push();

} 
