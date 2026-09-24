let Player = 1
let RectW = 150
let RectH = 150
let RectB = 10
let Box1 = 0
let Box2 = 0
let Box3 = 0
let Box4 = 0
let Box5 = 0
let Box6 = 0
let Box7 = 0
let Box8 = 0
let Box9 = 0
let Win = 0
let winner = 0;
let reset = 0
let ButtonX = 260
let ButtonY = 600
let ButtonW = 150
let ButtonH = 50

let P1c;
let P2c;

function setup() {
  createCanvas(1200, 700)
  P1 = createColorPicker('#ffffff');
  P1.position(650, 500);
  P2 = createColorPicker('#ffffff');
  P2.position(700, 500);
}

function mousePressed(){
  if (mouseButton == LEFT && Win == 0){
    console.log("LMBd")

let RectX = 100
let RectY = 100


if(Win == 0){

if (Box1 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box1 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box2 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box2 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box3 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box3 = Player;
  Player++
}

 RectX = 100;
 RectY += RectH + RectB;

 if (Box4 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box4 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box5 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box5 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box6 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box6 = Player;
  Player++
}

 RectX = 100;
 RectY += RectH + RectB;

  if (Box7 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box7 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box8 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box8 = Player;
  Player++
}

RectX += RectW + RectB;
if (Box9 == 0 &&
  mouseX > RectX && mouseX < RectX + RectW &&
  mouseY > RectY && mouseY < RectY + RectH 
){
  Box9 = Player;
  Player++
}
  
      if (Player > 2){
  Player = 1
}}
  }
console.log(Player)
if (reset == 0 &&
    mouseX > ButtonX && mouseX < ButtonX + ButtonW  &&
    mouseY > ButtonY && mouseY < ButtonY + ButtonH) {
    Box1 = 0
    Box2 = 0
    Box3 = 0
    Box4 = 0
    Box5 = 0
    Box6 = 0
    Box7 = 0
    Box8 = 0
    Box9 = 0
 Win = 0
  }

console.log("reset " + reset)
console.log("win=" + W)
}

