/**
 * Created by Bakuutin on 10/24/15.
 */

var pure_colors=[// by degree on circle
    0,      //red
    60,     //yellow
    120,    //green
    180,    //cyan
    240,    //blue
    300,    //magenta
    360     //red again
].map(function(degree){return degree/360;});

function componentToHex(component) {
    var hex = component.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hsv(h, s, v) {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return rgb(
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    );
}

function notPureHue(ac){
    var hue=Math.random();
    for(var i=0; i<pure_colors.length; i++){
        if(hue>pure_colors[i]-ac && hue<pure_colors[i]+ac){
            // hue is too pure, try again recursively
            return notPureHue(ac);
        }
    }
    return hue;
}

function pureHue(){
    return pure_colors[Math.floor(Math.random() * pure_colors.length)];
}