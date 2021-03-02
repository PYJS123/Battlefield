let players = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 15; i++) {
    let w = random(40, 180);
    let h = w;
    players.push(new Player(random(width), random(height), w, h, color(random(255), random(255), random(255))));
  }

  rectMode(CENTER);
  strokeWeight(10);
}

function draw() {
  background(51);

  for (let i = 0; i < players.length; i++) {
    players[i].update();
    players[i].show();
  }
}
