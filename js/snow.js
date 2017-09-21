function winScr() {
    'use strict';
    console.log("i work");
    var yPos = window.pageYOffset,
    brandImg = document.getElementById("brandImg"),
    nav = document.getElementById("nav"),
    aNav = document.getElementById("aNav"),
    i;
     console.log(yPos);
    if (yPos > 50) {
        console.log("wielki chuj");
        i = 0;
        brandImg.setAttribute("src", "img/logo.png");
        for(i=0; i<=4; i++){
       document.getElementsByClassName("aNav")[i].style.color = "grey";
            
        } 
        nav.style.animationName = "navscrl";
        nav.style.animationDuration = "0.5s";
     } 
     else {
        i = 0;
        nav.style.animationName = "navscrlbk";
        nav.style.animationDuration = "0.3s";
        brandImg.setAttribute("src", "img/logo-light.png");
        nav.setAttribute("color", "white");
        console.log('the i is' + i);
         for (i=0; i <= 4; i++){
        document.getElementsByClassName("aNav")[i].style.color = "white";
             
         }
     }
}
{
function quotesMouseDown(event) {
    'use strict';
    var quotes = document.getElementById("quotes"),
        mDownX = event.pageX,
        isMouseDown = false,
        dist = 0,
        pos = parseFloat(quotes.style.left),
        firstPos = pos,
        bodyWidth = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue("width"));
        quotes.addEventListener("mousemove", quotoesMouseMove);
        quotes.addEventListener("mouseup",function() {
            isMouseDown = true;
            console.log(isMouseDown);
            
            quotes.removeEventListener("mousemove", quotoesMouseMove);});
    console.log(window.getComputedStyle(document.body, null).getPropertyValue("width") + "style");
    console.log(bodyWidth);
        function quotoesMouseMove(event) {
            var mMoveX = event.pageX,
                distance = mMoveX - mDownX;
                
            if (pos === 0){ 
                dist = distance; 
                            }
            if (pos > 0 || pos < 0) {
                dist = distance + pos; 
            }
            quotes.style.left = dist +"px";
            console.log(quotes.onmouseup);
            if (pos === 0 && dist > 0) {
                
               quotes.onmouseup = function() {limit1();}
               console.log("lel")
            }
            if(distance > 0 && pos !== 0){
                quotes.onmouseup = function() {quotesAnim();}
                console.log("nie wiem");
               
            }
            if((-1)*dist > 0 && distance < 0 && dist <! quotes.offsetWidth){
                quotes.onmouseup = function () { quotesAnimeForwards();}
                
                console.log("dramat")
            }
            if (dist*(-1) > (quotes.offsetWidth - bodyWidth)){
                
                quotes.onmouseup = function() {limitEnd();}
                console.log("im here");
                }
           
           console.log(dist);
            
        }
 
            function quotesAnimeForwards(){
                'use strict'
                quotes.style.WebkitTransition = "left, 1s";
                quotes.style.transition = "left, 1s";
                quotes.style.left = pos - bodyWidth + "px";
                setTimeout(function(){quotes.style.WebkitTransition = "none";
                                      quotes.style.transition = "none";
                                     },1000);
                
            }
            function quotesAnim(){
                'use strict'
                quotes.style.WebkitTransition = "left, 1s";
                quotes.style.transition = "left, 1s";
                quotes.style.left = pos + bodyWidth +"px";
                setTimeout(function(){quotes.style.WebkitTransition = "none";
                                      quotes.style.transition = "none";
                                     },1000);
                
            }
            function limit1(){
                'use strict'
                quotes.style.WebkitTransition = "left, 1s";
                quotes.style.transition = "left, 1s";
                quotes.style.left =  " 0px";
                 setTimeout(function(){quotes.style.WebkitTransition = "none";
                                      quotes.style.transition = "none";
                                     },1000);
            }
            function limitEnd(){
                quotes.style.WebkitTransition = "left, 1s";
                quotes.style.transition = "left, 1s";
                quotes.style.left = ((-2)*bodyWidth) +"px";
                 setTimeout(function(){quotes.style.WebkitTransition = "none";
                                      quotes.style.transition = "none";
                                     },1000);
            }
    
 }
