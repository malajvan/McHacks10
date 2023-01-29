document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#start').addEventListener('click', startTimer,{once:true});
    document.querySelector('#start1').addEventListener('click', startTimer,{once:true});
    document.querySelector('#skip').addEventListener('click', squish);
    document.querySelector('#reset').addEventListener('click', resetTimer);

  
});

var bonks = 0;
//document.getElementById("cat").addEventListener("click", squish);
function squish() {

    bonks += 1;
    if (bonks > 1) {
        document.getElementById('warn').innerHTML="Still did not. Get back to studying, or lovely Mittens gets it again!";
    } 
    else {
        document.getElementById('warn').innerHTML="No, you did not. Get back to studying, or lovely Mittens gets it again!";    
    }
    document.getElementById('cat').classList.add('activate-animation');
    document.getElementById('hammer').classList.add('activate-anim');

    setTimeout(()=> {
        document.getElementById('cat').classList.remove('activate-animation')
        document.getElementById('hammer').classList.remove('activate-anim')
    },1000);}
    

cleared = false;
var occ = 0;
function startTimer() {
    occ = occ + 1;
    //if (occ === 1) {
    // Set the start time
    var startTime = new Date().getTime();
    function stopTimer() {
        cleared = true;
        clearInterval(x);
        document.getElementById("nav1").style.display="none";
        document.getElementById("nav3").style.display="none";
        //document.getElementById("nav2").style.display="block";
        
        //document.getElementById("demo").innerHTML = "STOPPED";
        
    }
    // Update the count down every 1 second
    var x = setInterval(function() {
        document.getElementById("stop").addEventListener("click", stopTimer);
        // Update current time
        var currTime = new Date().getTime();
            
        // Find the distance between now and the count down date
        var distance = startTime - currTime;
            
        // Time calculations for days, hours, minutes and seconds
        //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        //var hours = Math.floor((0 + distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor(25 + (distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor(60 + (distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < (-25*60*1000)) {
            cleared = true;
            clearInterval(x);
            document.getElementById("nav3").style.display="none";
            document.getElementById("nav1").style.display="none";
            //document.getElementById("nav2").style.display="block";
            //document.getElementById("demo").innerHTML = "EXPIRED";
        }
    
    }, 1000);
        
    //}
}

function resetTimer() {
    //document.getElementById("start").onclick=startTimer();
    document.querySelector('#start').addEventListener('click', startTimer,{once:true});
    document.getElementById("demo").innerHTML = "";
    document.getElementById("nav3").style.display="none";
    //document.getElementById("nav1").style.display="block";
}





