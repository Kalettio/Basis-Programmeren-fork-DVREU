function setup() {
  createCanvas(1800, 600);
}

let x = -40;

let skybox = 0;
let tLight = 0;

// anything related to the position of my beautiful cars
let Xwheel = 120;
let wheelAccel = 0;
let wheelAccel2 = 0;
let Ywheel = 430;
let targetAccel = 0.1;
let carThrottle = 0;

let Xwheel2 = 500;
let Ywheel2 = 510;


let timeOfDay = 0;


function draw() {

  x += 3;

  carThrottle += 5;

  fill("#000000")
  

  if (timeOfDay === 1800) {
    x -= 1900;
  }

  if (timeOfDay === 3600) {
    x -= 2100;
  }

  if (timeOfDay === 3600) {
    timeOfDay = 0;
  }
  
  timeOfDay += 2.5;

  // background --------------


  background("#a2c6ea");
  fill("#fff585")

  circle(x, 100, 120);

  fill("#879db4")
  noStroke();

  rect(0, 271, 120, 600)
  
  fill("#50957d")
  rect(0, 370, 1800, 320)

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
  rect(0, 385, 1800, 200)

  fill("#b5baba")
  rect(0, 385, 1800, 190)

  fill("#33353d")
  rect(0, 400, 1800, 160)

  fill("#8b9396")
  rect(0, 400, 1800, 10)

  fill("#eebe55")
  rect(0, 480, 1800, 5)

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

  // BLEND MODE BLEND SHADOWS

  blendMode(MULTIPLY);

  fill ('#241e357d');
  ellipse(Xwheel+85, Ywheel+30, 270, 25)
  ellipse(Xwheel2+85, Ywheel2+30, 270, 25)

  // cars 2 the movie ---------------

  blendMode(BLEND);


  if (Xwheel == 1600) {
    Xwheel = Xwheel - 1050;
  }

  wheelAccel2 = -5;

  Xwheel += wheelAccel;
  Xwheel2 += wheelAccel2;

  fill ('#c34949');
  arc(Xwheel, Ywheel, 140, 120, PI, TWO_PI);
  arc(Xwheel+170, Ywheel, 140, 120, PI, TWO_PI);
  arc(Xwheel+45, Ywheel-57, 110, 145, PI, TWO_PI);
  arc(Xwheel+125, Ywheel-57, 110, 145, PI, TWO_PI);
  rect(Xwheel, Ywheel-70, 130, 70)
  rect(Xwheel, Ywheel-70, 160, 70)
  rect(Xwheel+40, Ywheel-129.5, 90, 69)

  fill ('#813535');
  arc(Xwheel, Ywheel, 100, 100, PI, TWO_PI);
  arc(Xwheel+170, Ywheel, 100, 100, PI, TWO_PI);
  
  fill ('#c1d4e5');
  arc(Xwheel+125, Ywheel-60, 90, 120, 300, 0);
  rect(Xwheel+40, Ywheel-120, 70, 60)
  arc(Xwheel+45, Ywheel-60, 90, 120, PI, PI + HALF_PI);

  fill ('#989898');

  arc(Xwheel, Ywheel, 80, 80, PI, TWO_PI);
  arc(Xwheel+170, Ywheel, 80, 80, PI, TWO_PI);

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
  circle(Xwheel+170, Ywheel, 70)

  fill ('#13171c');
  circle(Xwheel+170, Ywheel, 60)

  fill ('#000000');
  circle(Xwheel+170, Ywheel, 40)

  fill ('#7d7e81');
  circle(Xwheel+170, Ywheel, 30)

  fill ('#a7aaaa');
  circle(Xwheel+170, Ywheel, 25)

  fill ('#ebf0f0');
  circle(Xwheel+175, Ywheel-5, 10)


  fill ('#000000');
  text(`corX: ${mouseX}, corY: ${mouseY}`, mouseX, mouseY + 30)
  text(tLight, mouseX, mouseY + 50)

  // car ontop

  fill ('#3b8de4');
  arc(Xwheel2, Ywheel2, 140, 120, PI, TWO_PI);
  arc(Xwheel2+170, Ywheel2, 140, 120, PI, TWO_PI);
  arc(Xwheel2+45, Ywheel2-57, 110, 145, PI, TWO_PI);
  arc(Xwheel2+125, Ywheel2-57, 110, 145, PI, TWO_PI);
  rect(Xwheel2, Ywheel2-70, 130, 70)
  rect(Xwheel2, Ywheel2-70, 160, 70)
  rect(Xwheel2+40, Ywheel2-129.5, 90, 69)

  fill ('#354e81');
  arc(Xwheel2, Ywheel2, 100, 100, PI, TWO_PI);
  arc(Xwheel2+170, Ywheel2, 100, 100, PI, TWO_PI);
  
  fill ('#c1d4e5');
  arc(Xwheel2+125, Ywheel2-60, 90, 120, 300, 0);
  rect(Xwheel2+60, Ywheel2-120, 70, 60)
  arc(Xwheel2+45, Ywheel2-60, 90, 120, PI, PI + HALF_PI);

  fill ('#989898');

  arc(Xwheel2, Ywheel2, 80, 80, PI, TWO_PI);
  arc(Xwheel2+170, Ywheel2, 80, 80, PI, TWO_PI);

  fill ('#000000');
  circle(Xwheel2, Ywheel2, 70)

  fill ('#13171c');
  circle(Xwheel2, Ywheel2, 60)

  fill ('#000000');
  circle(Xwheel2, Ywheel2, 40)

  fill ('#7d7e81');
  circle(Xwheel2, Ywheel2, 30)

  fill ('#a7aaaa');
  circle(Xwheel2, Ywheel2, 25)

  fill ('#ebf0f0');
  circle(Xwheel2+5, Ywheel2-5, 10)

  fill ('#000000');
  circle(Xwheel2+170, Ywheel2, 70)

  fill ('#13171c');
  circle(Xwheel2+170, Ywheel2, 60)

  fill ('#000000');
  circle(Xwheel2+170, Ywheel2, 40)

  fill ('#7d7e81');
  circle(Xwheel2+170, Ywheel2, 30)

  fill ('#a7aaaa');
  circle(Xwheel2+170, Ywheel2, 25)

  fill ('#ebf0f0');
  circle(Xwheel2+175, Ywheel2-5, 10)


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

  if (Xwheel <= 570) {
      if (tLight === 1) {
      if (wheelAccel >= 5) {
       wheelAccel = 5;
      }
    }

   if (tLight === 2) {
      if (wheelAccel <= 2) {
       wheelAccel = lerp(5, 2, 0.05);
      } else {
       wheelAccel  = 2;
      }
    }
  } else {
  
    wheelAccel = 5;
  
  }


  if (Xwheel >= 3500) {
    Xwheel = -200
  }

  if (Xwheel2 === -300) {
    Xwheel2 = 2000
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    tLight++; // Increases the variable by 1
  }
}