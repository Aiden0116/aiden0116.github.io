function drawCoin(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    ctx.fillStyle = "brown";
    ctx.fillRect(0, 0, 10 * UNIT, 16 * UNIT);
    ctx.restore();
}
