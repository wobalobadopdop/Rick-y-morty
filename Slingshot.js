class portalgunShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        //Constraint = liga cuerpos
        this.portalgun = Constraint.create(options);
        this.portalgun1 = loadImage("sprites/portalgun.png");
        World.add(world, this.portalgun);
    }

    fly(){
        this.portalgun.bodyA = null;
    }

    attach(body){
        this.portalgun.bodyA = body;
    }

    display(){
        var pointB = this.pointB; 
        image(this.portalgun1,pointB.x,pointB.y);
        if(this.portalgun.bodyA){
            
            var pointA = this.portalgun.bodyA.position;
            strokeWeight(4);
            line(pointA.x -20, pointA.y, pointB.x, pointB.y);
            line(pointA.x -20, pointA.y, pointB.x +40, pointB.y);
        }
    }
    
}