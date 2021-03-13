class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      
      this.image=loadImage(paper.png);

      World.add(world, this.body);
      }
    display(){
      ellipseMode(RADIUS);
      imageMode(CENTER);
      fill("yellow");
      image(this.image,0,0,this.width,this.height);
      circle(this.body.position.x, this.body.position.y, this.radius);
    }
    };