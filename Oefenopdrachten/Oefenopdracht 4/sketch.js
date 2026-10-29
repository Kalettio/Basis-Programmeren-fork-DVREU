function setup() {
  createCanvas(1200, 600);

}

let colors = [red, green, blue, purple, yellow];

function draw() {
  background("#f7f4f4");

  textSize(15)

  text("1", 40, 50)
  text("2", 40, 200)
  text("3", 40, 350)
  text("4", 40, 500)
  text("5", 400, 50)
  text("6", 400, 200)
  text("7", 400, 350)
  text("8", 400, 500)
  text("9", 760, 50)

  g = 0;
  for (i = 0; i < 5; i++) {
    text(colors[g], 40, 50)

    g++;
  }
}