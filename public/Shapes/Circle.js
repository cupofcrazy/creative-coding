export default class Circle {
    constructor(context, x, y, color, radius) {
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.speed = this.randomSpeed(0.01, 0.05);
        console.log(this.speed)
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();

        return this.ctx;
    }
    animate() {
        // this.x += Math.cos(angToRad(45)) * this.speed;
        // this.y += Math.cos(angToRad(45)) * this.speed;
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.ctx.rotate(Math.cos(180 * Math.PI / 180))
    }
    randomSpeed(min, max) {
        return Math.random() * (max - min + 1) + min;

    }
}