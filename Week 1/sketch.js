

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

  text(`corX: ${mouseX}, corY: ${mouseY}`, mouseX, mouseY+30)

  // removed the strokes for a more clean look.
  // comments will be in english as this is more manageable for me

  let nameX = 10
  let nameY = 20

  text("Dylano Reumermann", 10, 20)

  // german flag. positions are handled in variables to handle easy movement

  let flagX = 120
  let flagY = 110
  let flagWidth = 30
  let flagLength = 20

  flagWidth = 120
  flagX = 60


  fill("#000000")
  rect(flagX, flagY, flagWidth, flagLength)

  fill("#ed3636")
  rect(flagX, flagY+20, flagWidth, flagLength)

  fill("#e8c93e")
  rect(flagX, flagY+40, flagWidth, flagLength)

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

  blendMode(ADD)
  fill("#dc9abc26")
  quad(500, 100, 620, 100, 570, 250, 470, 250);
  //
  //
  //
  // base traffic light colors:

  // base colors (mostly black)

  blendMode(BLEND)

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
  
  fill("#ffffff")
  circle(lightPosX, 620, 30)

  //
  // dice. wip
  //
  fill("#919faf");
  square(45, 255, 160, 25);

  fill("#919faf");
  square(75, 255, 160, 25);

  fill("#dedee8");
  square(80, 260, 150, 20);

  fill("#f3f3fa");
  square(50, 260, 150, 20);


  fill("#919faf");
  circle(125, 335, 30)
  circle(175, 385, 30)
  circle(175, 285, 30)
  circle(75, 385, 30)
  circle(75, 285, 30)

  let dotShading = 15

  fill("#b5c2d0");
  circle(125-5, 335-5, dotShading)
  circle(175-5, 385-5, dotShading)
  circle(175-5, 285-5, dotShading)
  circle(75-5, 385-5, dotShading)
  circle(75-5, 285-5, dotShading)


  /*
  // mario
  fill("#e03333");
  rect(770, 630, 100, 20)
  rect(750, 650, 180, 20)

  // marios skin
  fill("#ffc194");
  rect(770, 670, 120, 100)
  rect(730, 690, 200, 40)
  rect(750, 710, 200, 20)
  
  // marios hair
  fill("#90592f");
  rect(750, 670, 60, 20)
  rect(770, 670, 20, 60)
  rect(730, 690, 20, 60)
  rect(730, 690, 20, 60)
  rect(730, 690, 20, 60)
  rect(730, 690, 20, 60)
  rect(770, 710, 40, 20)
  rect(730, 730, 40, 20)

  // marios mustache

  fill("#000000");
  rect(850, 730, 80, 20)
  rect(870, 710, 20, 20)
  
  rect(850, 670, 20, 40)

  // mario's torso
  // pretty much all of this is divided into blocks so i don't have to spend time calculating every pixel

  fill("#3857c9");
  rect(750, 790, 120, 40)


  if there's an array below this just assume i've gotten lazy enough to loop back into doing this more efficiently

  */

  stroke(1);
  noFill()

  quad(80, 490, 120, 450, 160, 490);
  rect(80, 490, 80, 70);
  rect(110, 520, 20, 40);

  noStroke();

  const row = 16;
  const column = 16;
  let grid = [];
  let size = 10;
  let posX = 250;
  let posY = 100;


  // grid pretty much makes a 16 x 16 grid, like the name implies
  // each number corresponds to a color, for example, 0 = black.

  strokeWeight(1)

  grid = [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 6, 6, 6, 2, 2, 5, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 2, 6, 2, 2, 2, 5, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 6, 2, 6, 6, 2, 2, 2, 5, 2, 2, 2, 0, 0],
    [0, 0, 0, 6, 6, 2, 2, 2, 2, 5, 5, 5, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 1, 3, 4, 3, 3, 4, 3, 1, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0],
    [0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0]
  ];

  // i and j function as the x and y coordinates of each square, or since we're doing this in a grid, it's probably more akin to a cell.
  // i and j increase in value everytime the loop is run i'm pretty sure.
  // grid[i][j] then asks for the value of i and j. 
  // therefore, grid[i][j] asks "give me the value at row 2, column 5" for example.
  // if this value corresponds to one of the numbers, the fill for that cell will be set to that specific number.

  // say that grid[i][j] calls for row 3, column 4.
  // if the value of "4" is returned, then the if statements within the for loop will fill that cell with the corresponding color.
  // the === sign indicates that a cell of the grid will only be filled with the corresponding color if the exact value is matched.
  // therefore, 3.99 and 4.01 won't work, but i could be wrong, really.

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 0){
        fill("#8787d1b0")
      } 
      if (grid[i][j] === 1){
        fill("#d54040")
      }
      if (grid[i][j] === 2){
        fill("#ffd5a4")
      }
      if (grid[i][j] === 3){
        fill("#4056d3")
      }
      if (grid[i][j] === 4){
        fill("#ffeb55")
      }
      if (grid[i][j] === 5){
        fill("#000000")
      }
      if (grid[i][j] === 6){
        fill("#844c35")
      }

      rect(posX + j * size, posY + i * size, size, size);
      
    }

  }

  const rowF = 16;
  const columnF = 24;
  let gridF = [];
  let sizeF = 10;
  let posXF = 770;
  let posYF = 300;


  // grid pretty much makes a 16 x 16 grid, like the name implies
  // each number corresponds to a color, for example, 0 = black.


  gridF = [
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 3, 3, 1, 3, 1, 1, 3, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 3, 1, 3, 3, 3, 3, 1, 3, 3, 1, 0, 0],
    [1, 2, 7, 7, 7, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1, 0],
    [0, 1, 7, 7, 7, 7, 7, 7, 3, 3, 3, 1, 3, 3, 1, 0],
    [0, 1, 1, 1, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 0, 0],
    [1, 1, 1, 4, 4, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 0],
    [1, 4, 1, 5, 5, 1, 5, 5, 5, 1, 5, 5, 1, 4, 1, 0],
    [1, 4, 4, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 4, 1, 0],
    [0, 1, 5, 6, 6, 5, 5, 5, 5, 5, 6, 6, 5, 1, 0, 0],
    [0, 0, 1, 6, 6, 5, 5, 5, 5, 5, 6, 6, 1, 0, 0, 0],
    [0, 0, 0, 1, 6, 5, 1, 1, 1, 5, 6, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 5, 5, 5, 5, 5, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 7, 1, 1, 4, 1, 1, 7, 1, 0, 0, 0, 0],
    [0, 0, 1, 8, 8, 7, 7, 7, 7, 7, 8, 8, 1, 0, 0, 0],
    [0, 1, 5, 7, 7, 8, 8, 8, 8, 8, 7, 7, 7, 1, 0, 0],
    [1, 2, 5, 1, 7, 7, 7, 7, 7, 7, 7, 1, 7, 5, 1, 0],
    [1, 5, 5, 1, 8, 8, 8, 8, 8, 8, 8, 1, 5, 1, 0, 0],
    [0, 1, 1, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 7, 7, 7, 7, 1, 7, 1, 91, 91, 9, 1, 0, 0],
    [0, 0, 0, 1, 1, 7, 7, 1, 1, 91, 9, 9, 9, 1, 0, 0],
    [0, 0, 0, 1, 3, 3, 1, 1, 1, 91, 9, 9, 9, 1, 0, 0],
    [0, 0, 1, 91, 9, 1, 1, 0, 1, 9, 9, 9, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
  ];

  for (let i = 0; i < columnF; i++) {
    for (let j = 0; j < rowF; j++) {
      if (gridF[i][j] === 0){
        fill("#8787d1b0")
      } 
      if (gridF[i][j] === 1){
        fill("#2c2122")
      }
      if (gridF[i][j] === 2){
        fill("#ffffff")
      }
      if (gridF[i][j] === 3){
        fill("#e2336e")
      }
      if (gridF[i][j] === 4){
        fill("#d08f7a")
      }
      if (gridF[i][j] === 5){
        fill("#ffc0a7")
      }
      if (gridF[i][j] === 6){
        fill("#ee9dae")
      }
      if (gridF[i][j] === 7){
        fill("#5d7af0")
      }
      if (gridF[i][j] === 8){
        fill("#f0c95d")
      }
      if (gridF[i][j] === 91){
        fill("#ccd2d8")
      }
      if (gridF[i][j] === 9){
        fill("#75748b")
      }

      rect(posXF + j * sizeF, posYF + i * sizeF, sizeF, sizeF);
      
    }

    text("vlag", 100, 100)
    text("mario", 310, 80)
    text("checkerboard", 500, 80)
    text("dice", 100, 250)
    text("house", 100, 580)
    text("traffic light", 500, 370)
    text("character 2 (ness - earthbound)", 770, 280)

  }
}

