var canvas;
var music;
var plate1,plate2,plate3,plate4;
var edge;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    music.play();

    //create 4 different surfaces
    plate1=createSprite(0,580,320,20);
    plate1.shapeColor="blue";

    plate2=createSprite(270,580,200,20);
    plate2.shapeColor="orange";

    plate3=createSprite(480,580,200,20);
    plate3.shapeColor="red";

    plate4=createSprite(700,580,200,20);
    plate4.shapeColor="green";



    //create box sprite and give velocity 
    ball=createSprite(random(20,750),120,40,40);
    ball.shapeColor="white"
    ball.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(plate1.isTouching(ball)&& ball.bounceOff(plate1)){
        ball.shapeColor="blue"
    }
   
    if(plate2.isTouching(ball)&& ball.bounceOff(plate2)){
        ball.shapeColor="orange"
    }
     
    if(plate3.isTouching(ball)&& ball.bounceOff(plate3)){
        ball.shapeColor="red"
    }
    
    if(plate4.isTouching(ball)&& ball.bounceOff(plate4)){
        ball.shapeColor="green"
    }


    drawSprites();
}
