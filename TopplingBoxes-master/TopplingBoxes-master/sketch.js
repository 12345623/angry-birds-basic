const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var ground;
var pig1;
var pig2;
var log1;
var log2;
var log3;
var log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,50,100);
    box1 = new Box(700,330,70,70,"yellow");
    box2 = new Box(920,330,70,70,"yellow");
    box3 = new Box(700,230,70,70,"yellow");
    box4 = new Box(920,230,70,70,"yellow");
    box5 = new Box(810,130,70,70,"yellow");
    pig1=new pig(815,330,"green");
    pig2=new pig(815,230,"green");
    log1=new log(811,250,290,PI/2,"yellow");
    log2=new log(811,150,290,PI/2,"yellow");
    log3=new log(815,90,150,PI/7,"yellow");
    log4=new log(915,90,150,-PI/7,"yellow");
    bird=new Bird();
}

function draw(){
    background(0);
    text(mouseX+";"+mouseY,50,50);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}