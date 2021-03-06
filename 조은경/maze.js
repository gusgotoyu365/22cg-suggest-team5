let cols, rows; 
let m_s = 20;
let grid = [];
let gameEnd = false;

let current;
let player;
let next_p;
let stack = [];

let m_startgame = false;

let goMove = false;
let ones = true;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / m_s);
  rows = floor(height / m_s);
  //frameRate(5);
  for (let j = 0; j <rows; j++){
    for(let i = 0 ; i < cols; i++){
      let cell = new Cell(i,j);
      grid.push(cell);
    }
  }
  
  current = grid[0];
  player = grid[0];
}

function draw() {
  background(220);
  
  if(!gameEnd){
    m_draw();
  }
}

function m_draw(){
   for(let i = 0 ; i < grid.length; i++){
     grid[i].show();
    }
  
  current.visited = true;
  if(!m_startgame){
    current.highlight();
  }
  let next = current.checkNeighbors();
  if (next) {
    
    next.visited = true;
    stack.push(current);
    removeWalls(current, next);
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  } else{
    m_startgame = true;
    move_p();
    goal();
  }
}

function index(i,j){
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i+j*cols;
}

function Cell(i,j) {
  this.i = i;
  this.j = j;
  this.walls=[true,true,true,true] // top,right,bottom, left
  this.visited = false;
  
  this.checkNeighbors = function(){
    let neighbors = [];
    
    let top = grid[index(i,j-1)];
    let right = grid[index(i+1,j)];
    let bottom = grid[index(i,j+1)];
    let left = grid[index(i-1,j)];
    
    if (top && !top.visited){
      neighbors.push(top);
    }
    if (right && !right.visited){
      neighbors.push(right);
    }
    if (bottom && !bottom.visited){
      neighbors.push(bottom);
    }
    if (left && !left.visited){
      neighbors.push(left);
    }
    
    if(neighbors.length > 0){
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else{
      return undefined;
    }
    
  }
  
  this.highlight = function(){
    let x = this.i*m_s;
    let y = this.j*m_s;
    noStroke();
    fill(255,255,0);
    rect(x, y, m_s, m_s);
  }
  
  this.show = function(){
    let x = this.i*m_s;
    let y = this.j*m_s;
    stroke(255);
    if(this.walls[0]){
      line(x    , y    , x+m_s, y);
    }
    if(this.walls[1]){
      line(x+m_s, y    , x+m_s, y+m_s);
    }
    if(this.walls[2]){
      line(x+m_s, y+m_s, x    , y+m_s);
    }
    if(this.walls[3]){
      line(x    , y+m_s, x    , y);
    }
    
    if(this.visited){
      noStroke();
      fill(0,0,0);
      rect(x,y,m_s,m_s);
    }
  }
  
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

function move_p(){
  let moveTo;
  
  if(keyIsDown(UP_ARROW)){
    if(!player.walls[0] && ones){
      moveTo = grid[index(player.i, player.j - 1)];
      goMove = true;
      ones=false;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(!player.walls[1] && ones){
      moveTo = grid[index(player.i + 1, player.j)];
      goMove = true;
      ones=false;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(!player.walls[2] && ones){
      moveTo = grid[index(player.i, player.j + 1)];
      goMove = true;
      ones=false;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(!player.walls[3] && ones){
      moveTo = grid[index(player.i - 1, player.j)];
      goMove = true;
      ones=false;
    }
  }
  if(goMove){
    goMove = false;
    player = moveTo;
  }
  let p_size = m_s-10;
  stroke(0);
  fill(255,255,255);
  ellipse(player.i*m_s+m_s/2, player.j*m_s+m_s/2,p_size,p_size);
} 
function keyReleased() {
  if(keyCode === UP_ARROW || keyCode === RIGHT_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW){
    ones=true;
  }
}
function goal(){
  fill(255,0,0)
  rect((cols-1)*m_s+2,(rows-1)*m_s+2,m_s-4,m_s-4);
  if(player.i == cols-1 && player.j == rows-1){
    gameEnd = true;
  }
}