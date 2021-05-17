const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var bg = "snow1.jpg";
var backgroundImg;
var maxdrops = 100;
var drops = [];
var girl1,girl1img ;
var boy1,boy1img;
var snowball;

function preload(){
getBackgroundImg();
girl1img = loadImage("green_shirt_hands_on_hips.png")
boy1img = loadImage("15166ece-fd01-4b7f-9663-b553bfa26215.png");
}



function setup() {
  createCanvas(800,600);
 girl1 = createSprite(600, 500, 50, 50);
 girl1.addImage("image",girl1img);
girl1.scale = 0.5;
// girl1.debug = true;
// girl1.setCollider("circle",0,0,0)
//snowball = Bodies.ellipse()

boy1 = createSprite(100,500,50,50);
boy1.addImage("image",boy1img);
boy1.scale = 0.5;

 engine = Engine.create();
 world = engine.world;

 //class snowfall reference
 for (var i=0; i < maxdrops; i++){
  drops.push(new Snow (random(0,800),random(0,400)))
}

}

function draw() {

  text (mouseX , ":" + mouseY, " :")
  Engine.update(engine);
  if (backgroundImg)
  background(backgroundImg);  

for (var a=0; a<maxdrops; a++){
  drops[a].display();
  drops[a].spwanRain();
}



  drawSprites();
}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1500){
      bg = "snow1.jpg";
  }
  if (hour>=1500 && hour<=1900){
    bg = "snow3.jpg"
  }
  else{
      bg = "snow2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}