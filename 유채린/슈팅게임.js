참고자료: https://www.youtube.com/watch?v=GusFmfBmJmc
p5js 주소
https://editor.p5js.org/y43937672/sketches/3BBniQ4Bw 
+score추가 

let bullets = [];
let enemies = [];
let score = 0;

function setup() {
  createCanvas(400, 400);
  //spawm enemies
  for (let p = 0; p < 100; p++) {
    let enemy = {
      x: random(0, width),
      y: random(-850, 0),
    };
    enemies.push(enemy);
  }
}

function draw() {
  background(255);
  rectMode(CENTER);

  //draw the player
  square(mouseX, height -50,25);
  fill(255);
  // update and draw the bullets
  for (let bullet of bullets) {
    square(bullet.x, bullet.y, 10);
    bullet.y -= 7;
  }
  //update and draw enemies
  for (let enemy of enemies) {
    enemy.y += 3;
    circle(enemy.x, enemy.y, 10);
    fill(0);
    if (enemy.y > height){
      }
  }
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {

        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        let newENemy = {
          x: random(0, width),
          y: random(-850, 0),
        };
        enemies.push(newENemy);
        score += 1
      }
    }
  }
  text(score, 25, 25)
  textSize(25);
}
function mousePressed() {
  console.log("clicked!!");
  let bullet = {
    x: mouseX,
    y: height - 50,
  };
  bullets.push(bullet);
}
