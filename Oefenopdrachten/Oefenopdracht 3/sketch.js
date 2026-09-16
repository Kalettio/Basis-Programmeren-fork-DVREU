function setup() {
  createCanvas(800, 600);

}

let x = 1;


function draw() {
  background("#f7f4f4");
  strokeWeight(0);

  

  fill('#24232f')
  rect(300, 50, 100, 300)

  // traffic light

  fill('#9594a5')
  circle(350, 100, 70)
  circle(350, 200, 70)
  circle(350, 300, 70)

  fill('#622335')
  circle(350, 100, 60)

  fill('#916030')
  circle(350, 200, 60)

  fill('#2f6832')
  circle(350, 300, 60)

  fill('#902e2e')
  circle(350, 100, 50)

  fill('#a68c35')
  circle(350, 200, 50)

  fill('#42903f')
  circle(350, 300, 50)

  fill('#b03f3f')
  circle(360, 90, 20)

  fill('#bca044')
  circle(360, 190, 20)

  fill('#55a953')
  circle(360, 290, 20)



  

  text(x, 50, 50)



  if (x === 4) {
    x = 1;
  }

  if (x == 0) {
    fill('#c25757')
    circle(350, 100, 50)
  }

  if (x == 1) {
    fill('#d34848')
    circle(350, 100, 60)
    fill('#e76b53')
    circle(350, 100, 50)
    fill('#ef7f4f')
    circle(360, 90, 20)
  }

  if (x == 2) {
    fill('#f9c06b')
    circle(350, 200, 60)
    fill('#ffe252')
    circle(350, 200, 50)
    fill('#ffffff')
    circle(360, 190, 20)
  }

  if (x == 3) {
    fill('#4bb971')
    circle(350, 300, 60)
    fill('#56d15c')
    circle(350, 300, 50)
    fill('#9ae76e')
    circle(360, 290, 20)
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    x++; // Increases the variable by 1
  }
}