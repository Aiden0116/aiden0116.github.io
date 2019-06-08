function drawMysteryBox(x, y, scale) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    ctx.scale(scale, scale);
    ctx.fillStyle = "black";
    ctx.fillRect(17 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(18 * UNIT, 2 * UNIT, 1 * UNIT, 15 * UNIT);
    ctx.fillRect(2 * UNIT, 2 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(15 * UNIT, 2 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(2 * UNIT, 15 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(15 * UNIT, 15 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 3 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 0 * UNIT, 15 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(17 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 10 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(1 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 18 * UNIT, 15 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(13 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 8 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 9 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(12 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(8 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 15 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#E2AC00";
    ctx.fillRect(4 * UNIT, 2 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 16 * UNIT, 11 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 17 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 3 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 3 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 4 * UNIT, 1 * UNIT, 11 * UNIT);
    ctx.fillRect(3 * UNIT, 4 * UNIT, 1 * UNIT, 11 * UNIT);
    ctx.fillRect(4 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 4 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 5 * UNIT, 2 * UNIT, 10 * UNIT);
    ctx.fillRect(14 * UNIT, 8 * UNIT, 1 * UNIT, 8 * UNIT);
    ctx.fillRect(4 * UNIT, 8 * UNIT, 1 * UNIT, 8 * UNIT);
    ctx.fillRect(5 * UNIT, 9 * UNIT, 2 * UNIT, 7 * UNIT);
    ctx.fillRect(13 * UNIT, 9 * UNIT, 1 * UNIT, 7 * UNIT);
    ctx.fillRect(7 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "white";
    ctx.fillRect(6 * UNIT, 4 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 5 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 9 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 10 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 11 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.restore();
    ctx.fillStyle = "#D57F00";

    ctx.fillRect(14 * UNIT, 17 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(14 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(13 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 9 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(11 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 1 * UNIT, 15 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 2 * UNIT, 1 * UNIT, 15 * UNIT);
    ctx.fillRect(17 * UNIT, 2 * UNIT, 1 * UNIT, 15 * UNIT);
    ctx.fillRect(2 * UNIT, 17 * UNIT, 14 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 17 * UNIT, 14 * UNIT, 1 * UNIT);



}
function drawEmptyBox(x, y, scale) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    ctx.scale(scale, scale);
    ctx.fillStyle = "#FF611D"
    ctx.fillRect(UNIT, UNIT, 13 * UNIT, 13 * UNIT);
    ctx.fillStyle = "black"
    ctx.fillRect(0, UNIT, UNIT, 13 * UNIT);
    ctx.fillRect(UNIT, 0, 13 * UNIT, UNIT);
    ctx.fillRect(UNIT, 14 * UNIT, 13 * UNIT, UNIT);
    ctx.fillRect(14 * UNIT, UNIT, UNIT, 13 * UNIT);
    ctx.fillRect(2 * UNIT, 2 * UNIT, UNIT, UNIT);
    ctx.fillRect(2 * UNIT, 12 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 2 * UNIT, UNIT, UNIT);
    ctx.fillRect(12 * UNIT, 12 * UNIT, UNIT, UNIT);
    ctx.restore();


}