function draw() {
  noStroke();
  textFont('Verdana');

  let P1c = P1.color();
  let P2c = P2.color();

  if (Player == 1){
  background("#1c202a");
  }
  if (Player == 2){
    background("#271e1e")
  }

let RectX = 100
let RectY = 100

fill("#f4e8e0")
rect(ButtonX,ButtonY,ButtonW,ButtonH)
textSize(30)
fill("#1c202a")
text("RESET",285,635)

strokeWeight(5)
  if(Box1 == 1) {
    fill(P1c)
  } else if (Box1 == 2) {
    fill(P2c)
  } else {
    fill("#424242");
  }
  rect (RectX,RectY, RectW,RectH)

  RectX += RectW + RectB;
  strokeWeight(5)
   if(Box2 == 1) {
    fill(P1c)
  } else if (Box2 == 2) {
    fill(P2c)
  } else {
    fill("#424242");
  }
  rect (RectX,RectY, RectW,RectH)

  RectX += RectW + RectB;
  strokeWeight(5)
    if(Box3 == 1) {
    fill(P1c)
  } else if (Box3 == 2) {
    fill(P2c)
  } else {
    fill("#424242");
  }
  rect (RectX,RectY, RectW,RectH)

  
RectX = 100
RectY += RectH+ RectB;

  strokeWeight(5)
    if(Box4 == 1) {
    fill(P1c)
  } else if (Box4 == 2) {
    fill(P2c)
  } else {
    fill("#424242");
  }
  rect (RectX,RectY, RectW,RectH)


  RectX += RectW + RectB;
  strokeWeight(5)
    if(Box5 == 1) {
    fill(P1c)
  } else if (Box5 == 2) {
    fill(P2c)
  } else {
    fill("#424242");
  }
  rect (RectX,RectY, RectW,RectH)


  RectX += RectW + RectB;
  strokeWeight(5)
    if(Box6 == 1) {
    fill(P1c)
  } else if (Box6 == 2) {
    fill(P2c)
  } else {
    fill("#424242");
  }
  rect (RectX,RectY, RectW,RectH)

RectX = 100
RectY = RectH *2.75 + RectB;


  strokeWeight(5)
    if(Box7 == 1) {
    fill(P1c)
  } else if (Box7 == 2) {
    fill(P2c)
  } else {
    fill("#424242");
  }
  rect (RectX,RectY, RectW,RectH)


  RectX += RectW + RectB;
  strokeWeight(5)
    if(Box8 == 1) {
    fill(P1c)
  } else if (Box8 == 2) {
    fill(P2c);
  } else {
    fill("#424242");
  }
  rect (RectX,RectY, RectW,RectH)


  RectX += RectW + RectB;
  strokeWeight(5)
    if(Box9 == 1) {
    fill(P1c)
  } else if (Box9 == 2) {
    fill(P2c);
  } else {
    fill("#424242");
  }
  rect (RectX,RectY, RectW,RectH)

  //  wincondities 
    if (Box1 != 0 && Box2 != 0 && Box3 != 0 && Box4 != 0 && Box5 != 0 && Box6 != 0 && Box7 != 0 && Box8 != 0 && Box9 != 0 && Win==0) {
        textSize(60)
        fill("white")
        text ("It's a draw!",610,200)
      }
  if (Box1 != 0 &&
    Box1 == Box2 &&
    Box1 == Box3
  ){ 
     if (Player == 1) {
      Win = +1
      winner = 2;
     line(100,150,575,150)
     } else if (Player == 2) {
       Win = +1
      winner = 1;
     line(100,150,575,150)
     }
    //  if (Win == 1) 
      textSize(60)
      fill("white")
      text ("Player " + winner + " wins",610,200)
    }
     if (Box1 != 0 &&
    Box1 == Box4 &&
    Box1 == Box7
  ){
     if (Player == 1) {
       Win = +1
      winner = 2;
     
     } else if (Player == 2) {
      Win = +1
      winner = 1;
    
     }
      textSize(60)
      fill("white")
      text ("Player " + winner + " wins",610,200)
    }
      if (Box1 != 0 &&
    Box1 == Box5 &&
    Box1 == Box9
  ){
     if (Player == 1) {
       Win = +1
      winner = 2;
   
     } else if (Player == 2) {
       Win = +1
      winner = 1;
   
     }
      textSize(60)
      fill("white")
      text ("Player " + winner + " wins",610,200)
    }
        if (Box2 != 0 &&
    Box2 == Box5 &&
    Box2 == Box8
  ){
     if (Player == 1) {
       Win = +1
      winner = 2;
      
     } else if (Player == 2) {
       Win = +1
      winner = 1;
     
     }
      textSize(60)
      fill("white")
      text ("Player " + winner + " wins",610,200)
    }
        if (Box3 != 0 &&
    Box3 == Box6 &&
    Box3 == Box9
  ){
     if (Player == 1) {
       Win = +1
      winner = 2;
      
     } else if (Player == 2) {
       Win = +1
      winner = 1;

     }
      textSize(60)
      fill("white")
      text ("Player " + winner + " wins",610,200)
    }
        if (Box3 != 0 &&
    Box3 == Box5 &&
    Box3 == Box7
  ){
     if (Player == 1) {
       Win = +1
      winner = 2;
      
     } else if (Player == 2) {
       Win = +1
      winner = 1;
    
     }
      textSize(60)
      fill("white")
      text ("Player " + winner + " wins",610,200)
    }
        if (Box4 != 0 &&
    Box4 == Box5 &&
    Box4 == Box6
  ){
     if (Player == 1) {
       Win = +1
      winner = 2;
      line(100,350,575,350)
     } else if (Player == 2) {
       Win = +1
      winner = 1;
      line(100,350,575,350)
     }
      textSize(60)
      fill("white")
      text ("Player " + winner + " wins",610,200)
    }
        if (Box7 != 0 &&
    Box7 == Box8 &&
    Box7 == Box9
  ){
     if (Player == 1) {
       Win = +1
      winner = 2;
    
     } else if (Player == 2) {
       Win = +1
      winner = 1;
   
     } 
      textSize(50)
      fill("white")
      text ("Player " + winner + " wins",610,200)
  }

    let size = 40 * sin(frameCount * 0.05) + 10;

    //mouse cursor
    fill("white")
    circle(mouseX,mouseY,size)
    }