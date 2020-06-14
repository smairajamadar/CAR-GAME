var car,car1,car2,wall,wall1,wall2;
 
car.weight = 2260
car1.weight = 1522
car2.weight = 3000

speed = random(55,90);
function setup() {
  speed = random(4,7);
  speed1 = random(5,9);
  speed2 = random(3,3);

  car = createSprite(48,110,10,10);
  car1 = createSprite(50,210,10,10);
  car2 = createSprite(48,300,10,10);
  
  
  wall = createSprite(349,98,10,50);
  wall1 = createSprite(350,198,10,50);
  wall2 = createSprite(350,300,10,50);

  

  car.velocityX = speed;
  car1.velocityX =speed1;
  car2.velocityX = speed2;
  
  createCanvas(400,400);
  car.shapeColor = ("orange"); 
  car1.shapeColor =("red"); 
  car2.shapeColor = ("yellow"); 

  wall.shapeColor = ("orange"); 
  wall1.shapeColor =("red"); 
  wall2.shapeColor = ("yellow");

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(3,25,255); 
  
  car.collide(wall);
  car1.collide(wall1);
  car2.collide(wall2);
  drawSprites();
}