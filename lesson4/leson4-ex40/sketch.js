// Radial Pattern with Sound

var frames = 235
var num = 30; // try numbers up to 40
var theta = 0;
var wave;
var playing;
var frequency;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    wave = new p5.Oscillator();
    wave.setType('sine');
    // frameRate(8);
}

function togglePlay() {
	if (!playing) {
        loop();
		wave.start();
		wave.amp(1, .25);
		// second number fades in the amplitude by the duration specified
		playing = true;
        console.log("Start Loop");
	} else {
        noLoop();
		wave.amp(0, .25);
		playing = false;
        console.log("Stop Loop");

	}
}

function draw() {
    background(20);
    fill(255, 30);
    stroke(255, 50);
    translate(width / 2, height / 2);
    for (i = 0; i < num; i++) {
        push();
        let offSet = TWO_PI / num * i;
        rotate(offSet);
        sz = map(sin(theta), -1, 1, width*.15, width*.2);
        x = map(sin(theta), -1, 1, sz, width * .2);
        translate(x, 0);
        push();
        rotate(theta);
        stroke(200);

        if (i%2==0) {
          ellipse(0, 0, sz, sz*2);
          px = cos(theta)*sz/2;
          py = sin(theta)*sz;
          sz2 = 20;
          strokeWeight(2);
          // change the frequency of synth
          wave.freq(px*9);
          var vol = map(x, 100,300,0,1)
          console.log(vol)
          wave.amp(vol);

          ellipse(px, py, sz2, sz2);
          strokeWeight(1);
        } else {
            fill(255,20);
            noStroke();
            ellipse(0, 0, sz*.7, sz*2*.7);
            px = cos(theta+PI)*sz*.35;
            py = sin(theta+PI)*sz*.7;
            sz2 = 5;
            fill(255);
            ellipse(px, py, sz2, sz2);
            noFill();
        }
        pop();
        pop();
    }
    theta += TWO_PI / frames;
}

function mousePressed() {
    togglePlay();
}