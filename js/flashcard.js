var flag = 1;
var helo = 2;
var dataData = ["question1, answer1", "question2, answer2", "question3, answer3", "question4, answer4"];
var id = 0;

function randomId() {
    var length = dataData.length;
    id = Math.floor(Math.random() * length);
}

function next() {
    randomId();
    flag = 0;
    toFront();
}

function toFront() {
    if (flag === 1) {
        var answer = dataData[id].split(", ")[1];
        document.getElementById('term').innerHTML = "Answer: " + answer;
        flag = 0;
    } else {
        var question = dataData[id].split(", ")[0];
        document.getElementById('term').innerHTML = "Question: " + question;
        flag = 1;
    }
}