/**
 * Created by Bakuutin on 10/24/15.
 */

var field = document.getElementById("field");
var accuracy = 11/360;

function wrong(cell){
    console.log(cell);
}

function right(cell){
    console.log('Yahoo!');
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
                td.onclick = function (td) {
                    return right(td)
                }
            }
            else {
                td.style.backgroundColor = colorByHue(notPureHue(accuracy));
                td.onclick = function (td) {
                    return wrong(td)
                };
            }
        }
    }
    return table;
}

function main() {
    field.appendChild(coloredTable(5, 5));
}
