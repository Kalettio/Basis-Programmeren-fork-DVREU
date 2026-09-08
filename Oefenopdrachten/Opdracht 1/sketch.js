function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  background(225);
  noStroke()

  // kind of a cheaty line of code
  // tracks the cursor and prints the coordinates so i don't have to do dodgy math
  fill("#2d2de9")
  circle(mouseX, mouseY, 10)

  fill("#080809")

  text(`corX: ${mouseX}, corY: ${mouseY}`, 1050, 50)
  // removed the strokes for a more clean look.
  // comments will be in english as this is more manageable for me

  let nameX = 10
  let nameY = 20

  text("Dylano Reumermann", 10, 20)

  // german flag. positions are handled in variables to handle easy movement

  let flagX = 120
  let flagY = 110


  fill("#000000")
  rect(flagX, flagY, 40, 10)

  fill("#ed3636")
  rect(flagX, flagY+40, 40, 10)

  fill("#e8c93e")
  rect(flagX, flagY+80, 40, 10)

  //
  // chessboard
  //
  let cbBorX = 90
  let cbBorY = 40
  let cbBgY = 50
  let cbX = 150
  let cbY = 100

  fill("#15171d")
  rect(cbBorX+370, cbBorY+50, 170, 170)

  cbBorX = 100

  fill("#d63e3e")
  rect(cbBorX+370 , cbBgY+50, 150, 150)

  // changed cbY to 200 to accustom for the change in size between the border and the actual checkers
  // cbX is also changed to align the checkerboard more with the traffic light below it on the horizontal (x) axis
  cbY = 150
  cbX = cbX + 120

  fill("#2d303f")
  rect(cbX+250, cbY+50, 50, 50)
  rect(cbX+200, cbY, 50, 50)
  rect(cbX+250, cbY-50, 50, 50)
  rect(cbX+300, cbY, 50, 50)

  // changes color blend to ADD
  // color values from the shapes created after this line is called are added onto the ones already on the canvas

  // blendMode(ADD)
  fill("#c56a98")
  quad(40, 20, 100, 20, 80, 80, 20, 80);
  //
  //
  //
  // base traffic light colors:

  // base colors (mostly black)

  
  let trafficPosX = 510

  fill("#080809")
  rect(trafficPosX, 500, 60, 320)

  trafficPosX = trafficPosX - 20

  fill("#17191c")
  rect(trafficPosX, 400, 100, 280)


  let lightPosX = 540

  // base traffic light colors
  fill("#aa3d5c")
  circle(lightPosX, 450, 70)
  
  fill("#f5b453")
  circle(lightPosX, 540, 70)
  
  fill("#49cc88")
  circle(lightPosX, 630, 70)


  // traffic light shading
  fill("#fa6156")
  circle(lightPosX, 450, 60)
  
  fill("#f9ed6e")
  circle(lightPosX, 540, 60)
  
  fill("#9cf26e")
  circle(lightPosX, 630, 60)

  lightPosX = lightPosX - 10

  // traffic light highlights 
  fill("#fa8f56")
  circle(lightPosX, 440, 30)
  
  fill("#ffffff")
  circle(lightPosX, 530, 30)
  
  fill("#efffa7")
  circle(lightPosX, 620, 30)

  //
  // dice. wip
  //

  fill("#efffa7");

  circle(440, 620, 30);

  // mario
  fill("#e03333");
  rect(670, 630, 100, 20)
  rect(650, 650, 160, 20)
  
  // marios hair
  fill("#90592f");
  rect(650, 670, 60, 20)
  rect(670, 670, 20, 60)
  rect(630, 690, 20, 60)
  rect(630, 690, 20, 60)
  rect(630, 690, 20, 60)


}

