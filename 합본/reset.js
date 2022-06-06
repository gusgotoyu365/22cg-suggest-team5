function reset() {
  if (nowStage == 0) {
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
  } else if (nowStage == 1) {
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
  } else if (nowStage == 2) {
    current = grid[0];
    player = grid[0];
  } else if (nowStage == 3) {
    this.x = width/2 - 12;
    score = 0;
    for (let enemy of enemies) {
      enemy.y = random(-850, 0);
    }
  }
}