function shooting_game() {
  background(255);
  rectMode(CENTER);
  sP.display();
  sP.move();
  fill(255);
  // update and draw the bullets
  for (let bullet of bullets) {
    push();
    stroke(0);
    square(bullet.x, bullet.y, 10, 10);
    pop();
    bullet.y -= 7;
  }
  //update and draw enemies
  for (let enemy of enemies) {
    enemy.x += random(-1,1);
    enemy.y += random(1,10);
    circle(enemy.x, enemy.y, 10);
    fill(0);
    if (enemy.y > height){
      enemy.x = random(0, width);
      enemy.y = -2;
    }
  }
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        let newENemy = {
          x: random(mouseX - 50, mouseX + 50),
          y: random(-850, 0),
        };
        enemies.push(newENemy);
        score += 1
      }
    }
    if (enemy.x - 5 < sP.x + 24 && enemy.x + 5 > sP.x &&
        enemy.y - 5 < height && enemy.y + 5 > height - 24) {
      if (score >= 50) {
        gamestop = true;
        if (stage[nowStage + 1].a == 0) {
          stageclear(nowStage+1);
        }
      } else {
        reset();
      }
    }
  }
  console.log(mouseX + " " + mouseY);
  fill(230);
  stroke(0);
  rect(93, 25, 175, 40);
  fill(0);
  textAlign(CENTER);
  textSize(25);
  text("목표: " + score + " / 50", 90, 35);
  if (score >= highscore) {
    push();
    textAlign(RIGHT);
    text("최고기록!", width, 35);
    pop();
    highscore = score;
  }
}

class shootP {
  constructor() {
    this.x = width/2 - 12;
  }
  
  move() {
    this.x += (keyIsDown(68) - keyIsDown(65))*4;
    this.x = constrain(this.x, 0, width - 24);
  }
  
  display() {
    push();
    fill(0);
    square(this.x, height-24, 24);
    pop();
  }
}