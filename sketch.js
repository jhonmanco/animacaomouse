let cor; 
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(600, 600);
  background("white");
  cor = color(random(0, 200),random(0, 200), random(0, 200));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 60)
 
  if (mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
    }
    
  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
    }
  
    if (mouseY < posicaoVertical ) {
    posicaoVertical--;
  }
  
 if (mouseY > posicaoVertical ) {
    posicaoVertical++;
  }
  
 if (mouseIsPressed) {
  cor = color(random(0, 200),random(0, 200), random(0, 200), random(0, 100));
   }
}