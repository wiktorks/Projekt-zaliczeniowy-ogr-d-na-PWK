const canvas = document.getElementById("garden");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

function drawTree(x, y, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
}

function drawPlants(x, y, size, color) {
    let coords = [
        [-(size * 0.2), 0],
        [-(size * 0.5), -(size * 0.6)],
        [-(size * 0.6), size * 0.2],
        [size * 0.2, -(size * 0.5)],
        [size * 0.45, 0, size * 0.2],
        [-(size * 0.1), size * 0.5],
        [size * 0.4, size * 0.45]
    ];
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = color;
    for (coor of coords) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(coor[0], coor[1], size * 0.2, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(coor[0], coor[1], size * 0.05, 0, Math.PI * 2, true);
        ctx.fill();
    }

    ctx.restore();
}

function drawRoad(x1, y1, x2, y2, width) {
    ctx.save();
    ctx.translate(x1, y1);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = "brown";
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.restore();
}

function drawStone(x, y, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(-(size * 0.5), 0);
    ctx.lineTo(-(size * 0.3), -(size * 0.55));
    ctx.lineTo(size * 0.25, -(size * 0.65));
    ctx.lineTo(size * 0.5, size * 0.2);
    ctx.lineTo(size * 0.3, size * 0.35);
    ctx.lineTo(size * 0.3, size * 0.35);
    ctx.lineTo(size * 0.1, size * 0.7);
    ctx.lineTo(-(size * 0.1), size * 0.6);
    ctx.lineTo(-(size * 0.3), size * 0.65);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.restore();
}