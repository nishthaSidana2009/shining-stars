let totalPts = 500
let a = totalPts + 1

function setup() {
  createCanvas(400, 400);
  stroke("yellow")
  frameRate(20)
}

function draw() {
  background(0);
  let rand = 0
  for(let i = 1;i < a;i++){
    point((100/a) * i,height/2 + random(-rand,rand))
    rand += random(-5,5)
    rotate(400)
     point((90/a) *i,-3/2 + random(-rand,rand))
  }
}