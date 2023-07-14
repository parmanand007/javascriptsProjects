const hole=document.getElementById('hole')
var jumping=0;
var result = document.getElementById("result")
var text =document.getElementById("text")
var game =document.getElementById("game")
var score=0;
hole.addEventListener("animationiteration",hol)
//random gap in block
function hol(){
    var random = -((Math.random()*350)+150);
    hole.style.top =random + "px";
    score ++;

}
//fall
var fall =setInterval(function(){
    var birdTop =parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
    if(jumping==0){    bird.style.top =(birdTop +2) + "px"

    var blockLeft =parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    var holeTop =parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
    var hTop = (500 + holeTop)


    //condition for collissionns

    if ((bird>450)|| ((blockLeft<50) && (blockLeft>-50 ) && ((birdTop<hTop )||(birdTop > hTop +100)))){
               result.style.display='block'
               text.innerText=`Score : ${score}`
               game.style.display="none";
               score = 0;
    }
}
},10)


//jump

function jump(){
    jumping=1   
    var birdTop =parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
    if (birdTop >4){bird.style.top=(birdTop-60)+"px"}    

    setTimeout(function(){
        jumping=0
    },100)
}

window.addEventListener("keydown",jump)