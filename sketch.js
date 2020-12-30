function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);

  var hr = hour();
  var min = minute();
  var sec = second();
  translate(400,200)
  rotate(-90)
  secAngle = map(sec,0,60,0,360)  
  minAngle = map(min,0,60,0,360) 
  hrAngle = map(hr%12,0,12,0,360) 

  push()
  stroke(0,255,0)
  strokeWeight(7)
  rotate(hrAngle)
  line(0,0,50,0)
  pop()
noFill()
  stroke(0,255,0)
  strokeWeight(7)
  arc(0, 0, 260, 260, 0,hrAngle);

  push()
  stroke(255,0,0)
  strokeWeight(7)
  rotate(minAngle)
  line(0,0,100,0)
  pop()

  stroke(255,0,0)
  strokeWeight(7)
  arc(0, 0, 280, 280, 0,minAngle);

  push()
  stroke(0,0,255)
  strokeWeight(7)
  rotate(secAngle)
  line(0,0,150,0)
  pop()

  stroke(0,0,255)
  strokeWeight(7)
  arc(0, 0, 300, 300, 0,secAngle);

  drawSprites();
}