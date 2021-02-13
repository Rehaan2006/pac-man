class Pacman{
    constructor(x,y,radius){
        var option={
            isStatic:true
        }
    this.body=Bodies.circle(x,y,radius,option);
    this.radius=radius;
    World.add(world,this.body);
    }
   display(){
 var pos=this.body.position;
    push();
    fill("yellow");
   translate(pos.x, pos.y);
   ellipseMode(RADIUS);
  ellipse( 0, 0, this.radius);
   pop();
}
}