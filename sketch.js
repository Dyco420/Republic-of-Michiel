function randomBetween(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let x;
let y;
let michiel;

let xspeed;
let yspeed;
function preload(){
  michiel = loadImage("https://raw.githubusercontent.com/Dyco420/Republic-of-Michiel/main/spancer.jpg")
}

function setup() {
  createCanvas(1200, 800);
  x=randomBetween(5,1200-165);
  y=randomBetween(5,800-165);
  xspeed=6;
  yspeed=6;
}

function draw() {
  background(0);
  //rect(x,y,160,160)
  image(michiel,x,y,160,160);
  
  x = x + xspeed;
  y = y + yspeed;
  
  if (x+160>width || x<0){
    xspeed = xspeed*-1;
  }
  if (y < 0 || y+160>height){
    yspeed = yspeed*-1
  }
}