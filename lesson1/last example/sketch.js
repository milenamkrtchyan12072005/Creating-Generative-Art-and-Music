var side = 100;
// initial position for our circle
var circleX = 300;
var circleY = 20;
// how much to move the circle on each frame
var speedX = 2;
var speedY = -2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill((random(255), random(255), random(255)));
}
function draw() {
  background((random(255), random(255), random(255)));
  triangle(circleX, circleY, 40, 40);
  circleX = circleX + speedX;
  circleY = circleY + speedY;
  
  if(circleX > width) {
    fill(random(255), random(255), random(255));
    circleY = height;
    speedY = -speedY;
    side *= 2;
  }
  if(circleY > height) {
    fill(random(255), random(255), random(255));
    circleY = height;
    speedY = -speedY;
    side /= 2;
  }
  if(circleX < 0) {
    fill(random(255), random(255), random(255));
    circleY = 0;
    speedY = -speedY;
    side /= 2;
  }
  if(circleY < 0) {
    fill(random(255), random(255), random(255));
    circleY = 0;
    speedY = -speedY;
    side *= 2
  }
}