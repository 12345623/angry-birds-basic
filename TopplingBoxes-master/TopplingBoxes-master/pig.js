class pig {
    constructor(x, y,color) {
      var options = {
          'restitution':0,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.width = 60;
      this.height = 60;
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
      fill(this.color);
      rect(0, 0, 60, 60);
      pop();
    }
  };
  