class Drop {
  constructor(p) {
    this.p = p;
    this.x = p.random(p.width);
    this.y = p.random(-500, -50);
    this.z = p.random(0, 20);
    this.len = p.map(this.z, 0, 20, 10, 40);
    this.yspeed = p.map(this.z, 0, 20, 1, 20);
  }
  fall() {
    this.y += this.yspeed;
    let grav = this.p.map(this.z, 0, 20, 0, 0.2);
    this.yspeed += grav;

    if (this.y > this.p.height) {
      this.y = this.p.random(-200, -100);
      this.yspeed = this.p.map(this.z, 0, 20, 4, 10);
    }
  }
  show() {
    let thick = this.p.map(this.z, 0, 20, 1, 3);
    this.p.strokeWeight(thick);
    this.p.stroke(138, 43, 226);
    this.p.line(this.x, this.y, this.x, this.y + this.len);
  }
  // this.x = random()
}
export { Drop };
