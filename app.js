function moveMe(currentWidth)
{
    window.moveTo((window.screen.width) - (currentWidth/2),0);
    window.focus();
}

function callListShowNative() {
    window.outerHeight = 800;
    window.outerWidth = 590;                              // Resizes the new window
    moveMe(window.outerWidth);
    
}

function callListHideNative() {
    window.outerHeight = 800;
    window.outerWidth = 90;                              // Resizes the new window
    moveMe(window.outerWidth);
}

function callDetailShowNative() {
    window.outerHeight = 800;
    window.outerWidth = 1290;                              // Resizes the new window
    moveMe(window.outerWidth);
}

function callDetailHideNative() {
    window.outerHeight = 800;
    window.outerWidth = 590;                              // Resizes the new window
    moveMe(window.outerWidth);
    
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}