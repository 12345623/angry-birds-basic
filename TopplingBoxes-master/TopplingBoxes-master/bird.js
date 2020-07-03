class Bird {
    constructor() {
      var options = {
          'restitution':0,
          'friction':2.2,
          'density':1.0
      }
      this.body = Bodies.rectangle(10, 20, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.color="red";
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color)
      rect(0, 0, 50, 50);
      pop();
    }
  };
  