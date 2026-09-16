function setup() {
  createCanvas(800, 600);
}

let x = -40;
let Xwheel = 60;
let wheelAccel = 0;
let Ywheel = 430;
let skybox = 0;
let tLight = 0;
let targetAccel = 0.1;


function draw() {
  background("#a2c6ea");

  x++;

  if (x === 1000) {
    x -= 1200;
  }



  // 

  // background --------------

  fill("#fff585")
  circle(x, 100, 120);

  fill("#879db4")
  noStroke();

  rect(0, 271, 120, 600)
  
  fill("#50957d")
  rect(0, 370, 800, 320)

  fill("#323949")
  rect(680, 310, 25, 90)

  fill("#191c23")
  rect(680, 310, 25, 20)

  fill("#3c4c54")
  rect(685, 330, 10, 90)

  fill("#191c23")
  rect(680, 200, 40, 110)

  fill("#323949")
  rect(665, 200, 40, 110)

  fill("#8b9396")
  rect(0, 385, 800, 200)

  fill("#b5baba")
  rect(0, 385, 800, 190)

  fill("#33353d")
  rect(0, 400, 800, 160)

  fill("#8b9396")
  rect(0, 400, 800, 10)

  fill("#eebe55")
  rect(0, 480, 800, 5)

  fill("#cfd7e0")
  circle(685, 220, 28)
  circle(685, 255, 28)
  circle(685, 290, 28)
  
  fill("#803343")
  circle(685, 220, 22)

  fill("#9b6f40")
  circle(685, 255, 22)

  fill("#385f4f")
  circle(685, 290, 22)

  fill("#aa465a")
  circle(687, 218, 12)

  fill("#b99b47")
  circle(687, 253, 12)

  fill("#759e40")
  circle(687, 288, 12)

  // cars 2 the movie ---------------

  if (Xwheel == 1600) {
    Xwheel = Xwheel - 1050;
  }

  Xwheel += wheelAccel;

  fill ('#000000');
  circle(Xwheel, Ywheel, 70)

  fill ('#13171c');
  circle(Xwheel, Ywheel, 60)

  fill ('#000000');
  circle(Xwheel, Ywheel, 40)

  fill ('#7d7e81');
  circle(Xwheel, Ywheel, 30)

  fill ('#a7aaaa');
  circle(Xwheel, Ywheel, 25)

  fill ('#ebf0f0');
  circle(Xwheel+5, Ywheel-5, 10)


  fill ('#000000');
  text(`corX: ${mouseX}, corY: ${mouseY}`, mouseX, mouseY + 30)
  text(tLight, mouseX, mouseY + 50)

  // traffic light bs
  // all of this is handled by variables, if statements, hopes and dreams i think
  // probably a bit of my will to live aswell

  if (tLight === 3) {
    tLight = tLight - 3;
  }

  if (tLight === 0) {
    fill("#f54568")
    circle(685, 220, 22)
    wheelAccel *= 0.95;
  }

  if (tLight === 1) {
    fill("#50ed6a")
    circle(685, 290, 22)
    wheelAccel += 0.5
  }

  if (tLight === 2) {
    fill("#e6aa42")
    circle(685, 255, 22)
      wheelAccel += 0.5;
  } 

  if (tLight === 1) {
    if (wheelAccel >= 3) {
      wheelAccel = 3;
    }
  }

  if (tLight === 2) {
    if (wheelAccel >= 3) {
      wheelAccel -= 0.5;
    } else {
      wheelAccel  = 0.5;
    }
  }

}

function keyPressed() {
  if (keyCode === ENTER) {
    tLight++; // Increases the variable by 1
  }
}