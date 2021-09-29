function callListShowNative() {
    window.outerHeight = 590;
    window.outerWidth = 800;                              // Resizes the new window
    window.focus(); 
    
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}