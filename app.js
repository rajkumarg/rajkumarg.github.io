function initWindow()
{
    //window.moveTo(0,window.screen.width);
    //window.open(location.href, "detab", "toolbar=0,status=no"); //location.href = current page
}

function moveMe(currentWidth)
{
    window.moveTo((window.screen.width) - (currentWidth/2),0);
    window.focus();
}

function callListShowNative() {
    var windowWidth = 590;
    var windowHeight = 800;
    var xPos = (window.screen.width) - (windowWidth/2);
    var yPos = 0;
    window.resizeTo(windowWidth,windowHeight);
    window.moveTo(xPos,yPos);
}

function callListHideNative() {
    
    var windowWidth = 130;
    var windowHeight = 800;
    var xPos = (window.screen.width) - (windowWidth/2);
    var yPos = 0;
    window.resizeTo(windowWidth,windowHeight);
    window.moveTo(xPos,yPos);
}

function callDetailShowNative() {
   
    var windowWidth = 1290;
    var windowHeight = 800;
    var xPos = (window.screen.width) - (windowWidth/2);
    var yPos = 0;
    window.resizeTo(windowWidth,windowHeight);
    window.moveTo(xPos,yPos);
}

function callDetailHideNative() {
    var windowWidth = 590;
    var windowHeight = 800;
    var xPos = (window.screen.width) - (windowWidth/2);
    var yPos = 0;
    window.resizeTo(windowWidth,windowHeight);
    window.moveTo(xPos,yPos);
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}