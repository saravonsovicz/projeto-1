function setup() {
    createCanvas(750, 750);
    background("rgb(230,46,95)");
  }
  
  function draw() {
    
    stroke("white");
    fill("rgba(243,141,159,0.6)");
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 20);
    }
  }