var c = document.getElementById("canvas");
var ctx = c.getContext("2d"); 
var w = c.width; 
// This will be replaced with actual amplitude of the  tone
var h = c.height/2;
// Replace with actual tone frequency 
var frequency = 1; 

function calcSineY(x) {
  // h is the amplitude of the wave
  // x is the current x value we get every time interval
  // 2 * PI is the length of one cycle (full circumference)
  // f/w is the frequency fraction
	return h - h * Math.sin( x * 2 * Math.PI * (frequency/w) );
}

function drawSine(x){
  ctx.beginPath();
  ctx.strokeStyle = "black";
  for(let i = 0;i < x;i++){
    let y = calcSineY(i);
    ctx.lineTo(i,y);
  }

  ctx.stroke();
}

var x = 0;

const draw = () => {
  drawSine(x);
	x += 1;
	if(x > w){
	    x = 0;
      ctx.clearRect(0, 0, w, h*2);
  }
  
  window.requestAnimationFrame(draw);
};

draw();
