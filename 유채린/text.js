p5.js : https://editor.p5js.org/y43937672/sketches/CrwqTy6Q

let bullets = []
let enemies = []

function setup() {
  createCanvas(400, 400);
  //spawm enemies
  for(let p = 0; p < 100; p++){
     let enemy = {
      x:random(0, width),
      y:random(-850, 0)
  }
  enemies.push(enemy)
 }
}

function draw() {
  background(0);
  rectMode(CENTER);
  
  //draw the palyer
  square(mouseX,height-50, 25)
  // update and draw the bullets
  for(let bullet of bullets){
square(bullet.x,bullet.y, 10)
  bullet.y -= 7 
  } 
  //update and draw enemies
  for(let enemy of enemies){
    enemy.y += 3
    circle(enemy.x,enemy.y, 10)
  }
    for(let enemy of enemies){
      for(let bullet of bullets){
         if(dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10){
           
           enemies.splice(enemies.indexOf(enemy), 1)
           bullets.splice(bullets.indexOf(bullet), 1)
  let newENemy = {
      x:random(0, width),
      y:random(-850, 0)
  }
  enemies.push(newENemy)
        }
      }
    }
  }
function mousePressed(){
  console.log("clicked!!")
  let bullet = {
    x:mouseX,
    y:height - 50
  }
  bullets.push(bullet)
}
