const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;





function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
    world = engine.world;

    box0 = new Box(240,200,30,350);
    box1 = new Box(300,220,30,330);
    box2 = new Box(350,250,50,300);
    box3 = new Box(400,250,120,300);
    box4 = new Box(520,250,50,300);
    box5 = new Box(590,220,30,330);
    box6 = new Box(650,200,30,350);

}

function draw() {

  Engine.update(engine);
  background(255,255,255);  
  
  
  

  fill("#1E00C1");
  box3.display();

  fill("#3cf902");
  box2.display();
  box4.display();

  fill("#8800BA");
  box0.display();
  box6.display();

  fill("#ffe500");
  box5.display();
  box1.display();

  fill("#ff0000");
  triangle(400,250,520,250,460,150);

  fill("#FF00BF");
  triangle(350,250,400,250,375,220);
  triangle(520,250,570,250,545,220);

  fill("#ef7b76"); 
  triangle(240,200,270,200,255,130);
  triangle(650,200,680,200,665,130);

  fill("#00B4B4");
  triangle(300,220,330,220,315,190);
  triangle(590,220,620,220,605,190);
  



  drawSprites();

}