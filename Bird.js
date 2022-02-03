class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/portal.png");
    this.trayectoria = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
   
 if(this.body.velocity.x > 10){
  var poisition = [this.body.position.x, this.body.position.y];
  this.trayectoria.push(poisition);
 }
 
 
   for(var i=0; i< this.trayectoria.length; i++) {
     image(this.image, this.trayectoria[i][0],this.trayectoria[i][1], 15, 15)
   }

  }
}
