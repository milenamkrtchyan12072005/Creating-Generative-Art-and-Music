// creating random horizontal lines
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
}
function draw() {
  background(0);
  var lineY = random(height);

  strokeWeight(random(200));
  stroke(random(255),random(50,100));
  line(0,lineY, width,lineY);

// let's create 4 lines for each Loop
// next we will do this an easier way

  strokeWeight(random(200));
  stroke(random(255),random(50,100));
  line(0,lineY, width,lineY);

  strokeWeight(random(200));
  stroke(random(255),random(50,100));
  line(0,lineY, width,lineY);

  strokeWeight(random(200));
  stroke(random(255),random(50,100));
  line(0,lineY, width,lineY);
}
function mousePressed() {
noLoop();
}
function mouseReleased() {
loop();
}
