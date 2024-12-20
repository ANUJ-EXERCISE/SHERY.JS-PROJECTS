var timer =60;
var score=0;
var newhit = 0;
var elem = document.querySelector('#pbtm')
var timervalue = document.querySelector('.timevalue')
var scorevalue = document.querySelector(".scoreval")

function increasescore(){
    score += 10;
    scorevalue.textContent=score;
}

function makebubble(){
    var bubble = "";


for(let i=0; i<=125; i++)
{
    var rn = Math.floor(Math.random()*10);
    bubble += `<div id="bubble">${rn}</div>`
}

document.querySelector('#pbtm').innerHTML=bubble;
}

function settime(){
    var timefunction=setInterval(function (){
        if(timer>0){
        timer--;
        timervalue.textContent=timer;
       
        }
        else
        {
            clearInterval(timefunction)
           elem.innerHTML="<button>Game Over{Refresh}</button>";
        }
    },1000)
}

function hit(){
    newhit = Math.floor(Math.random()*10);
    document.querySelector(".hitvalue").textContent=newhit;
}

document.querySelector('#pbtm').addEventListener('click', function(details) {
    var pbtmrdn = Number(details.target.textContent);

    if (pbtmrdn === newhit) {
        increasescore(); // Agar match kare toh score increase
        makebubble();
        hit();
    } else {
        // Agar match na kare toh score decrease
        score -= 10;
        if (score < 0) {
            score = 0; // Score negative na ho
        }
        scorevalue.textContent = score;
    }
});




settime();
makebubble();
hit();








