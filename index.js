const cursor=document.querySelector(".cursor");

let mouseX=0;
let mouseY=0;
let posX=0;
let posY=0;

document.addEventListener("mousemove",(e)=>{
mouseX=e.clientX;
mouseY=e.clientY;
});

function animateCursor(){
posX += (mouseX - posX) * 0.15;
posY += (mouseY - posY) * 0.15;
cursor.style.left = posX + "px";
cursor.style.top = posY + "px";
requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll("li, img").forEach(el=>{
el.addEventListener("mouseenter",()=>{
cursor.style.width="60px";
cursor.style.height="60px";
cursor.style.background="radial-gradient(circle,#00ff88,#00ff8800)";
});
el.addEventListener("mouseleave",()=>{
cursor.style.width="25px";
cursor.style.height="25px";
cursor.style.background="radial-gradient(circle,#00ff88,#00ff8840)";
});
});

const aliens={
heatblast:{
img:"https://i.pinimg.com/originals/53/01/05/53010574d804ad841943d5353ee95ae6.png",
name:"Heatblast",
desc:"Master of Fire Manipulation",
strength:75,
speed:60,
intelligence:65
},
fourarms:{
img:"https://i.pinimg.com/originals/f2/f4/9d/f2f49d924097d2a7945434a75bca371c.png",
name:"Four Arms",
desc:"Extreme Physical Strength",
strength:95,
speed:50,
intelligence:55
},
xlr8:{
img:"https://i.pinimg.com/originals/24/17/a1/2417a1afa19f16dde0f6ec4cf8154e43.png",
name:"XLR8",
desc:"Ultimate Speed Alien",
strength:65,
speed:100,
intelligence:70
},
diamondhead:{
img:"https://i.pinimg.com/originals/d7/ac/2a/d7ac2ad27e8aba4ba6839ca61967f962.png",
name:"Diamondhead",
desc:"Crystal Defense Warrior",
strength:85,
speed:65,
intelligence:75
}
};

function selectAlien(a){
document.getElementById("alienImg").src=aliens[a].img;
document.getElementById("alienName").innerText=aliens[a].name;
document.getElementById("alienDesc").innerText=aliens[a].desc;
animateBar("strength",aliens[a].strength);
animateBar("speed",aliens[a].speed);
animateBar("intelligence",aliens[a].intelligence);
}

function animateBar(id,value){
let bar=document.getElementById(id);
bar.style.width="0%";
setTimeout(()=>{bar.style.width=value+"%";},200);
}

const canvas=document.getElementById("bgCanvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<120;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2+1,
speedY:Math.random()*0.5+0.2
});
}

function drawParticles(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fillStyle="#00ff88";
ctx.fill();
p.y+=p.speedY;
if(p.y>canvas.height){
p.y=0;
p.x=Math.random()*canvas.width;
}
});
requestAnimationFrame(drawParticles);
}

drawParticles();

window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});


