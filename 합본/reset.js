function reset() {
  if (nowStage == 0) {
    /*textIndex = 0;
    textShow = 0;*/
    ellipseX = 400;
    ellipseY = 400;
    scene = 0;
    ellcoll = false;
    bP.x = width/2-25;
    bP.y = height-75;
    bP.eye = 0;
    bP.Leye = this.x+14;
    bP.Reye = this.x+50-14;
  } else if (nowStage == 1) {
    green0 = 255;
    a = floor(random(20,150));
    b = floor(random(20,80)); 
    c = floor(random(20,150)); 
    yY = random(200,height-50);
    keyX=770;
    count = 0;
    timer = 0;
    time = 30;
    out = 0;
    played_moo1 = false;
    played_moo2 = false;
    played_moo3 = false;
    bP2.x = 770;
    bP2.y = random(200,height-50);
  } else if (nowStage == 2) {
    for(let i = 0; i < 7; i++) {
      aR[i].x = -aR[i].w;
      aR[i+7].x = width;
      aR[i].speed = random(5,12);
      aR[i+7].speed = random(5,12);
      if (aR[i].v == 0) {
        aR[i].w = random(50, 300);
        aR[i].h = random(10, 30);
      } else {
        aR[i].w = random(10, 30);
        aR[i].h = random(50, 300);
      }
    }
    aP.x = width/2;
    aP.y = height - 30;
  } else if (nowStage == 3) {
    current = grid[0];
    player = grid[0];
  } else if (nowStage == 4) {
    this.x = width/2 - 12;
    score = 0;
    for (let enemy of enemies) {
      enemy.y = random(-850, 0);
    }
    for (let bullet of bullets) {
      bullet.y = -900;
    }
  } else if (nowStage == 5) {
    bP.x = -50;
    bP.y = height-75;
  }
}