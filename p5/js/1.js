var x= 1;
var bg;
function preload(){
  bg = loadImage('img/Texas-Pool-Aerial.png');

}
function setup(){
  let createcanvas = createCanvas(window.innerWidth, 800);
   createcanvas.parent('mycanvas');

//  createCanvas(window.innerWidth, window.innerHeight);

}
function draw(){
background('blue');
 background(bg);
 fill(0, 255, 190);
 textSize(100);
 x= x+1;
 if (x>width){
x=0;
 }
 text("OPEN SWIM ", x, mouseX);
}
