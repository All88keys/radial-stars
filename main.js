var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var speed = 1;
var stars = [];
var limit = 0;
var colors = ['white', '#DCDCDC', '#D3D3D3', '#C0C0C0', 'yellow'];


function star(ang, size, color) {
  this.x1 = c.width / 2;
  this.y1 = c.height / 2;
  this.x2 = c.width / 2;
  this.y2 = c.height / 2;
  
  this.size = size;
  this.speed1 = speed;
  this.speed2 = speed;
  this.color = color;

  this.update = function() {
    this.speed1 *= 1.02;
    this.speed2 *= 1.022;
    //this.size *=1.025;
    this.x1 += Math.cos(ang) * this.speed1;
    this.y1 += Math.sin(ang) * this.speed1;
    this.x2 += Math.cos(ang) * this.speed2;
    this.y2 += Math.sin(ang) * this.speed2;
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.stroke();
    ctx.closePath();
  };
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(function() {
  ctx.clearRect(0, 0, c.width, c.height) //clear canvas
  for (i = 0; i < 5; i++) {
    stars.push(new star(rand(0, 999999999)/(Math.PI*2), rand(1, 1), colors[rand(0, colors.length - 1)])); // make a new star at the center of the screen
  }
  //update stars
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    if (stars[i].x1 > (c.width + limit) || stars[i].x1 < -limit || stars[i].y1 > (c.height + limit) || stars[i].y1 < -limit) {
      stars.shift();
      }
  }
}, 1);
