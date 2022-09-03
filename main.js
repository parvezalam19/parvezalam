// scroll

var myNav = document.querySelector('.navbar');
window.onscroll = function () { 
    "use strict";
    if (document.documentElement.scrollTop > 20 ) {
        myNav.classList.add("nav-active");
        // myNav.classList.remove("nav-transparent");
    } 
    else {
        // myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-native");
    }
};


// navlinks

let navlink = document.querySelectorAll(".nav-link")
let collapse = document.querySelector(".navbar-collapse.collapse");
navlink.forEach(function(a){
a.addEventListener("click" ,function(){
    collapse.classList.remove("show");
})
})


// typing effect
window.ityped.init(document.querySelector('.ityped'),{
    strings: ['I am a Front end Developer', 'I make website using CSS and JavaScript'],
    loop: true
})

  