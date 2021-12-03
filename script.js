// Display FAQ Answers on click

// question variable, should return nodelist
let questions = document.querySelectorAll(".visible");

// loop through questions
for(let question of questions) {
    question.addEventListener("click", function(event) {
        //new variable, storing the event target 
        const clicked = event.target;
        //new variable to create displayed answer, giving class to the question ('js-dropdown')
        const displayed = document.querySelector(".js-dropdown");

        // if the clicked item has a class of js-dropdown, remove it
        if(displayed) {
            displayed.classList.remove(".js-dropdown");
        } 
        //otherwise, add js-dropdown to the clicked item
        clicked.classList.add(".js-dropdown");
       
        //answer variable, should return a nodelist
        let answers = document.querySelectorAll(".invisible");
        
        // loop through answers 
        for(let answer of answers) {
            //if the index-numbers (which were hardcoded) match, display and change fontWeight
            if(answer.getAttribute("index-number") === question.getAttribute("index-number")) {
                answer.style.display = "block";
                question.style.fontWeight = "700";
            // if they don't match, don't display
            } else {
                answer.style.display = "none";
                // question.style.fontWeight = "400"; //this is overriding the if statement, except for last question
                
            }

            // carrot variables- NOT FIGURED OUT! onclick="animation()" is already in the html file. if the carrot & answer index-number are the same, AND the answer is displayed, I want to trigger the carrot to point upward, all with the question click. .animate is in the stylesheet...not sure. 
            let carrot = document.querySelectorAll(".carrot");
            // animation function for carrot? 
            animation = () => {
            if(carrot.getAttribute("index-number") === answer.getAttribute("index-number") && (answer.style.display = "block")) {
                carrot.classList.add(".animate");
            }
        }
        }
        
    });
    
}