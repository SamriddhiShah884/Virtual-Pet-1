//Create variables here
var database;
var dog;
var dogImg , happyDogImg;
var foodS, foodStock;


function preload()
{
  dogImg=loadImage ("images/dogImg.png");
  happyDogImg=loadImage ("images/a.png");

}

function setup() {
  database= firebase.database();
  console.log(database);
  createCanvas(500, 500);
  dog= createSprite (200,300, 100, 200);
  dog.addImage (dogImg );
  dog.scale=0.2;
  foodStock=database.ref('food');
  foodStock.on ("value", readStock)
  
}



function draw() {
  background( rgb(46, 139, 87)) ;
  //stroke ("white");
  fill ("white");
text ("Press 'UP ARROW' to feed your pet.", 30, 50);
text ("Milk Bottles Left :- "+foodS, 30, 90);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg );
    console.log ("image should change");
    console.log("up key pressed");
  }

  drawSprites();
  //add styles here 
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  var abc= x;
  database.ref('/').update({
    food: abc
  })
}

function readStock(data){
  foodS= data.val ();
}
