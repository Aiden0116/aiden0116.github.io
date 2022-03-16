function drawMario(x, y, frame) {
   ctx.save();
   ctx.translate(x * UNIT, y * UNIT);
   if (frame == 1) {

      ctx.translate(2 * UNIT, 0);
      ctx.fillStyle = "#843818";
      ctx.fillRect(UNIT, 3 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(2 * UNIT, 5 * UNIT, UNIT, UNIT);
      ctx.fillRect(2 * UNIT, 2 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(3 * UNIT, 3 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(4 * UNIT, 4 * UNIT, UNIT, UNIT);
      ctx.fillRect(7 * UNIT, 5 * UNIT, 4 * UNIT, UNIT);
      ctx.fillRect(8 * UNIT, 4 * UNIT, UNIT, UNIT);

      ctx.fillStyle = "black";
      ctx.fillRect(7 * UNIT, 2 * UNIT, UNIT, 2 * UNIT);

      ctx.fillStyle = "#FCE6B1";
      ctx.fillRect(2 * UNIT, 3 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(3 * UNIT, 5 * UNIT, 4 * UNIT, UNIT);
      ctx.fillRect(3 * UNIT, 6 * UNIT, 7 * UNIT, UNIT);
      ctx.fillRect(5 * UNIT, 6 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(4 * UNIT, 4 * UNIT, 4 * UNIT, UNIT);
      ctx.fillRect(4 * UNIT, 3 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(5 * UNIT, 2 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(0, 10 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(1 * UNIT, 10 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(2 * UNIT, 11 * UNIT, UNIT, UNIT);
      ctx.fillRect(9 * UNIT, 11 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(10 * UNIT, 10 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(11 * UNIT, 10 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(8 * UNIT, 2 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(9 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
      ctx.fillRect(11 * UNIT, 4 * UNIT, UNIT, UNIT);

      ctx.fillStyle = "blue";
      ctx.fillRect(4 * UNIT, 7 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(4 * UNIT, 9 * UNIT, 4 * UNIT, UNIT);
      ctx.fillRect(7 * UNIT, 8 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(3 * UNIT, 10 * UNIT, UNIT, 4 * UNIT);
      ctx.fillRect(2 * UNIT, 12 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(4 * UNIT, 11 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(5 * UNIT, 10 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(6 * UNIT, 10 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(7 * UNIT, 11 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(8 * UNIT, 10 * UNIT, UNIT, 4 * UNIT);
      ctx.fillRect(9 * UNIT, 12 * UNIT, UNIT, 2 * UNIT);


      ctx.fillStyle = "#E93F33";
      ctx.fillRect(0, 9 * UNIT, 4 * UNIT, UNIT);
      ctx.fillRect(1 * UNIT, 8 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(2 * UNIT, 10 * UNIT, UNIT, UNIT);
      ctx.fillRect(2 * UNIT, 7 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(5 * UNIT, 7 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(5 * UNIT, 8 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(8 * UNIT, 8 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(8 * UNIT, 9 * UNIT, 4 * UNIT, UNIT);
      ctx.fillRect(9 * UNIT, 10 * UNIT, UNIT, UNIT);
      ctx.fillRect(2 * UNIT, 1 * UNIT, 9 * UNIT, UNIT);
      ctx.fillRect(3 * UNIT, 0, 5 * UNIT, UNIT);
      ctx.fillRect(5 * UNIT, 7 * UNIT, 3 * UNIT, UNIT);

      ctx.fillStyle = "orange";
      ctx.fillRect(4 * UNIT, 10 * UNIT, UNIT, UNIT);
      ctx.fillRect(7 * UNIT, 10 * UNIT, UNIT, UNIT);

      ctx.fillStyle = "#843818";
      ctx.fillRect(0, 15 * UNIT, 4 * UNIT, UNIT);
      ctx.fillRect(8 * UNIT, 15 * UNIT, 4 * UNIT, UNIT);
      ctx.fillRect(8 * UNIT, 14 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(1 * UNIT, 14 * UNIT, 3 * UNIT, UNIT);
      
   } else if (frame == 2) {
      ctx.fillStyle = "#FCE6B1";
      ctx.fillRect(0, 8 * UNIT, 2 * UNIT, 3 * UNIT);
      ctx.fillRect(2 * UNIT, 9 * UNIT, UNIT, UNIT);
      ctx.fillRect(4 * UNIT, 3 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(5 * UNIT, 5 * UNIT, 4 * UNIT, 2 * UNIT);

      ctx.fillRect(7 * UNIT, 2 * UNIT, 2 * UNIT, 5 * UNIT);
      ctx.fillRect(9 * UNIT, 4 * UNIT, UNIT, UNIT);
      ctx.fillRect(9 * UNIT, 6 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(10 * UNIT, 2 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(11 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
      ctx.fillRect(13 * UNIT, 4 * UNIT, UNIT, UNIT);
      ctx.fillRect(13 * UNIT, 8 * UNIT, 2 * UNIT, 2 * UNIT);
      ctx.fillRect(12 * UNIT, 8 * UNIT, UNIT, UNIT);
      ctx.fillRect(12 * UNIT, 8 * UNIT, UNIT, UNIT);
      ctx.fillRect(4*UNIT,3*UNIT,UNIT,2*UNIT);


      ctx.fillStyle = "blue";
      ctx.fillRect(6 * UNIT, 7 * UNIT, UNIT, 6 * UNIT);
      ctx.fillRect(7 * UNIT, 7 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(8 * UNIT, 8 * UNIT, UNIT, 5 * UNIT);
      ctx.fillRect(9 * UNIT, 9 * UNIT, 2 * UNIT, 5 * UNIT);
      ctx.fillRect(10 * UNIT, 11 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(4 * UNIT, 10 * UNIT, 2 * UNIT, 4 * UNIT);
      ctx.fillRect(3 * UNIT, 11 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(2 * UNIT, 12 * UNIT, UNIT, UNIT);
      ctx.fillRect(7 * UNIT, 10 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(9 * UNIT, 11 * UNIT, 3 * UNIT, 3 * UNIT);

      ctx.fillStyle = "red";
      ctx.fillRect(5 * UNIT, 0, 5 * UNIT, UNIT);
      ctx.fillRect(2 * UNIT, 7 * UNIT, 4 * UNIT, 2 * UNIT);
      ctx.fillRect(4 * UNIT, UNIT, 9 * UNIT, UNIT);
      ctx.fillRect(5 * UNIT, 3 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(9 * UNIT, 8 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(8 * UNIT, 7 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(11 * UNIT, 9 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(4 * UNIT, 9 * UNIT, 2 * UNIT, UNIT);

      ctx.fillStyle = "#843818";
      ctx.fillRect(13 * UNIT, 10 * UNIT, UNIT, UNIT);
      ctx.fillRect(12 * UNIT, 11 * UNIT, 2 * UNIT, 3 * UNIT);
      ctx.fillRect(UNIT, 13 * UNIT, 2 * UNIT, 2 * UNIT);
      ctx.fillRect(2 * UNIT, 15 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(3 * UNIT, 14 * UNIT, UNIT, UNIT);
      ctx.fillRect(4 * UNIT, 15 * UNIT, UNIT, UNIT);
      ctx.fillRect(3 * UNIT, 3 * UNIT, 3 * UNIT, 3 * UNIT);
      ctx.fillRect(4 * UNIT, 5 * UNIT, UNIT, UNIT);
      ctx.fillRect(4 * UNIT, 2 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(9 * UNIT, 5 * UNIT, 4 * UNIT, UNIT);
      ctx.fillRect(10 * UNIT, 4 * UNIT, UNIT, UNIT);
      
      ctx.fillRect(6 * UNIT, 4 * UNIT, UNIT, UNIT);
      ctx.fillRect(6 * UNIT, 3 * UNIT, UNIT, UNIT);
      ctx.fillStyle = "#FCE6B1";
      ctx.fillRect(6 * UNIT, 3 * UNIT, UNIT, UNIT);
      ctx.fillRect(4*UNIT,3*UNIT,UNIT,2*UNIT);
      ctx.fillStyle="black"
      ctx.fillRect(9 * UNIT, 2 * UNIT, UNIT, 2 * UNIT);


      ctx.fillStyle = "orange";
      ctx.fillRect(7 * UNIT, 9 * UNIT, UNIT, UNIT);
   } else if (frame == 3) {
      ctx.translate(3 * UNIT, 0);
      ctx.fillStyle = "#FCE6B1";
      ctx.fillRect(UNIT, 3 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(2 * UNIT, 5 * UNIT, 4 * UNIT, 2 * UNIT);
      ctx.fillRect(3 * UNIT, 3 * UNIT, UNIT, UNIT);
      ctx.fillRect(6 * UNIT, 6 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(4 * UNIT, 2 * UNIT, 2 * UNIT, 3 * UNIT);
      ctx.fillRect(6 * UNIT, 4 * UNIT, UNIT, UNIT);
      ctx.fillRect(7 * UNIT, 2 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(8 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
      ctx.fillRect(10 * UNIT, 4 * UNIT, UNIT, UNIT);
      ctx.fillRect(3 * UNIT, 11 * UNIT, 2 * UNIT, 2 * UNIT);
      ctx.fillRect(5 * UNIT, 11 * UNIT, UNIT, UNIT);
      ctx.fillRect(8 * UNIT, 9 * UNIT, UNIT, UNIT);

      ctx.fillStyle = "#843818";
      ctx.fillRect(0, 3 * UNIT, UNIT, 3 * UNIT);
      ctx.fillRect(UNIT, 5 * UNIT, UNIT, UNIT);
      ctx.fillRect(UNIT, 2 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(2 * UNIT, 3 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(3 * UNIT, 4 * UNIT, UNIT, UNIT);
      ctx.fillRect(6 * UNIT, 2 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(7 * UNIT, 4 * UNIT, UNIT, UNIT);
      ctx.fillRect(6 * UNIT, 5 * UNIT, 4 * UNIT, UNIT);

      ctx.fillStyle = "red";
      ctx.fillRect(2 * UNIT, 0, 5 * UNIT, UNIT);
      ctx.fillRect(UNIT, UNIT, 9 * UNIT, UNIT);

      ctx.fillStyle = "red";
      ctx.fillRect(0, 8 * UNIT, 3 * UNIT, 3 * UNIT);
      ctx.fillRect(UNIT, 7 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(UNIT, 11 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(3 * UNIT, 10 * UNIT, UNIT, UNIT);
      ctx.fillRect(3 * UNIT, 8 * UNIT, UNIT, UNIT);
      ctx.fillRect(2 * UNIT, 12 * UNIT, UNIT, UNIT);
      ctx.fillRect(4 * UNIT, 7 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(6 * UNIT, 8 * UNIT, 2 * UNIT, UNIT);

      ctx.fillStyle = "#244AFC";
      ctx.fillRect(3 * UNIT, 7 * UNIT, UNIT, UNIT);
      ctx.fillRect(4 * UNIT, 8 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(3 * UNIT, 9 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(4 * UNIT, 10 * UNIT, 2 * UNIT, UNIT);
      ctx.fillRect(6 * UNIT, 9 * UNIT, 2 * UNIT, 4 * UNIT);
      ctx.fillRect(8 * UNIT, 10 * UNIT, UNIT, 2 * UNIT);
      ctx.fillRect(5 * UNIT, 12 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(2 * UNIT, 13 * UNIT, 3 * UNIT, UNIT);
      ctx.fillRect(0, 10 * UNIT, UNIT, UNIT);
      ctx.fillRect(UNIT, 11 * UNIT, UNIT, UNIT);

      ctx.fillStyle = "#843818";
      ctx.fillRect(2 * UNIT, 14 * UNIT, 4 * UNIT, 2 * UNIT);
      ctx.fillRect(5 * UNIT, 13 * UNIT, 3 * UNIT, 2 * UNIT);
      ctx.fillRect(8 * UNIT, 14 * UNIT, UNIT, UNIT);

      ctx.fillStyle = "#FCE6B1";
      ctx.fillRect(5 * UNIT, 9 * UNIT, UNIT, UNIT);
      
      ctx.fillStyle="black"
      ctx.fillRect(6 * UNIT, 2 * UNIT, UNIT, 2 * UNIT);


      ctx.fillStyle = "orange";
      ctx.fillRect(5 * UNIT, 9 * UNIT, UNIT, UNIT);
   } else if (frame == 4) {
      

      // ctx.fillStyle = "#FCE6B1"
      // ctx.fillRect(0, 9 * UNIT, 2 * UNIT, 2 * UNIT);
      // ctx.fillRect(UNIT, 11 * UNIT, UNIT, UNIT);
      // ctx.fillRect(2 * UNIT, 10 * UNIT, UNIT, UNIT);
      // ctx.fillRect(5*UNIT,4*UNIT,UNIT,2*UNIT);
      // ctx.fillRect(6*UNIT,6*UNIT,4*UNIT,2*UNIT);
      // ctx.fillRect(8*UNIT,7*UNIT,5*UNIT,UNIT);
      // ctx.fillRect(8*UNIT,3*UNIT,2*UNIT,3*UNIT);
      // ctx.fillRect(10*UNIT,5*UNIT,UNIT,UNIT)
      // ctx.fillRect(11*UNIT,3*UNIT,UNIT,2*UNIT);
      // ctx.fillRect(11*UNIT,4*UNIT,2*UNIT,UNIT);
      // ctx.fillRect(12*UNIT,5*UNIT,3*UNIT,UNIT);
      // ctx.fillRect(13*UNIT,0,3*UNIT,3*UNIT);
      // ctx.translate(0, UNIT);
      // ctx.fillStyle = "red";
      // ctx.fillRect(2 * UNIT, 7 * UNIT, 5 * UNIT, 3 * UNIT);
      // ctx.fillRect(UNIT, 8 * UNIT, UNIT, UNIT);
      // ctx.fillRect(6 * UNIT, 10 * UNIT, UNIT, UNIT);
      // ctx.fillRect(7 * UNIT, 8 * UNIT, UNIT, 2 * UNIT);
      // ctx.fillRect(8 * UNIT, 7 * UNIT, 3 * UNIT, UNIT);
      // ctx.fillRect(9 * UNIT, 8 * UNIT, 3 * UNIT, UNIT);
      // ctx.fillRect(12 * UNIT, 7 * UNIT, UNIT, UNIT);
      // ctx.fillRect(5*UNIT,2*UNIT,10*UNIT,UNIT);
      // ctx.fillRect(6*UNIT,UNIT,6*UNIT,UNIT);
      
      // ctx.fillStyle = "blue"
      // ctx.fillRect(7 * UNIT, 7 * UNIT, UNIT, UNIT);
      // ctx.fillRect(8 * UNIT, 8 * UNIT, UNIT, 2 * UNIT);
      // ctx.fillRect(9 * UNIT, 9 * UNIT, 4 * UNIT, UNIT);
      // ctx.fillRect(12*UNIT,8*UNIT,UNIT,UNIT);
      // ctx.fillRect(11*UNIT,7*UNIT,UNIT,UNIT);
      // ctx.fillRect(4*UNIT,10*UNIT,2*UNIT,2*UNIT);
      // ctx.fillRect(5*UNIT,12*UNIT,3*UNIT,4*UNIT);
      // ctx.fillRect(8*UNIT,10*UNIT,7*UNIT,3*UNIT);
      // ctx.fillRect(8*UNIT,13*UNIT,4*UNIT,2*UNIT);
      // ctx.fillStyle="orange"
      // ctx.fillRect(9*UNIT,10*UNIT,UNIT,UNIT);
      // ctx.fillRect(12*UNIT,10*UNIT,UNIT,UNIT);
      // ctx.fillStyle="black";
      // ctx.fillRect(10*UNIT,3*UNIT,UNIT,2*UNIT);
      // ctx.fillStyle="#813717";
      // ctx.fillRect(4*UNIT,3*UNIT,UNIT,3*UNIT);
      // ctx.fillRect(5*UNIT,5*UNIT,UNIT,UNIT);
      // ctx.fillRect(3*UNIT,13*UNIT,2*UNIT,2*UNIT);
      // ctx

   }
   ctx.restore();


}
