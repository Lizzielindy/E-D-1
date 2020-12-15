function setup() {
  createCanvas(innerWidth, innerWidth);
  background (255,255,255);
  strokeWeight (3);
  stroke(255,255,255); // white line
  frameRate(5); //2 frames/sec
}

function draw() {
  // clear();
  background(255,255,255);
  var margin = 30;
  var width = innerWidth - 2 * margin;
  var height = innerWidth - 2 * margin;
  var spotX = mouseX;//random(0,width);
  var spotY = mouseY;//random(o,width);
  var radius = 200;
  
  var shift = 7;
  var space = 20;
  var numSquares = 10;
  var sideLen = width / numSquares;
  
  translate(margin,margin);
  for (var y = 0; y < height; y = y + sideLen) {
    for(var x = 0; x < width; x = x + sideLen) {
      if(sqrt(pow(spotX - x,2)+ pow(spotY - y,2) + pow)){
          shift = 0;
      }
      fill(random (200,255),0, random(200,255), 200);
      quad(x + space + random(-shift, shift), y + space + random(-shift, shift), 
           x + sideLen - space + random(-shift, shift), y + space + random(-shift, shift), 
           x + sideLen - space + random(-shift, shift), y + sideLen - space + random(-shift, shift), 
           x + space + random(-shift, shift), y + sideLen - space + random(-shift, shift));
       
    }
  }
}