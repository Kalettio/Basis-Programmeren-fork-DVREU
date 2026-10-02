function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

let shapes = [];
// shape collection

let growthTrigger = 0;

function draw() {
  background(220);
  noStroke();

  if (keyIsPressed && keyCode === 8) {
    // gen shapes when enter is true or some bs

    let shapeWorld = ["circle", "square", "triangle", "penta"]
    let baseRng = random(shapeWorld);
    // pulls a random shape from shapeWorld
    
    shapes.push({
      type: baseRng,

      x: random(width),
      y: random(height),
      // randomize position

      size: 0,
      maxSize: random(100, 200),
      // randomizes the max size a shape will reach

      alpha: 255,
      // shape transparency stuff blal blal bla

      fadeSpeed: random(3, 10), 
      // how fast will these beautiful shapes fade out

      color: color(random(255), random(255), random(255)),
      // if it wasnt obvious this randomizes the colors
      // arguably makes them less beautiful

      scaleUp: random(4, 20),
      scaleDown: random(1, 5),

      state: "upscale",
      // WHY THE FUCK WONT YOU WORK

      angle: 0,

      rotationSpeed: random(-2, 1)
      // how fsat will it rotate
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
    s.angle += s.rotationSpeed / 2;

    // shove shapes into the array
    push();

    // translate sets 0x 0y to the center point of the shapes we're drawing so its easier to rotate them type shit
    translate(s.x, s.y);
    rotate(s.angle);

    // cycle through all the shape types
    // at this point in timne im hella fucking convinced there is no god and all religion is objectively false because if there was THIS WOULD WORK
    // WHAT THE FUCK ARE YOU DOING

    if (s.type ===  "circle") {
      ellipse(0, 0, s.size);
    }

    if (s.type ===  "square") {
      rect(0, 0, s.size);
    }

    if (s.type ===  "triangle") {
      let triHeight = s.size * Math.sqrt(3) / 2;

      // i graduated math with atleast a 96 and yet i still cant tell you how the fuck this makes a triangle
      triangle(0, 0 - triHeight/3, 0 - s.size/3, 0 + triHeight/3, 0 + s.size/3, 0 + triHeight/3);
    }

    if (s.type === "penta") {
      // this draws a PENTAgon. wow.
      beginShape();
      vertex(-25, 0);
      vertex(0, -20);
      vertex(25, 0);
      vertex(15, 30);
      vertex(-15, 30);
      endShape(CLOSE);
    }

    if (s.state === "upscale") {
      // if this shit wont start growing right hte FUCK now im going to KILL MYSELF
      s.size += s.scaleUp;

      // shape will not exceed peak size
      if (s.size >= s.maxSize) {
        s.currentSize = s.maxSize;
        s.state = "downscale";
      }

      } else if (s.state = "downscale") {
        // this is supposed to shrink the shapes after they reach their apex.
        // ..it doesn't work. what the fuck
        s.size -= s.scaleDown;
        s.alpha -= s.fadeSpeed;    
      }
    
    // shape grows and shrinks depending on whether or not its reached peak size

    pop();

    if (s.alpha <= 0) {
      shapes.splice(i, 1);
    }

    // removes invisible shapes
  } 
}

