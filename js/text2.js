var x= 0;
var a= 0;
var b= 0;
var c= 0;
var d= 0;
var e= 0;
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

function setup(){  createCanvas(window.innerWidth, window.innerHeight);
  bg = loadImage('img/Texas-Pool-Aerial.png');


  //os = loadStrings("OPEN SWIM");
  promp = loadStrings("text/prompts.txt");
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

}

function draw(){
background('blue');
 background(bg);



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

/*
 textSize(48);
fill(0, 255, 190);
text("OPEN SWIM ", x, 300);
*/
fill(0, 255, 190);
textSize(100);
text("OPEN SWIM ", x, mouseX);



 textSize(12);
//text(os, x, 100);
text(promp, x+100, 10);
text(conf, x-100, 20);
text(dance, x+200, 30);
text(eve, a, 40);
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
text(yh, x, 210);



}
