function drawMario() {
   drawEye();
   drawHair();
   drawClothes();
   drawShirt();
   drawSkin();
   // ctx.fillRect(0,0,canvas.width,canvas.height);


}
function drawEye() {
   ctx.fillStyle ="black";
   ctx.fillRect(7*UNIT,2*UNIT,UNIT,2*UNIT)
   
   
}

   function drawHair(){
      ctx.fillStyle ="#843818";
      ctx.fillRect(UNIT,3*UNIT,UNIT,3*UNIT);
      ctx.fillRect(2*UNIT,5*UNIT,UNIT,UNIT);
      ctx.fillRect(2*UNIT,2*UNIT,3*UNIT,UNIT);
      ctx.fillRect(3*UNIT,3*UNIT,UNIT,2*UNIT);
      ctx.fillRect(4*UNIT,4*UNIT,UNIT,UNIT);
      ctx.fillRect(7*UNIT,5*UNIT,4*UNIT,UNIT);
      ctx.fillRect(8*UNIT,4*UNIT,UNIT,UNIT);
      ctx.fillRect(1*UNIT,14*UNIT,4*UNIT,UNIT,);
      ctx.fillRect(0,15*UNIT,5*UNIT,UNIT);
      ctx.fillRect(8*UNIT,15*UNIT,4*UNIT,UNIT);
      ctx.fillRect(8*UNIT,14*UNIT,3*UNIT,UNIT);
       
   }

   function drawClothes() {
      ctx.fillStyle ="blue";
      ctx.fillRect(4*UNIT,7*UNIT,UNIT,3*UNIT);
      ctx.fillRect(4*UNIT,9*UNIT,4*UNIT,UNIT);
      ctx.fillRect(7*UNIT,8*UNIT,UNIT,2*UNIT);
      ctx.fillRect(3*UNIT,10*UNIT,UNIT,4*UNIT);
      ctx.fillRect(2*UNIT,12*UNIT,UNIT,2*UNIT);
      ctx.fillRect(4*UNIT,11*UNIT,UNIT,3*UNIT);
      ctx.fillRect(5*UNIT,10*UNIT,UNIT,3*UNIT);
      ctx.fillRect(6*UNIT,10*UNIT,UNIT,3*UNIT);
      ctx.fillRect(7*UNIT,11*UNIT,UNIT,3*UNIT);
      ctx.fillRect(8*UNIT,10*UNIT,UNIT,4*UNIT);
      ctx.fillRect(9*UNIT,12*UNIT,UNIT,2*UNIT);
   }
   function drawSkin(){
      ctx.fillStyle ="#FCE6B1";
      ctx.fillRect(2*UNIT,3*UNIT,UNIT,2*UNIT);
      ctx.fillRect(3*UNIT,5*UNIT,4*UNIT,UNIT);
      ctx.fillRect(3*UNIT,6*UNIT,7*UNIT,UNIT);
      ctx.fillRect(5*UNIT,6*UNIT,3*UNIT,UNIT);
      ctx.fillRect(4*UNIT,4*UNIT,4*UNIT,UNIT);
      ctx.fillRect(4*UNIT,3*UNIT,3*UNIT,UNIT);
      ctx.fillRect(5*UNIT,2*UNIT,2*UNIT,UNIT);
      ctx.fillRect(0,10*UNIT,UNIT,3*UNIT);
      ctx.fillRect(1*UNIT,10*UNIT,UNIT,3*UNIT);
      ctx.fillRect(2*UNIT,11*UNIT,UNIT,UNIT);
      ctx.fillRect(9*UNIT,11*UNIT,3*UNIT,UNIT);
      ctx.fillRect(10*UNIT,10*UNIT,UNIT,3*UNIT);
      ctx.fillRect(11*UNIT,10*UNIT,UNIT,3*UNIT);
      ctx.fillRect(8*UNIT,2*UNIT,UNIT,2*UNIT);
      ctx.fillRect(9*UNIT,3*UNIT,2*UNIT,2*UNIT);
      ctx.fillRect(11*UNIT,4*UNIT,UNIT,UNIT);
      

   }
   function drawShirt (){
      ctx.fillStyle ="#E93F33";
      ctx.fillRect(0,9*UNIT,4*UNIT,UNIT);
      ctx.fillRect(1*UNIT,8*UNIT,3*UNIT,UNIT);
      ctx.fillRect(2*UNIT,10*UNIT,UNIT,UNIT);
      ctx.fillRect(2*UNIT,7*UNIT,2*UNIT,UNIT);
      ctx.fillRect(5*UNIT,7*UNIT,3*UNIT,UNIT);
      ctx.fillRect(5*UNIT,8*UNIT,2*UNIT,UNIT);
      ctx.fillRect(8*UNIT,8*UNIT,3*UNIT,UNIT);
      ctx.fillRect(8*UNIT,9*UNIT,4*UNIT,UNIT);
      ctx.fillRect(9*UNIT,10*UNIT,UNIT,UNIT);
      ctx.fillRect(2*UNIT,1*UNIT,9*UNIT,UNIT);
      ctx.fillRect(3*UNIT,0,5*UNIT,UNIT);
      ctx.fillRect(5*UNIT,7*UNIT,3*UNIT,UNIT);
      ctx.fillStyle = "orange";
      ctx.fillRect(4*UNIT,10*UNIT,UNIT,UNIT);
      ctx.fillRect(7*UNIT,10*UNIT,UNIT,UNIT);
   }