function butPos(){
    window.setTimeout(butPosTimeout, 1001);
    
    }
function butPosTimeout(){
    var pos = parseFloat(document.getElementById("quotes").style.left);  
    if (pos == 0) buttonResize(1);
    if (pos < 0 && pos > (-1)*window.innerWidth ) buttonResize(2);
    if (pos < (-1)*window.innerWidth && pos> (-2)*window.innerWidth) buttonResize(3);
    return pos;
}
function button1Anim(){
   var quotes = document.getElementById("quotes"),
       quoutesPos = parseFloat(quotes.style.left),
       button = document.getElementById("quotesButton1");
    if(quoutesPos < 0 || quoutesPos > 0){
        quotes.style.WebkitTransition = "left, 1s";
        quotes.style.transition = "left, 1s";
        quotes.style.left =  "0px";
        buttonResize(1);
        setTimeout(function(){quotes.style.WebkitTransition = "none";
                                      quotes.style.transition = "none";
                                     },1000);
    }
    
}
function button2Anim(){
   var quotes = document.getElementById("quotes"),
       quoutesPos = parseFloat(quotes.style.left),
       bodyWidth = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue("width")),
       button = document.getElementById("quotesButton2");
    if(quoutesPos < bodyWidth || quoutesPos > bodyWidth){
        quotes.style.WebkitTransition = "left, 1s";
        quotes.style.transition = "left, 1s";
        quotes.style.left = (-1)*bodyWidth + "px";
        buttonResize(2);
        setTimeout(function(){quotes.style.WebkitTransition = "none";
                                      quotes.style.transition = "none";
                                     },1000);
    }
    
}
function button3Anim(){
    console.log(parseFloat(this));
   var quotes = document.getElementById("quotes"),
       quoutesPos = parseFloat(quotes.style.left),
       bodyWidth = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue("width")),
       button = document.getElementById("quotesButton3");
    if(quoutesPos < bodyWidth || quoutesPos > bodyWidth){
        quotes.style.WebkitTransition = "left, 1s";
        quotes.style.transition = "left, 1s";
        quotes.style.left = (-2)*bodyWidth + "px";
        buttonResize(3);
        setTimeout(function(){quotes.style.WebkitTransition = "none";
                                      quotes.style.transition = "none";
                                     },1000);
    }
    
}
function resize(){
    var quotes = document.getElementById("quotes");
    quotes.style.WebkitTransition = "left, 1s";
    quotes.style.transition = "left, 1s";
    quotes.style.left =  " 0px";
    setTimeout(function(){quotes.style.WebkitTransition = "none";
                                      quotes.style.transition = "none";
                                     },1000);
}
function buttonResize(whichOne){
   var activeButton = document.getElementsByClassName("buttonActive")[0],
       activeButtonIdName = document.getElementsByClassName("buttonActive")[0].id,
       activeButtonId = document.getElementById(activeButtonIdName);
    activeButtonId.classList.remove("buttonActive");
    activeButtonId.classList.add("buttonInActive");
    document.getElementById("quotesButton"+whichOne).classList.remove("buttonInActive");
    document.getElementById("quotesButton"+whichOne).classList.add("buttonActive");
}
}
window.addEventListener('scroll', winScr);
document.getElementById("quotes").addEventListener("mousedown", quotesMouseDown);
document.getElementById("quotesButton1").addEventListener("click", button1Anim);
document.getElementById("quotesButton2").addEventListener("click", button2Anim);
document.getElementById("quotesButton3").addEventListener("click", button3Anim);
window.addEventListener("resize", resize);
document.getElementById("quotes").addEventListener("mouseup", butPos);