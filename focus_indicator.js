function focusInHandler(event){
    Event.element(event).fire("focus:in");
}
function focusOutHandler(event){
    Event.element(event).fire("focus:out");
}

if (document.addEventListener){
    document.addEventListener("focus", focusInHandler, true);
    document.addEventListener("blur", focusOutHandler, true);
} else {
    document.observe("focusin", focusInHandler);
    document.observe("focusout", focusOutHandler);
}

document.observe('focus:in', function(event) {
    let a = event.target;
    a.style.border = "5px solid yellow";
    console.log(`focus in for ${event.target}`);
    //console.log('focus:in');
});

document.observe('focus:out', function(event) {
    let a = event.target;
    a.style.border = "unset";
    console.log('focus:out');
});
