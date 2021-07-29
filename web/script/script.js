var myID = document.getElementById("scrollable");
var previousScroll = window.visualViewport.pageTop;


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
    var stickyTop = sticky.offsetTop;
    var view = window.visualViewport.pageTop;
    
    // if(stickyTop <= view+10){
    //     sticky.style.top =  window.visualViewport.pageTop+'px';
    // }

    var min = document.getElementById("bodyBG").offsetHeight;

    console.log(view);
    console.log(min);

    if(view > min){
        sticky.style.top =  window.visualViewport.pageTop+'px';
    }

    // if(view < previousScroll){
    //     sticky.style.top =  window.visualViewport.pageTop+'px';
    //     // if(stickyTop <= min+10){
    //     //     sticky.style.top =  window.visualViewport.pageTop+'px';
    //     // }
    // }

    previousScroll = view;
};

window.addEventListener("scroll", ScrollFunc);

window.addEventListener("resize", function() {    
    
})