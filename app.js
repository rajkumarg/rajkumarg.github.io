function moveMe(currentWidth)
{
    window.moveTo((window.screen.width) - (currentWidth/2),0);
    window.focus();
}

function callListShowNative() {
    window.innerHeight = 800;
    window.innerWidth = 590;                              // Resizes the new window
    window.focus();
    
}

function callListHideNative() {
    window.innerHeight = 800;
    window.innerWidth = 90;                              // Resizes the new window
    window.focus();
}

function callDetailShowNative() {
    window.innerHeight = 800;
    window.innerWidth = 1290;                              // Resizes the new window
    window.focus();
}

function callDetailHideNative() {
    window.innerHeight = 800;
    window.innerWidth = 590;                              // Resizes the new window
    window.focus();
    
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}