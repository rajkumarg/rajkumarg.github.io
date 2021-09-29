function moveMe()
{
    window.moveTo(window.screen.width,0);
    window.focus();
}

function callListShowNative() {
    window.outerHeight = 800;
    window.outerWidth = 590;                              // Resizes the new window
    moveMe();
    
}

function callListHideNative() {
    window.outerHeight = 800;
    window.outerWidth = 90;                              // Resizes the new window
    moveMe();
}

function callDetailShowNative() {
    window.outerHeight = 800;
    window.outerWidth = 1290;                              // Resizes the new window
    moveMe();
}

function callDetailHideNative() {
    window.outerHeight = 800;
    window.outerWidth = 590;                              // Resizes the new window
    moveMe();
    
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}