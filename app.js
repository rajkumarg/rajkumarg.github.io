function callListShowNative() {
    window.resizeTo(590, 800);                             // Resizes the new window
    window.focus(); 
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}