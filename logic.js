var block = document.getElementById("block");
let counter = 0;
const score = document.getElementById("score");
var root = document.documentElement;
let speed = -500;

function mleft(){
   let left = parseInt(window.getComputedStyle(character)
   .getPropertyValue("left"));

   left -= 100;
   if(left>-100){
    character.style.left = left + "px";
    };
}

function mright(){
    let left = parseInt(window.getComputedStyle(character)
    .getPropertyValue("left"));
 
    left += 100;
    if(left<300){
    character.style.left = left + "px";
    };
 }

 document.addEventListener("keydown", event =>{
    if(event.key === "ArrowLeft"){mleft();}
    if(event.key === "ArrowRight"){mright();}
 });

 block.addEventListener("animationiteration",()=>{
   var random = Math.floor(Math.random()*3);
   var left = random*100;
   block.style.left = left + "px";
   counter++;
   score.innerText = `Score: ${counter}`;
   if(counter%10==0 && speed>-1000){
      speed -= 50;
      console.log(speed*-1);
      root.style.setProperty("--speed",speed+"px")
   };
 });

 setInterval(function(){
   let characterLeft = 
   parseInt(window.getComputedStyle(character)
   .getPropertyValue("left"));
   let blockLeft = 
   parseInt(window.getComputedStyle(block)
   .getPropertyValue("left"));
   let blockTop = 
   parseInt(window.getComputedStyle(block)
   .getPropertyValue("top"));

   if(characterLeft == blockLeft && blockTop<500 && blockTop>300){
      alert(`GAME OVER, SCORE: ${counter}`);
      block.style.animation="none";
      location.reload();
   }   
 },100);