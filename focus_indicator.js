function focusInHandler(event){
    let a = event.target;
    let r = a.parentElement;

    let c;
    c = window.getComputedStyle(a, null).getPropertyValue("background-color");
    let parentBackground = window.getComputedStyle(r, null).getPropertyValue("background-color");

       // c = a.style.background;
        console.log(`${c}`);
        let f = invertColor(c)
    a.style.border = `5px ${f} solid`;
}
function focusOutHandler(event){

    let a = event.target;
     a.style.border = "unset";
}

if (document.addEventListener){
    document.addEventListener("focus", focusInHandler, true);
    document.addEventListener("blur", focusOutHandler, true);
}

function invertColor(rgb, bw=false) {
    console.log(rgb)
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
    console.log(rgb)
    let r = (+rgb[0]),
        g = (+rgb[1]),
        b = (+rgb[2]);

    r = (255 - r)
    g = (255 - g)
    b = (255 - b)
    return `rgb(${r}, ${b}, ${g})`
}
