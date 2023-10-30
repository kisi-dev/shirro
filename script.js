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

//mask
function da(){
    document.getElementById("mask").style.top = "32%"
}
function db(){
    document.getElementById("mask").style.top = "58%"
}
function dc(){
    document.getElementById("mask").style.top = "100%"
}

//nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-40px";
    }
    prevScrollpos = currentScrollPos;
}

function openNav() {
    var x = document.getElementById('navChild');
    if (x.style.display === "flex") {
        setTimeout(function () {
            x.style.display = "none";
        }, 0)
    } else {
        setTimeout(function () {
            x.style.display = "flex";
        }, 0)
    }
}

//checkbox
function bg() {
    var checkbox = document.getElementById("eax");
    var bg = document.getElementById("sample");

    if (checkbox.checked == true) {
        bg.style.backgroundImage = "url('Assets/bg.webp')";
    } else {
        bg.style.backgroundImage = "url('')";
    }
}