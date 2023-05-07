var sec=00;
var tens=00;
var appSec=document.getElementById("seconds")
var appTens=document.getElementById("tens")
var buttonStart=document.getElementById("start")
var buttonStop=document.getElementById("stop")
var buttonReset=document.getElementById("reset")
var interval;

function startTimer() {
    tens++;
    if(tens<9)
        appTens.innerHTML="0"+tens
    if(tens>9){
        appTens.innerHTML=tens
    }
    if(tens>99)
    {
        sec++;
        appSec.innerHTML="0"+sec;
        tens=0;
        appTens.innerHTML="0"+0
    }
    if(sec>9)
    {
        appSec.innerHTML=sec
    }

}
buttonStart.addEventListener("click",function(){
    interval=setInterval(startTimer,10)
});
buttonStop.addEventListener("click",function(){
    clearInterval(interval)
},false)
buttonReset.addEventListener("click",function(){
    clearInterval(interval);
    sec="00"
    tens="00"
    appSec.innerHTML=sec;
    appTens.innerHTML=tens

})
