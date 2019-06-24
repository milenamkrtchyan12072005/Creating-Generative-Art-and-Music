// Radial Pattern 1 with Sound

var frames = 240;
var num = 30; // try numbers up to 40
var theta = 0;
var wave;
var frequency;
var playing;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    wave = new p5.Oscillator();
    wave.setType('sine');
}

function draw() {
    background(random(255), random(255), random(255));
    fill(random(255), random(255), random(255));
    stroke(255, 50);
    translate(width / 2, height / 2);
    for (i = 0; i < num; i++) {
        push();
        let offSet = TWO_PI / num * i;
        rotate(offSet);
        sz = width * .15;
        x = map(sin(theta), -1, 1, sz, width * .2);

        // change the frequency of synth
        wave.freq(x*4);

        translate(x, 0);
        push();
        rotate(theta);
        // ellipse(0, 0, sz, sz * 2);
        // ellipse(0, 0, sz * .7, sz * 2 * .7);
        if (i % 2 == 0) {
            ellipse(0, 0, sz, sz * 2);
        } else {
            ellipse(0, 0, sz * .7, sz * 2 * .7);
        }
        pop();
        pop();
    }
    theta += TWO_PI / frames;
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
		wave.amp(0, .15);
		playing = false;
        console.log("Stop Loop");

	}
}

function mousePressed() {
    togglePlay();
}