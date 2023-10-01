window.addEventListener('focus',function(){
    this.document.title="Shirro Visual";
})
window.addEventListener('blur',function(){
    this.document.title="Bagas Dwi's Portfolio";
})

/// Disable Right Click lmao
window.addEventListener('contextmenu', function (e) { 
    e.preventDefault(); 
}, false);

/// navigation menu toggle
function openNav() {
    var x = document.getElementById('rightCol');
    if (x.style.display === "flex") {
        setTimeout(function () {
            x.style.display = "none";
            fadeIn();
        }, 0)
    } else {
        setTimeout(function () {
            x.style.display = "flex";
            fadeOut();
        }, 300)
    }

    function fadeIn(){
        x.style.animation= "fadeIn 0.3s ease-in-out";
        }
    
    function fadeOut(){
        x.style.animation= "fadeOut 0.3s ease-in-out";
    }
}

var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 719) {
// Probably mobile
    function closeNav(){
        document.getElementById("rightCol").style.display = "none";
        document.getElementById("ham").element.classList.remove(".active");
        var element = document.getElementsById("ham");
        element.classList.remove(".active");
    }
} else {
// Probably desktop
function closeNav(){
    document.getElementById("rightCol").style.display = "";
}
}

let loader=document.querySelector('.preLoader');

window.addEventListener("load",preLoader);

function preLoader(){
    loader.classList.add(".preLoader")
}
