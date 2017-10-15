window.onload = setup;
var width, height;

function setup() {
    canvas = document.getElementById("c");
    c = canvas.getContext("2d");
    sizeCanvas();
    draw(width / 2, 100, 100);
}

function draw(x, y, w) {
    line(x, y, x - w, y + w);
    line(x, y, x + w, y + w);
    console.log(w);
    if (w > 5) draw(x - w, y + w, w / 2);
    if (w > 5) draw(x + w, y + w, w / 2);
}

function line(x, y, x1, y1) {
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x1, y1);
    c.stroke();
}

function sizeCanvas() {
    height = window.innerHeight;
    width = window.innerWidth;
    canvas.height = height;
    canvas.width = width;
}

window.onresize = function() {
    sizeCanvas();
    draw(width / 2, 100, 100);
};
