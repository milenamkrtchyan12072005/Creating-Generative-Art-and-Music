var speed = 5;
var circleX;
function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  fill(255, 255, 0)
  circleX = 0;
}

function draw() {
  background('#33FF33')
  ellipse(circleX, 300, 150, 150)
  circleX = circleX + speed;

  if(circleX >= windowWidth){
    speed = -speed;
    fill(random(255), random(255), random(255));
  } else if(circleX <= 0){
    speed = -speed;
    fill(random(255), random(255), random(255));
  }
}