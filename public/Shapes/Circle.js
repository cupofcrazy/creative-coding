export default class Circle {
    constructor(context, x, y, color, radius, stroke) {
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.stroke = stroke;
        this.speed = this.randomSpeed(0.01, 0.05);

        console.log(this.speed)
    }
    draw() {
        let isStroke = this.stroke ? true : false;

        if (isStroke) this.ctx.fillStyle = this.color;
        else this.ctx.strokeStyle = this.color;

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.ctx.closePath();

        
        if (isStroke)  this.ctx.fill();
        else this.ctx.stroke()


        return this.ctx;
    }
    randomSpeed(min, max) {
        return Math.random() * (max - min + 1) + min;

    }
}