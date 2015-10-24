/**
 * Created by Bakuutin on 10/24/15.
 */

var field = document.getElementById("field");
var accuracy = 21/360;
var score_sign = document.getElementById("score_sign");
var score = 0;

function wrong(cell){
    console.log('No. '+cell.style.backgroundColor);
    cell.style.backgroundColor = "#ffffff";
    cell.onclick = null;
}

function right(cell){
    console.log('Yahoo! ');
    score_sign.innerHTML=++score;
    field.innerHTML = "";
    field.appendChild(coloredTable(5, 5));
}

function colorByHue(hue){
    return hsv(hue,1,1);
}

function coloredTable(x, y) {
    var rx=Math.floor(Math.random() * x);
    var ry=Math.floor(Math.random() * y);
    var table = document.createElement('table');
    for (var i = 0; i < x; i++) {
        var tr = table.insertRow();
        for (var j = 0; j < y; j++) {
            var td = tr.insertCell(-1);
            td.appendChild(document.createTextNode(''));
            if (rx===i && ry ===j){
                td.style.backgroundColor = colorByHue(pureHue());
                td.onclick = function (click){
                    return right(click.target)
                };
            }
            else {
                td.style.backgroundColor = colorByHue(notPureHue(accuracy));
                td.onclick = function (click){
                    return wrong(click.target)
                };
            }
        }
    }
    return table;
}

function main() {
    field.appendChild(coloredTable(5, 5));
}
