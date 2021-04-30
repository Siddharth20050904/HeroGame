const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var monster;
var block1, block2;
var hero;
var rope;

function preload() {
  bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1500, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750,550,1300,20);

  monster = new Monster(1200,200,300,400);

  block1 = new Block(1000,500,75,75);
  block2 = new Block(1000,400,75,75);
  block3 = new Block(1000,300,75,75);
  block4 = new Block(1000,200,75,75);

  block5 = new Block(900,500,75,75);
  block6 = new Block(900,400,75,75);
  block7 = new Block(900,300,75,75);
  block8 = new Block(900,200,75,75);

  block9 = new Block(1000,100,75,75);

  hero = new Superhero(200,300,300,300);
  rope = new Rope(hero.body,{x:200, y:300});
  Engine.run(engine);
}

function draw() {
  background(bg);
  text("x : "+mouseX +", y : "+mouseY,10,10);

  ground.display();

  monster.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  hero.display();

  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode===32){
    rope.attach(hero.body);
    Matter.Body.setPosition(hero.body,{x:200,y:300});
  }
}
