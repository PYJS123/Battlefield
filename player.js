class Player {
  constructor(x, y, w, h, colour) {       // Add name param later
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.noiseStartVal = random(-1000, 1000);
    this.noiseInt = random(0.005, 0.2);
    // this.name = name;
    this.colour = colour;
    this.speed = random(1, 5);
  }

  show() {
    fill(this.colour);
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    let temp = map(noise(this.noiseStartVal), 0, 1, 0, TWO_PI);
    this.x += sin(temp) * this.speed;
    this.y += -cos(temp) * this.speed;
    this.x = constrain(this.x, this.w / 2, width - this.w / 2);
    this.y = constrain(this.y, this.y / 2, height - this.h / 2);
    this.noiseStartVal += this.noiseInt;
  }
}
