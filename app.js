var callListShowIntervalID;
var interval = 1;
var defaultWidth = 100;
var currentWidth = 100;
var windowHeight = 800;
var incrementVal = 20; 

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

    callListShowIntervalID = window.setInterval("expandList()", interval);

    var windowWidth = 590;
    var xPos = (window.screen.width) - (windowWidth/2);
    var yPos = 0;
    window.moveTo(xPos,yPos);
}

function expandList()
{
    if (window.closed) {
        clearInterval(callListShowIntervalID);
        return;
    }

    currentWidth += incrementVal;

    if(currentWidth < 590)
    {
      window.resizeTo(currentWidth,windowHeight);
    }
    else
    {
      clearInterval(callListShowIntervalID);
      return;
    }
}

function callListHideNative() {
    
    var windowWidth = 150;
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