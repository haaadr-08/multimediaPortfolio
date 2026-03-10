// Get canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Sky background
ctx.fillStyle = "lightblue";
ctx.fillRect(0,0,800,500);

// Ground
ctx.fillStyle = "green";
ctx.fillRect(0,400,800,100);

// Sun
ctx.beginPath();
ctx.arc(700,80,40,0,Math.PI*2);
ctx.fillStyle="yellow";
ctx.fill();
ctx.stroke();

// Tree trunk
ctx.fillStyle="brown";
ctx.fillRect(380,280,40,120);

// Tree leaves
ctx.beginPath();
ctx.arc(400,240,70,0,Math.PI*2);
ctx.fillStyle="darkgreen";
ctx.fill();

// Cloud 1
ctx.beginPath();
ctx.arc(150,100,30,0,Math.PI*2);
ctx.arc(180,100,30,0,Math.PI*2);
ctx.arc(210,100,30,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();

// Cloud 2
ctx.beginPath();
ctx.arc(300,80,25,0,Math.PI*2);
ctx.arc(330,80,25,0,Math.PI*2);
ctx.arc(360,80,25,0,Math.PI*2);
ctx.fill();

// Caption text
ctx.font="20px Arial";
ctx.fillStyle="black";
ctx.fillText("Sunny Day in the Park",300,40);

// Grass using for loop and translate
ctx.save();
ctx.translate(0,400);

for(var i=0;i<40;i++){
    ctx.beginPath();
    ctx.moveTo(i*20,0);
    ctx.lineTo(i*20-5,-15);
    ctx.lineTo(i*20+5,-15);
    ctx.fillStyle="darkgreen";
    ctx.fill();
}

ctx.restore();
