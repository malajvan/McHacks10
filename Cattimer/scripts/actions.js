

//document.getElementById("cat").addEventListener("click", squish);
function squish() {
    document.getElementById('cat').classList.add('activate-animation');

    setTimeout(()=> {
        document.getElementById('cat').classList.remove('activate-animation')
    },1000);
    
}


