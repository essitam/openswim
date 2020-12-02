var x= 100;

function setup(){  createCanvas(window.innerWidth, window.innerHeight);
  bg = loadImage('img/Texas-Pool-Aerial.png');

}
function preload() {
  file = loadStrings("text/pool_memories.txt");

}

function draw(){
background('blue');
 background(bg);
 fill(0, 255, 190);
 textSize(14);
 x= x-1;
 if (x>width){
x=0;
 }
text(file, x, 100);
text("OPEN SWIM ", x, 300);


}
