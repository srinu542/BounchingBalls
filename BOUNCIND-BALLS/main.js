var c = document.querySelector("canvas").getContext("2d");
var color = ["#56ff79","#042358","#4cf0dd","#ff6b35","#ffff00"];
    
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  var mouse ={
    x,y
  }
window.addEventListener("mousemove",(e)=>{
 
  mouse.x = e.x;
  mouse.y = e.y;

});

var minR = 10;
var maxR = 40;

function Circle(x,y,vx,vy,r){

    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
    this.minR = r;
    var col = Math.floor(Math.random() * 10)
 
    
    this.col = color[Math.floor(Math.random() * color.length)];
    this.update = function(){
      
      if(this.x + this.r >= c.canvas.width  || (this.x + 10) - this.r < 0 ){
        this.vx = -this.vx; 
    }
    if(this.y + this.r >= c.canvas.height  || (this.y + 10) - this.r < 0 ){
    this.vy = -this.vy; 
  }

  this.x += this.vx;
  this.y += this.vy;
  
  if(mouse.x - this.x <= 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){

    if(this.r < maxR){
    this.r += 1;
    }
  }

    else if(this.r > this.minR){
      this.r -= 1;
console.log(r)

  }

  this.draw()
  
  }

  this.draw = function(){
    c.beginPath();
    c.fillRect(this.x,this.y,this.r,this.r)
    c.fillStyle = color[col];
    c.fill();
  }
}

var circleArray =[];
for(var i=0; i<360; i++){
  var x = Math.random()*100;
  var y = Math.random()*100;
  var vx = (Math.random())*2;
  var vy = (Math.random())*2;
  var r = Math.random()*13;
  var circle = new Circle(x,y,vx,vy,r);
    circleArray.push(circle);
}



function animate(){
    c.clearRect(0,0,c.canvas.width,c.canvas.height);
    requestAnimationFrame(animate)
    for(var i =0;i<circleArray.length;i++)
    {
      circleArray[i].update();
    }

}

animate()
