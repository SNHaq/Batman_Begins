const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var thunder1,thunder2,thunder3,thunder4;
var BruceImage, Bruce;
var engine, world;

var drops = [];
var rand;

var maxDrops = 100;
var thunderCreatedFrame = 0;
var thunder; 
var umbrella;
var ground;

function preload(){
   BruceAnimation = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");
   BruceImage = loadImage("walking_1.png");
   thunderImage1 = loadImage("1.png");
   thunderImage2 = loadImage("2.png");
   thunderImage3 = loadImage("3.png");
   thunderImage4 = loadImage("4.png");
}

function setup(){
   engine = Engine.create();
   world = engine.world; 

   createCanvas(400,500);

   Bruce = createSprite(200,380,20,20);
   Bruce.addAnimation("BruceWalking", BruceAnimation);
   Bruce.scale = 0.3;

   ground = createSprite(200,490,400,25);

   //Here we are creating the rain drops.
   if(frameCount%150 === 0){
      for(var i = 0; i<maxDrops; i++){
         drops.push(new Drops(random(0,400), random(0,400)));
      }
   } 
}

function draw(){
   Engine.update(engine);
   background("darkblue");


   //Here we are creating the thunder. 
   rand = Math.round(random(1,4));
   if(frameCount%80 === 0){
      thunderCreatedFrame=frameCount;
      thunder = createSprite(random(10,370),random(10,30),10,10)
      switch(rand){
         case 1: thunder.addImage(thunderImage1);
         break;
         case 2: thunder.addImage(thunderImage2);
         break;
         case 3: thunder.addImage(thunderImage3);
         break;
         case 4: thunder.addImage(thunderImage4);
         break;
         default: break;
      }
      thunder.scale = random(0.3, 0.6);

   }

   if(thunderCreatedFrame + 10 === frameCount && thunder){
      thunder.destroy();
   }
   

   //Here we are displaying the rain drops. 
   for(var i = 0; i<maxDrops; i++){
      drops[i].showDrop();
      drops[i].updateY();
   }
   drawSprites();
}