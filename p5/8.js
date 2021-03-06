/*
https://vimeo.com/channels/learningp5js/143374872
This video looks at how you can assign a CSS class in your code using the class(), addClass(), and removeClass() functions.
p5 DOM reference: p5js.org/reference/#/libraries/p5.dom
All examples: github.com/shiffman/Video-Lesson-Materials
*/

function setup() {
  //  var promp = loadStrings("text/prompts.txt");
  //  promp.position(100, 200);

  for (var i = 0; i < 10; i++) {
    // var p = createP('apples');
  //  var p = loadStrings("text/prompts.txt");
    var p = createA('#', 'apples');
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x,y);
    p.class('apple');


  }

  for (i = 0; i < 10; i++) {
    // var p = createP('blueberries');
    // var p = createA('http://google.com', 'blueberries')
    p = createA('#', 'blueberries');
    x = floor(random(windowWidth));
    y = floor(random(windowHeight));
    p.position(x,y);
    p.class('word');
    p.mousePressed(becomeApple)
  }

}

function becomeApple() {
  this.removeClass('blueberry');
  this.class('word');
}

function draw() {
  background('red');
  blendMode('difference');

}
