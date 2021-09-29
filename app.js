function moveMe()
{
    window.moveTo(window.screen.width - window.outerWidth,window.screen.height - window.outerHeight);
    window.focus();
}

function callListShowNative() {
    window.outerHeight = 800;
    window.outerWidth = 590;                              // Resizes the new window
    window.focus(); 
    
}

function callListHideNative() {
    window.outerHeight = 800;
    window.outerWidth = 90;                              // Resizes the new window
    window.focus(); 
    
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}