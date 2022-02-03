//integrando el motor fisico.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, portalgun1;
var just = []
var evilmorty1;
function preload() {
    backgroundImg = loadImage("sprites/pepe.jpg");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    //creacion del mundo
    world = engine.world;

    


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
  
    evilmorty1 = new evilmorty(100,200);
    //push, sirve para agregar elementos a la matrix de just.For, es un bucle :v

    for(var i = 700;i <= 900;i +=50){
    just.push(new Box(i,350,50,50))
    }
    for(var i = 725;i <= 875;i +=50){
        just.push(new Box(i,300,50,50))
        }
    for(var i = 750;i <= 850;i +=50){
            just.push(new Box(i,250,50,50))
            }
    for(var i = 775;i <= 825;i +=50){
            just.push(new Box(i,200,50,50))
                }
                for(var i = 800;i <= 800;i +=50){
                    just.push(new Box(i,150,50,50))
                        }
    //box1 = new Box(700,320,50,50);
    //box2 = new Box(920,320,50,50);
    //pig1 = new Pig(810, 350);

    //box3 = new Box(700,240,50,70);
    //box4 = new Box(920,240,50,70);
    //pig3 = new Pig(810, 220);

    bird = new Bird(200,50);
    portalgun1 = new portalgunShot(bird.body,{x:180, y:50});
                    }
function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    //box1.display();
    //box2.display();
    ground.display();
    evilmorty1.display();
    //pig1.display();
    for(var i = 0;i < just.length;i +=1){
    just[i].display();
    }
    //box3.display();
    //box4.display();
    //pig3.display();

    //box5.display();

    bird.display();
    portalgun1.display();
    platform.display();   
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    portalgun1.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        portalgun1.attach(bird.body);
    }
}
async function getTime (){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Mexico_City");
    var responseJSON = await response.json();
    var hour = responseJSON.datetime.slice(11,13);
    console.log(hour);
    if(hour >6 && hour <18 ){
    backgroundImg = loadImage("sprites/día.jpg");
   
  }
 else{
 backgroundImg = loadImage("sprites/pepe.jpg");
  }
 }
 