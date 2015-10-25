/**
 * Created by Bakuutin on 10/24/15.
 */

var field = document.getElementById("field"),
    accuracy = 10/360,
    min_saturation = .8;

var score_sign = document.getElementById("score_sign"),
    score = 0;

var timer_bar = document.getElementById("timer_bar"),
    timer = 0,
    max_time = 218;

function wrong(cell){
    //console.log('No. '+cell.style.backgroundColor);
    cell.style.backgroundColor = "#ffffff";
    cell.onclick = null;
}

function right(cell){
    //console.log('Yahoo! ');
    timer = 0;
    score_sign.innerHTML=++score;
    field.innerHTML = "";
    field.appendChild(coloredTable(5, 5));
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
                td.style.backgroundColor = hsv(
                    pureHue(),
                    1,
                    1
                );
                td.onclick = function (click){
                    return right(click.target)
                };
            }
            else {
                td.style.backgroundColor = hsv(
                    notPureHue(accuracy),
                    Math.random()*(1 - min_saturation) + min_saturation,
                    1
                );
                td.onclick = function (click){
                    return wrong(click.target)
                };
            }
        }
    }
    return table;
}

function timer_update(){
    timer_bar.style.width=''+(++timer)+'px';
    if(timer === max_time) new_game();
}

function new_game(){
    timer=0;
    score=0;
    score_sign.innerHTML=score;
    field.innerHTML = "";
    field.appendChild(coloredTable(5, 5));
}

function main() {
    setInterval(timer_update, 100);
    new_game();
}
