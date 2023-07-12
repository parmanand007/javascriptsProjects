var blueCar = document.getElementById('bluecar');
var result =document.getElementById("result")
var score = document.getElementById('score')
var game =document.getElementById('game')
var counter=0
var raceCar=document.getElementById("racecar");
blueCar.addEventListener("animationiteration",function(){
    var random =((Math.floor(Math.random()*3))*130);
    blueCar.style.left=random+"px";
    counter++; 
})

window.addEventListener("keydown",function(e){
    if(e.keyCode=="39") {    var raceCarLeft = parseInt(this.window.getComputedStyle(raceCar).getPropertyValue("left"))
        console.log(raceCarLeft)
        if(raceCarLeft < 260){
            raceCar.style.left =(raceCarLeft+130)+ "px";
        }
        }


        if(e.keyCode=="37") {    var raceCarLeft = parseInt(this.window.getComputedStyle(raceCar).getPropertyValue("left"))
        console.log(raceCarLeft)
        if(raceCarLeft >0){
            raceCar.style.left =(raceCarLeft-130)+ "px";
        }
        }
        })


 //game over
setInterval( function Gameover(){
    var blueCarTop=parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft=parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"))
    var raceCarLeft=parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))

    if((blueCarLeft === raceCarLeft) && (blueCarTop>240 ) && (blueCarTop<450)){
        result.style.display="block";
        game.style.display="none";
        score.innerHTML=`score:${counter}`
        counter=0


    }
 },10)