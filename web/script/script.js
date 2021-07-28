var myID = document.getElementById("scrollable");
 
var ScrollFunc = async function() {
    

    var y = window.scrollY;

    if (y >= 350) {
        // await delay(1000);
        myID.className = "scrollable show";
    } else {
        myID.className = "scrollable hide";
    }
};

// const delay = ms => new Promise(res => setTimeout(res, ms));

window.addEventListener("scroll", ScrollFunc);

window.addEventListener("resize", function() {    
    
})