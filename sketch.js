let stars = new Array(1000);
let speed;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas-container");
  for(let i = 0; i < 1000; i++){
    stars[i] =new Star();
  }
}

function draw() {
  background(0);
  speed = map(mouseX,0,width,0,50)
  translate(width/2, height/2);
  for(let i = 0; i < 1000; i++){  
    stars[i].update();
    stars[i].show();
  }
}
