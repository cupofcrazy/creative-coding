import Loader from '../public/Loader'
import * as dat from 'dat.gui';
import { TweenMax, Power3 } from 'gsap'
import { randomInt, dist, angToRad, colors } from '../public/utils/index';
import Circle from '../public/Shapes/Circle';
import Rect from '../public/Shapes/Rect'
import Point from '../public/Shapes/Point'

// Loading
let loader = new Loader();
window.addEventListener('load', () => {
    loader.onComplete();
})

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const gui = new dat.GUI();

// Create circle
function background(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
}

console.log(dist(5, 10, 2, 8))


let randomColor = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas context
const ctx = canvas.getContext('2d');

// Set background

// Arrays of Shapes
let circles = [];
let rectangles = [];


const circleFolder = gui.addFolder('circles');

for (let i = 0; i < 300; i++) {
    // ctx.arc(i * 10, i + 10, 50, 0, Math.PI / 180, false);

    const p1 = new Point(randomInt(0, WIDTH), randomInt(0, HEIGHT));
    // const p2 = new Point((randomInt(0, HEIGHT), randomInt(0, HEIGHT)));

    // ctx.translate(window.innerWidth / 2, window.innerHeight / 2);
    const circle = new Circle(ctx, p1.x, p1.y, randomColor(colors), randomInt(1, 30), true);
    const rect = new Rect(ctx, p1.x, p1.y, randomInt(2, 10), randomInt(2, 10), randomColor(colors));

    // push shapes to thier respective arrays
    circles.push(circle)
    rectangles.push(rect)


    // create a folder for shapes
    circleFolder.add(circles[i], 'x', 0, WIDTH)
    circleFolder.add(circles[i], 'y', 0, HEIGHT)

    circle.draw();
    rect.draw();

}

function animate() {
    requestAnimationFrame(animate);
    background('blue')
    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        circle.draw();
    }
}

// Mouse interaction
canvas.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;

    circles.forEach((circle, index) => {
        TweenMax.to(circle, index * 0.01, {
                x: x,
                y: y,
                ease: Expo.ease
            })
            // setTimeout(() => {
            //     circle.x = x;
            //     circle.y = y;
            // }, index * 10)
    })
})

animate();