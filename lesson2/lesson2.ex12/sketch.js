function setup() {
  createCanvas(windowHeight, windowWidth);
  noLoop();
}

function draw() {
  var heightSpacing = windowHeight/10;
  var widthSpacing = windowWidth/20;
  strokeWeight(30);
  strokeCap(SQUARE);

  //horizontal lines
  for(i = 1; i < 6; i++) {
    line(width/2, i * heightSpacing, width, i * heightSpacing);
  }
  //vertical lines
  for (i = 0; i < 6; i++) {
  line((width/2 + 10) + (i * widthSpacing), height/2, (width/2 + 10) + (i * widthSpacing));
  }
  
}

