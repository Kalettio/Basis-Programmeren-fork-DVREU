
let hunger = 300;
let happiness = 300;
let energy = 300;
let health = 300;

let money = 0;

let y;

//------------------------------------

let cat;

//------------------------------------


function preload() {
  cat = loadImage("./catto.png")
  bliss = loadImage("./bliss.png")

  win98 = loadFont("./fonts/MSW98UI-Regular.ttf")
  win98B = loadFont("./fonts/MSW98UI-Bold.ttf")

  // ui type shiiit

  uiBackground = loadImage("./ui/background.png")
  uiButton = loadImage("./ui/button.png")
}

function setup() {
  createCanvas(800, 600);

  
}

function draw() {
  background(220);
  
  bliss.resize(1400, 700)
  image(bliss, 0, 100)

  

  drawCat();
  drawButtons();
  drawBars();

  valueUpdates();
  

  
}

// ---------------draw stuff------------------ //

function drawBars() {
  
  strokeWeight(0)

  textFont(win98)

  fill('#8d323e')
  rect(20, 20, 300, 25)
  
  fill('#4444b8')
  rect(20, 60, 300, 25)

  fill('#eeb258')
  rect(20, 100, 300, 25)

  fill('#3f7662')
  rect(20, 140, 300, 25)
  
  fill('#c73e3e')
  rect(20, 20, health, 25)
  
  fill('#547af6')
  rect(20, 60, happiness, 25)

  fill('#f4fa58')
  rect(20, 100, energy, 25)

  fill('#5bb47a')
  rect(20, 140, hunger, 25)

  textSize(20)

  fill('#323036')
  text('HEALTH  ', 25, 40)
  text('HAPPINESS  ', 25, 80)
  text('ENERGY  ', 25, 120)
  text('HUNGER  ', 25, 160)
}

function drawButtons() {
  strokeWeight(0)

  textFont('MS W98 UI')

  fill('#323036')
  rect(0, 0, 800, 190)

  uiBackground.resize(800, 190)
  image(uiBackground, 0, 0)

  fill('#423f48')
  rect(340, 20, 160, 70)

  imageMode(CORNER);

  uiButton.resize(160, 70)
  image(uiButton, 340, 20)

  fill('#423f48')
  rect(340, 100, 160, 70)

  image(uiButton, 340, 100)

  textSize(50)

  textFont(win98 )

  fill('#414249')
  text('$ ' + money, 355, 73)

  textSize(50)
  text('SHOP', 362, 155)

}

function drawCat() {
  bounce = (30 * sin(frameCount * (0.15 * (energy / 450))));
  stretch = (15 * sin(frameCount * (0.15  * (energy / 450))));

  imageMode(CORNERS);

  cat.resize(700, 700)
  image(cat, 0 - stretch / 2, 180 + bounce / 2, 350 + stretch / 2, 600)
}

//----------------------draw value------

function valueUpdates() {
  imageMode(CORNER);


  energy = constrain(energy, 2, 300)
  happiness = constrain(happiness, 2, 300)
  hunger = constrain(hunger, 2, 300)
  health = constrain(health, 2, 300)

  energy -= 0.0059 * deltaTime

  if (energy <= 3) {
    happiness -= 0.0014 * deltaTime;
  } else {
    happiness -= 0.0007 * deltaTime;
  }
  
  health -= 0.0007 * deltaTime;
  hunger -= 0.00077 * deltaTime;
}