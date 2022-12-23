// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables (once)
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";

let explosion = document.createElement("audio");
explosion.src = "sound/explosion.wav";

let propeller = document.createElement("audio");
propeller.src = "sound/propeller.wav";

let mouseIsPressed = false;

// Global Variables (reset)
let state;
let heli;
let wall1, wall2, wall3;
let wallArray = [];
reset();
let distanceVar = 0;
let bestVar = 0;

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    runGame();
  } else if (state === "gameover") {
    drawGameOver();
  }
  
  // Request Animation Frame
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
  mouseIsPressed = true;

  // Play propeller sound
  propeller.currentTime = 0;
  propeller.play();
  
  // Start game on Mousedown
  if (state === "start") {
    state = "gameon";
  } 
}

function mouseupHandler() {
  mouseIsPressed = false;
  propeller.pause();
}

function reset() {
state = "start";
heli = {
  x: 200,
  y: 250,
  w: 80,
  h: 40,
  speed: 0,
  accel: 0.7
};
wall1 = {
  x: cnv.width,
  y: Math.random() * 300 + 100, // random number between 100 and 400
  w: 50,
  h: 100
};
wall2 = {
  x: cnv.width + 500,
  y: Math.random() * 300 + 100,
  w: 50,
  h: 100
};
wall3 = {
  x: cnv.width + 1000,
  y: Math.random() * 300 + 100,
  w: 50,
  h: 100
};
}