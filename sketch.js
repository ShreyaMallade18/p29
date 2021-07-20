const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;

var engine, world;

var holder, ball, ground;
var stand1, stand2;
var ball;
var slingshot;
var polygon_img;
var score = 0;
var backgroundImg;

function preload(){
  //polygon_img = loadImage("polygon.png");
  //backgroundImg = loadImage("bg.png");
  


  getTime();
}




function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(900,400);

  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);

  //level one
  block1 = new block(280,275,30,40)
  block2 = new block(310,275,30,40)
  block3 = new block(340,275,30,40)
  block4 = new block(370,275,30,40)
  block5 = new block(400,275,30,40)
  block6 = new block(430,275,30,40)
  block7 = new block(460,275,30,40)
  block8 = new block(490,275,30,40)
  //level two
  block9 = new block(310,235,30,30)
  block10 = new block(340,235,30,30)
  block11 = new block(370,235,30,30)
  block12 = new block(400,235,30,30)
  block13 = new block(430,235,30,30)
  block14 = new block(460,235,30,30)
  //level three
  block15 = new block(340,195,30,40)
  block16 = new block(370,195,30,40)
  block17 = new block(400,195,30,40)
  block18 = new block(430,195,30,40)
  //level four
  block19 = new block(370,155,30,40)
  block20 = new block(400,155,30,40)
  //level five
  block21 = new block(385,155,30,40);

  
  //set two
  //level one
  blocks1 = new block(640,175,30,40);
  blocks2 = new block(670,175,30,40);
  blocks3 = new block(700,175,30,40);
  blocks4 = new block(730,175,30,40);
  blocks5 = new block(760,175,30,40);
  //level two
  blocks6 = new block(670,135,30,40);
  blocks7 = new block(700,135,30,40);
  blocks8 = new block(730,135,30,40);
  //level three
  blocks9 = new block(700,95,30,40);




  // ball with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  slingShot = new slingShot(this.ball,{x:100,y:200})
  
}

function draw() {
  //background("backgroundImg")
  if(backgroundImg){
    background(backgroundImg);
    }
   
 
}

  Engine.update(engine);
  strokeWeight(2);
  stroke("white");
  textSize(13);
  fill("red");
  text("Score :"+ score, width-300,50);

 

  
      //ground.display();
      strokeWeight(2);
      stroke(15)

      drawSprites();

      stand1.display();
      stand2.display();

      stroke(15);
      fill("black");

      block1.display();
      block1.score();
      block2.display();
      block2.score();
      block3.display();
      block3.score();
      block4.display();
      block4.score();
      block5.display();
      block5.score();
      block6.display();
      block6.score();
      block7.display();
      block7.score();
      block8.display();
      block9.score();
      stroke(15);
      fill("orange");

      block9.display();
      block9.score();
      block10.display();
      block10.score();
      block11.display();
      block11.score();
      block12.display();
      block12.score();
      block13.display();
      block13.score();
      block14.display();
      block14.score();
      stroke(15);
      fill("violet")

      block15.display();
      block15.score();
      block16.display();
      block16.score();
      block17.display();
      block17.score();
      block18.display();
      block18.score();
      stroke(15);
      fill("green");

      block19.display();
      block19.score();
      block20.display();
      block20.score();

      block21.display()
      block21.score();
      stroke(15);
      fill("blue")
     


     stroke(15);
     fill("red");
     blocks1.display();
     blocks2.display();
     blocks3.display();
     blocks4.display();
     blocks5.display();
     stroke(15);
     fill("red");
     blocks6.display();
     blocks7.display();
     blocks8.display();
     stroke(15);
     fill("orange");
     blocks9.display();

     ellipse(ball.position.x, ball.position.y,20);
     slingShot.display();



     //imageMode(CENTER)
     //ball = loadImage("polygon_img, ball.position.x-50, ball.position.y-80,40,40");
     //ellipseMode(RADIUS)


      

    function mouseDragged(){
      Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
    }

   function mouseReleased(){
     slingShot.fly();
   }

   function keyPressed(){
     if(keyCode === 32){
       slingShot.attach(polygon.body)
     }
   }

   async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Pacific/Fiji");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);

    if(hour>=06 && hour <= 18){
      bg = ("MorningImg.png");
    }
      else{
        bg = ("NightImg.png");
      }
      backgroundImg = loadImage(bg);
  }
 
