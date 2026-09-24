function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

let shapes = [];
// shape collection

function draw() {
  background(220);
  noStroke();

  if (keyIsPressed && keyCode === 8) {
    // this is my really cool shape generator
    // it works when you click enter
    // 50/50 chance only reason people will talk to me this week is just to get this code off my hands

    // one time im gonna break something line by line
    // this is how to use arrays in a nursery rhyme

    let shapeWorld = ["circle", "square", "triangle", "ellipse"]
    let baseRng = random(shapeWorld);
    
    shapes.push({
      type: baseRng,

      x: random(width),
      y: random(height),
      // randomize position

      size: 0,
      maxSize: random(100, 200),
      // if i need to explain this i will genuinely like.
      // i'm going to kill you i think?

      alpha: 255,
      // shape transparency stuff blal blal bla
      // why am i being so needlessly sarcastic? dont know. 

      fadeSpeed: random(3, 10), 
      // do i need to explain this. sigh. fine.
      // randomized speed at which the shapes fade out
      // was it that hard to understand? wow. you must really suck at comprehensive reading!!

      color: color(random(255), random(255), random(255)),
      // if it wasnt obvious this randomizes the colors

      scaleUp: random(4, 20),
      scaleDown: random(1, 5),

      state: "upscale",

      angle: 0,

      rotationSpeed: random(-2, 1)
      // some magicky bs will only happen depending on thyne state
    });
  }

  // lowk just loops through the array and does the. shape thing
  // i dont fucking know man i just want to eat my dinner
  for (let i = shapes.length - 1; i >= 0; i--) {

    // gonna break down what's going on here
    // that array we use to store shapes? yeah? we're drawing shapes and pushing them in there.
    // by this point in time, i'm probably drawing ellipses. but honestly, by the time i'm done, it'll be a hella lotta shapes.

    // aaanyway. im applying those previously stated random values to the shapes i'm generating. pretty cool, right?
    // gets better. i'm also running s.alpha and decreasing it by s.fadeSpeed to decrease the opacity. 
    // the bottom if statement pretty much removes shapes from the array once they're fully transparent.
    // pretty cool huh.
    

    let s = shapes[i];

    if (s.currentSize >= s.maxSize) {
      s.size = s.maxSize
    }

    fill(red(s.color), green(s.color), blue(s.color), s.alpha);

    // change angle every so often
    s.angle += s.rotationSpeed;

    // shove shapes into the array
    push();

    // translate sets 0x 0y to the center point of the shapes we're drawing so its easier to rotato the potato
    translate(s.x, s.y);
    rotate(s.angle);

    // cycle through all the shape types

    if (s.type ===  "circle") {
      ellipse(0, 0, s.size);
    }

    if (s.type ===  "square") {
      rect(0, 0, s.size);
    }

    if (s.type ===  "triangle") {
      let triHeight = s.size * Math.sqrt(3) / 2;
      triangle(0, 0 - triHeight/3, 0 - s.size/3, 0 + triHeight/3, 0 + s.size/3, 0 + triHeight/3);
    }


    if (s.state === "upscale") {
      // grow my shape grow
      s.size += s.scaleUp;

      if (s.size >= s.maxSize) {
        s.currentSize = s.maxSize;
        s.state = "downscale";
      }
    } else if (s.state = "downscale") {
      s.size -= s.scaleDown;
      s.alpha -= s.fadeSpeed;
    }
    // shape grows and shrinks depending on whether or not its reached peak size

    // resets position of the origin point of the canvas (0, 0 if you're that fucking stupid.)
    pop();

    if (s.alpha <= 0) {
      shapes.splice(i, 1);
    }
    // kill all the invisible ones
  } 
}

