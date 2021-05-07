const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

var LEVEL1 = 0;
var LEVEL2 = 1;
var LEVEL3 = 2;
var LEVEL4 = 3;
var LEVEL5 = 4;
var LEVEL6 = 5;
var gameState = 0;

var iconGame;
var cat, finger1, finger2;
var option1, option2;
var wrong, right;
var greeting;
var next, nextImage;
var boy, hairs;
var hair = 0;
var plus, minus;
var plusImage, minusImage;
var Confirm, confirmImg;
var colors, colorsPallete;
var duplicateText;

function preload() {
  finger1 = loadImage("finger1.jpg");
  finger2 = loadImage("finger2.jpg");
  wrong = loadImage("wrong.png");
  right = loadImage("right.png");
  greeting = loadImage("text.png");
  nextImage = loadImage("next.jpg");
  plusImage = loadImage("IconPLUS.png");
  minusImage = loadImage("IconMINUS.png");
  confirmImg = loadImage("confirm.png");
  iconGame = loadImage("gameIcon.jpg");
  colorsPallete = loadImage("colors.jpg");
}

function setup() {
  createCanvas(400,500);

  myEngine = Engine.create();
  myWorld= myEngine.world;


  cat = new Cat(200,200,200,200);

  finger = createSprite(330,325,50,30);
  finger.visible = false;

  option1 = createSprite(135,250,50,50);
  option1.visible = false;

  option2 = createSprite(135,325,50,50);
  option2.visible = false;

  next = createSprite(340,450,75,50);
  next.addImage(nextImage);
  next.visible = false;

  boy = new Boy(125,225,100,100);

  hairs = new Objects(62,210,220,90);

  plus = createSprite(300,440,50,50);
  plus.scale = 0.2;
  plus.addImage(plusImage);
  plus.visible = false;

  minus = createSprite(350,440,50,50);
  minus.scale = 0.2;
  minus.addImage(minusImage);
  minus.visible = false;

  Confirm = createSprite(370,470,50,50);
  Confirm.scale = 0.3;
  Confirm.addImage(confirmImg);
  Confirm.visible = false;  

  colors = createSprite(200,275,200,200);
  colors.scale = 0.4;
  colors.addImage(colorsPallete);
  colors.visible = false;

  duplicateText = createSprite(200,150,250,50);
  duplicateText.visible = false;
}

function draw() {
  background("white"); 
  Engine.update(myEngine);

  
  strokeWeight(3);
  stroke("orange")
  fill("red")
  textSize(24);
  text("Brain-in)",175,50)

  if(gameState === LEVEL1)
  {
  strokeWeight(2);
  stroke("grey")
  fill("Black")
  textSize(17);
  text("Which claw is similar to cat's outstreched claw?", 40, 150);
  
  image(finger1,100,225,75,50);
  image(finger2,100,300,75,50);

  cat.show();

  if(mousePressedOver(option1))
  {
  image(wrong,100,210,75,75);
  }

  if(mousePressedOver(option2))
  {
  image(wrong,100,275,75,75);
  }

  if(mousePressedOver(finger))
  {
  image(right,300,275,100,100);

  gameState = 1;
  
  next.visible = true;
  }

  image(iconGame,100,25,50,50);
  }
  else if(gameState === LEVEL2)
  {
    background("pink");
 
    strokeWeight(3);
    stroke("orange")
    fill("red")
    textSize(24);
    text("Brain-in)",170,50);

    strokeWeight(2);
    stroke("black")
    fill("white")
    textSize(20);
    text("click NEXT to solve the next question", 15, 325);

    image(greeting, 100, 250, 175, 50);

    if(mousePressedOver(next))
    {
      gameState = 2;
    }
       
  image(iconGame,100,25,50,50);
  }
  else if(gameState === LEVEL3)
  {    
    background("skyblue");
    
    strokeWeight(3);
    stroke("orange")
    fill("red")
    textSize(24);
    text("Brain-in)",170,50);

    strokeWeight(2);
    stroke("grey")
    fill("Black")
    textSize(17);
    text("Count the number of hairs",90,150);

    text("Number of hairs are:- "+ hair,75,450);

    next.x = 500;
    next.y = 600;
    boy.show();
    hairs.show();

    plus.visible = true;
    minus.visible = true;
    Confirm.visible = true;

    if(mousePressedOver(plus))
    {
      hair = hair + 1;
    }

    if(mousePressedOver(minus))
    {
      hair = hair - 1;
    }

    if(mousePressedOver(Confirm) && hair == 3)
    {
      gameState = 3;
    }

  image(iconGame,100,25,50,50);
  }
  else if(gameState === LEVEL4)
  {
    background("pink");
 
    strokeWeight(3);
    stroke("orange")
    fill("red")
    textSize(24);
    text("Brain-in)",170,50);

    strokeWeight(2);
    stroke("black")
    fill("white")
    textSize(20);
    text("click NEXT to solve the next question", 15, 325);

    plus.destroy();
    minus.destroy();
    Confirm.destroy();

    image(greeting, 100, 250, 175, 50);

    next.x = 340;
    next.y = 450;
    
    if(mousePressedOver(next))
    {
      gameState = 4;
    }
  }
  else if(gameState === LEVEL5)
  {
    background("skyblue");
    
    strokeWeight(3);
    stroke("orange")
    fill("red")
    textSize(24);
    text("Brain-in)",170,50);

    strokeWeight(1);
    stroke("Black")
    fill("Black")
    textSize(20);
    text("Find out the darkest color.",90,150);
    
    colors.visible = true;
    
    next.x = 500;
    next.y = 600;
    
  if(mousePressedOver(colors))
  {
   image(wrong,150,360,100,100);
  }

  if(mousePressedOver(duplicateText))
  {
   image(right,150,360,100,100);

   gameState = 5;
  }
  }
  else if(gameState === LEVEL6)
  {
    background("pink");

    stroke("orange");
    fill("red");
    textSize(24);
    text("Brain-in)",170,50);
    
    noStroke();
    fill("green");
    textSize(20);
    text("Hope you had fun!", 130, 200);

    colors.destroy();
    next.destroy();
  
  image(iconGame,100,25,50,50);
  }

  drawSprites();
}

function mouseDragged()
{   
  Matter.Body.setPosition(hairs.body, {x: mouseX, y: mouseY});
}

function mouseReleaed()
{   
  Matter.Body.setStatic(hairs.body, {isStatic : true});
}