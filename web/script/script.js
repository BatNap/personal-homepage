var myID = document.getElementById("scrollable");


var ScrollFunc = async function() {
    
    var y = window.scrollY;
    
    if (y >= 350) {
        myID.classList.add("show");
        myID.classList.remove("hide");
    } else {
        myID.classList.add("hide");
        myID.classList.remove("show");
    }
    
    var sticky = document.getElementById("socials");
    var view = window.visualViewport.pageTop;

    var min = document.getElementById("bodyBG").offsetHeight;

    if(view > min){
        sticky.style.top =  window.visualViewport.pageTop+'px';
    }
};

window.addEventListener("scroll", ScrollFunc);

window.addEventListener("resize", function() {    
    
})