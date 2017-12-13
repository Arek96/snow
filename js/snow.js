
function winScr() {
    'use strict';
    console.log("i work");
    var yPos = window.pageYOffset,
    brandImg = document.getElementsByClassName("navBrand"),
    nav = document.getElementById("nav"),
    mobileNav = document.getElementsByClassName("mobileNav")[0],
    i;
     
    if (yPos > 50) {
        i = 0;
        document.getElementById("brandImg1").setAttribute("src", "img/logo.png");
        document.getElementById("brandImg2").setAttribute("src", "img/logo.png");
        for(i=0; i<=4; i++){
            document.getElementsByClassName("aNav")[i].style.color = "grey";
            } 
        nav.style.animationName = "navscrl";
        nav.style.animationDuration = "0.5s";
        mobileNav.style.animationName = "navscrl";
        mobileNav.style.animationDuration = "0.5s";
        console.log(document.getElementById('nav').style.animationName);
        document.getElementsByClassName("mobileBtn")[0].style.color = "grey";
     } 
     else { 
         if(nav.style.animationName == "navscrl"){
            i = 0;
            nav.style.animationName = "navscrlbk";
            nav.style.animationDuration = "0.3s";
              mobileNav.style.animationName = "navscrlbk";
            mobileNav.style.animationDuration = "0.3s";
            document.getElementById("brandImg1").setAttribute("src", "img/logo-light.png");
              document.getElementById("brandImg2").setAttribute("src", "img/logo-light.png");
              document.getElementsByClassName("mobileBtn")[0].style.color = "white";
            for (i=0; i <= 4; i++){
                document.getElementsByClassName("aNav")[i].style.color = "white";
                }
         }
         }
     }
function mobileMenu(){
    document.getElementsByClassName("mobileNavItems")[0].style.display= "flex";
    document.getElementsByClassName("mobileBtn")[0].style.display= "none";
    for(var i =0; i < 5; i++){
    document.getElementsByClassName("navItemMobile")[i].style.display ="block";
    }
    document.body.style.overflow = "hidden";
    document.getElementsByClassName("mobileNavExitBtn")[0].style.display= "block";
}
function mobileMenuExit(){
    document.getElementsByClassName("mobileNavItems")[0].style.display= "none";
    document.getElementsByClassName("mobileBtn")[0].style.display= "block";
    for(var i =0; i < 5; i++){
    document.getElementsByClassName("navItemMobile")[i].style.display ="none";
    }
    document.body.style.overflow = "auto";
    document.getElementsByClassName("mobileNavExitBtn")[0].style.display= "none";
}
window.addEventListener('scroll', winScr);
document.getElementsByClassName("mobileBtn")[0].addEventListener("click",mobileMenu);
document.getElementsByClassName("mobileNavExitBtn")[0].addEventListener("click", mobileMenuExit);