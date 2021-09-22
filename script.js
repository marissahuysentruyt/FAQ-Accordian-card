// display answers
let questions = document.querySelectorAll(".visible");
let answer = document.getElementsByClassName("answer");
let animation = document.querySelectorAll(".arrow");


function showAnswer() {
    for(i = 0; i <=4; i++) {
        if(answer.style.display = "none") {
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }   
    } 
}

function animate() {
    animation.style.animation = "pointUp 0.4s forwards 1";
}

questions.offclick = function() {
    answer.style.display = "none";
}