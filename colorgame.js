/**
 * Created by Bakuutin on 10/24/15.
 */

var field = document.getElementById("field"),
    accuracy = 10/360,
    min_saturation = .8;

var score_sign = document.getElementById("score_sign"),
    best_sign = document.getElementById("best_sign"),
    score = 0,
    best = 0,
    level = 1;

var timer_bar = document.getElementById("timer_bar"),
    timer = 0,
    penalty = 20;

function wrong(cell){
    cell.style.backgroundColor = "black";
    cell.onclick = null;
    timer += penalty;
    if(timer >= 100) new_game();
}

function right(cell){
    timer = 0;
    score += level;
    if(score>best){
        best=score;
        best_sign.innerHTML=best.toString();
    }
    score_sign.innerHTML=score.toString();
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
            var color = 'white';
            if (rx===i && ry ===j){
                color = hsv(
                    pureHue(),
                    1,
                    1
                );
                td.onclick = function (click){
                    return right(click.target)
                };
            }
            else {
                color = hsv(
                    notPureHue(accuracy),
                    Math.random()*(1 - min_saturation) + min_saturation,
                    1
                );
                td.onclick = function (click){
                    return wrong(click.target)
                };
            }
            td.style.backgroundColor = color;
            td.style.color = color;
            td.appendChild(document.createTextNode(color));
        }
    }
    return table;
}

function timer_update(){
    timer += 0.2*level;
    timer_bar.style.width=''+(timer)+'%';
    if(timer >= 100) new_game();
}

function new_game(){
    timer=0;
    score=0;
    score_sign.innerHTML=score.toString();
    field.innerHTML = "";
    field.appendChild(coloredTable(5, 5));
}

function main() {
    setInterval(timer_update, 100);
    new_game();
}
