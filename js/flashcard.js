var flag = 1;
var helo = 2;
var id = 0;

function randomId() {
    var length = cardSet.length;
    id = Math.floor(Math.random() * length);
}

function next() {
    randomId();
    flag = 0;
    toFront();
}

function toFront() {
    if (flag === 1) {
        var answer = cardSet[id].split(", ")[1];
        document.getElementById('term').innerHTML = "Answer: " + answer;
        flag = 0;
    } else {
        var question = cardSet[id].split(", ")[0];
        document.getElementById('term').innerHTML = "Question: " + question;
        flag = 1;
    }
}