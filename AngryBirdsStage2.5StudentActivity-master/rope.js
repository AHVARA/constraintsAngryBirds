class Rope {

constructor(bodyA, bodyB)
{
  var options = {
      bodyA:bodyA,
      bodyB:bodyB,
      length:10,
      stiffness:0.03
  }
    this.rope = Constraint.create(options)
    World.add(world,this.rope);

}
display(){
var pointA = this.rope.bodyA.position;
var pointB = this.rope.bodyB.position;
stroke("blue");
strokeWeight(3);
line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}