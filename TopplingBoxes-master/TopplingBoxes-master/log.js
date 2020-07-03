class log{
    constructor(x, y,height,angle,color) {
      var options = {
          'restitution':0,
          'friction':2.0 ,
          'density':0.9
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      this.color=color;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      stroke(this.color);
      rect(0, 0, 20, this.height);
      pop();
    }
}
  