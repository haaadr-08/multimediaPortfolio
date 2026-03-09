// Get canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Background color
ctx.fillStyle = "skyblue";
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

// House
ctx.fillStyle="brown";
ctx.fillRect(300,250,200,150);

// Roof
ctx.beginPath();
ctx.moveTo(280,250);
ctx.lineTo(400,180);
ctx.lineTo(520,250);
ctx.closePath();
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();

// Door
ctx.fillStyle="darkred";
ctx.fillRect(380,330,40,70);

// Windows
ctx.fillStyle="white";
ctx.fillRect(320,270,40,40);
ctx.fillRect(440,270,40,40);

// Caption text
ctx.font="20px Arial";
ctx.fillStyle="black";
ctx.fillText("My Canvas Cartoon",290,40);

// Fence using for loop and translate
ctx.save();
ctx.translate(0,370);

for(var i=0;i<10;i++){
    ctx.beginPath();
    ctx.moveTo(50+i*60,0);
    ctx.lineTo(50+i*60,-40);
    ctx.stroke();
}

ctx.restore();
