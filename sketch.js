let x;
let y;
let michiel;

let xspeed;
let yspeed;
function preload(){
  michiel = loadImage("https://raw.githubusercontent.com/Dyco420/Republic-of-Michiel/main/MichielH.png")
}
function setup() {
  createCanvas(800, 600);
  x=400;
  y=300;
  xspeed=5;
  yspeed=5;
}

function draw() {
  background(0);
  //rect(x,y,160,160)
  image(michiel,x,y,160,160);
  
  x = x + xspeed;
  y = y + yspeed;
  
  if (x+160==width || x==0){
    xspeed = xspeed*-1;
  }
  if (y == 0 || y+160==height){
    yspeed = yspeed*-1
  }
}