const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var box1,box2,box3,box4,box5,box6;
var rock;
var chain1,chain2,chain3,chain4,chain5;
var flag;

function preload() {
    bg = loadImage("images/bg.jpg")

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    box1 = new Boggie(150,350,50,50);
    box2 = new Boggie(250,350,50,50);
    box3 = new Boggie(350,350,50,50);
    box4 = new Boggie(450,350,50,50);
    box5 = new Boggie(550,350,50,50);
    box6 = new Boggie(650,350,50,50);

    rock = new Rock(850,350,90,90);

    chain1 = new Chain(box1.body,box2.body);
    chain2 = new Chain(box2.body,box3.body)
    chain3 = new Chain(box3.body,box4.body)
    chain4 = new Chain(box4.body,box5.body)
    chain5 = new Chain(box5.body,box6.body)

}

function draw(){
    background(bg)
    Engine.update(engine);

    box1.show();
    box2.show();
    box3.show();
    box4.show();
    box5.show();
    box6.show();

    rock.show();

    chain1.show();
    chain2.show();
    chain3.show();
    chain4.show();
    chain5.show();

    var collicion = Matter.SAT.collides(box6.body, rock.body)
    if(collicion.collided){
        flag = true;
    }
    if(flag){
        textSize(25)
        fill("black")
        text("Crash",600,200);
    }

}

function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
        Matter.Body.applyForce(box6.body, box6.body.position,{x: 1, y:0});
    }

}