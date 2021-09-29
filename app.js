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
    window.resizeTo(590,800);
    //window.innerHeight = 800;
    //window.innerWidth = 590;                              // Resizes the new window
    //window.focus();
    
}

function callListHideNative() {
    window.resizeTo(100,800);
    //window.innerHeight = 800;
    //window.innerWidth = 90;                              // Resizes the new window
    //window.focus();
}

function callDetailShowNative() {
    window.resizeTo(1290,800);
    //window.innerHeight = 800;
    //window.innerWidth = 1290;                              // Resizes the new window
    //window.focus();
}

function callDetailHideNative() {
    window.resizeTo(590,800);
    // window.innerHeight = 800;
    // window.innerWidth = 590;                              // Resizes the new window
    // window.focus();
    
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}