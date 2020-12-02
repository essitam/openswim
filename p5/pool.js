var x = 0;
let xx;
let yy;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(66, 244, 226);
  x = x + 1;
  noStroke();

y = 60;
  for (let i = 0; i < height; i++) {
    fill('red');
    xx = y+x;
    ellipse(width/3, xx, 75, 10);
    y += 20;
    if (xx>height){
      y = -y;
    }
  }
y = 70;
  for (let j = 30; j < height; j++) {
    fill('yellow');
    yy = y+x;
    ellipse(width/3, yy, 75, 10);
    y += 20;
    if (yy>height){
      y = -y;
    }
  }

  y = 60;
    for (let i = 0; i < height; i++) {
      fill('red');
      xx = y+x;
      ellipse((width/3)*2, xx, 75, 10);
      y += 20;
      if (xx>height){
        y = -y;
      }
    }
  y = 70;
    for (let j = 30; j < height; j++) {
      fill('yellow');
      yy = y+x;
      ellipse((width/3)*2, yy, 75, 10);
      y += 20;
      if (yy>height){
        y = -y;
      }
    }

    y = 60;
      for (let i = 0; i < height; i++) {
        fill('red');
        xx = y+x;
        ellipse((width/3)*3, xx, 75, 10);
        y += 20;
        if (xx>height){
          y = -y;
        }
      }
    y = 70;
      for (let j = 30; j < height; j++) {
        fill('yellow');
        yy = y+x;
        ellipse((width/3)*3, yy, 75, 10);
        y += 20;
        if (yy>height){
          y = -y;
        }
      }




  //
  // for (var i = 30; i ++; i = 500){
  //   fill('yellow');
  //   ellipse(a, b[i], c, d);
  // }


}

// ellipse = 0 and adds 1 until it gets to the bottom
// f1
// f2
//
// a, b, c, d
// a = x axis
//  25%, 50% 75%
// three lanes
// b = y axis
// b is starting point
//
//  y = y + 1 movement
// c = length(x)
// 30
// d = height(y)
// 10
