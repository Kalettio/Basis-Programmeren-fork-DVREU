function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("#f7f4f4");

  x = 100;
  let a = 20;
  let b = 100;
  let add = a + b;
  let decrease = a - b;
  let mult = a * b;
  let div = b / a;
  let greeting = "hello, world!";

  text(add, 150, 180);
  text(decrease, 150, 200);
  text(mult, 150, 220);
  text(div, 150, 240);

  text(x, 150, 160);
  
  text(greeting, 20, 60);
}
