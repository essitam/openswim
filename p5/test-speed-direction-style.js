
let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape
let aspeed = 2.3;
let bspeed = 3;
let cspeed = 2;

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

//text file variables

var promp;
var conf;
var dance;
var eve;
var font;
var gaz;
var heb;// = loadStrings("text/hebrew.txt");
var hiat; //= loadStrings("text/hiatus.txt");
var inte; //= loadStrings("text/interview.txt");
var oft; //= loadStrings("text/often.txt");
var paris; //= loadStrings("text/paris-and-hilton.txt");
var re; //= loadStrings("text/re.txt");
var rpt; //= loadStrings("text/rptei.txt");
var shush; //= loadStrings("text/shush.txt");
var ssi;//= loadStrings("text/ssi.txt");
var taste;// = loadStrings("text/taste.txt");
var tm; //= loadStrings("text/TM.txt");
var trucks;// = loadStrings("text/trucks.txt");
var wambam; //= loadStrings("text/wambam.txt");
var wip; //= loadStrings("text/wip.txt");
var yh;

var x= 0;
var a= 0;
var b= 0;
var c= 0;
var d= 0;
var e= 0;

var f;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //createCanvas(720, 400);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;


  promp = loadStrings("text/prompts.txt");
  //promp.style('background-color', 'green');
  //promp.class('red');
  conf = loadStrings("text/confessed.txt");
  dance = loadStrings("text/dandancerevo.txt");
  eve = loadStrings("text/Eve.txt");
  font = loadStrings("text/font-store.txt");
  gaz = loadStrings("text/gazebo.txt");
  heb = loadStrings("text/hebrew.txt");
  hiat = loadStrings("text/hiatus.txt");
  inte = loadStrings("text/interview.txt");
  oft = loadStrings("text/often.txt");
  paris = loadStrings("text/paris-and-hilton.txt");
  re = loadStrings("text/re.txt");
  rpt = loadStrings("text/rptei.txt");
  shush = loadStrings("text/shush.txt");
  ssi= loadStrings("text/ssi.txt");
  taste = loadStrings("text/taste.txt");
  tm = loadStrings("text/TM.txt");
  trucks = loadStrings("text/trucks.txt");
  wambam = loadStrings("text/wambam.txt");
  wip = loadStrings("text/wip.txt");
  yh = loadStrings("text/yhinking.txt");


  //var p = createA('#', 'apples');
//var y = floor(random(windowHeight));
////promp.position(x,y);
//promp.class('apple')
}

function draw() {
  background('blue');
//promp.class('red');
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

//other
   x= x-1;
    if (x>width){
      x=0;
          }
    a= a-3;
      if (a>width){
             a=0;
         }
    b= b+2;
      if (b>width){
        b=0;
      }
      c= c+1;
        if (c>width){
          c=0;
        }
  // Draw the shape
  //ellipse(xpos, ypos, rad, rad);
  fill('white');
  textSize(72);
  text("OPEN SWIM",xpos, ypos, rad+100, rad+300);
  textSize(42);
//  fill(0, 255, 190);
  text(promp);//, xpos, 100, 100);
  text(conf, x-100, 200, 2000);
  text(dance, ypos, 200, 400, 400);


/*  text(eve, a, 40);
  text(font, x+40, 50);
  text(gaz, a-100, 60);
  text(heb, x-20, 70);
  text(hiat, x-30, 80);
  text(inte, a-300, 90);
  text(oft, x+200, 100);
  text(paris, x-300, 110);
  text(re, x+20, 120);
  text(rpt, x, 130);
  text(shush, b, 140);
  text(ssi, x, 150);
  text(taste, a, 160);
  text(tm, b, 170);
  text(trucks, x, 180);
  text(wambam, b, 190);
  text(wip, x, 200);
  text(yh, x, 210);*/
}
