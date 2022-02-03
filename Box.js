class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/meseeks.png");
    this.invisible = 255
  }
  display () {
    if(this.body.speed < 3.5) {
      super.display();
    } else {
      World.remove(world, this.body);
      //poner una imagen y entintarla para que desaparezca:
      push();
      tint(255, this.invisible -=10);
      imageMode(CENTER);
      image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
      pop();
    }
  }

};

