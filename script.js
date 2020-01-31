function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];

}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;

    }
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 

 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;

}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question: " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Final Score</h1>";
    gameOverHTML += "<h2 id='score'> Score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
var questions = [
    new Question("How many blue stripes does the United States of America nation flag have?", ["6","7","0","13"], "0"),
    new Question("What is the largest planet in our Solar System?", ["Jupiter","Saturn","Pluto","Neptune"], "Jupiter"),
    new Question("Which city’s landmarks include: The Pantheon, The Spanish Steps and Trevi Fountain?", ["Rome","Barcelona", "Athens", "Istanbul"], "Rome"),
    new Question("Which of these countries was not a Soviet Republic in USSR?", ["Moldova","Serbia","Azerbaijan","Kyrgyzstan"], "Serbia"),
    new Question("Which of these antagonist characters was created by novelist J.K. Rowling", ["Professor Moriarty","Darth Vadar","Laord Fargaad","Lord Voldemort"], "Lord Voldemort"),
    new Question("What is the name of the boxer whose life story is depicted in the 1999 movie ‘The Hurricane’?", ["Muhammad Ali","Rubin Carter","Rocky Marciano","Jake LaMotto"], "Rubin Carter"),
    new Question("Which movie was the first to win 11 Academy Awards?", ["Titantic", "La La Land", "Sound of Music","Ben-Hur"], "Ben-Hur"),
    new Question("Which of these cities is the closet to London, UK?", ["Boston,MA","Atlanta, GA", "Miami, FL","New York, NY"], "Boston,MA"),
    new Question("What did Alfred Nobel develop?", ["Dynamite","Atomic Bomb","Nobelium","Gunpowder"], "Dynamite"),
    new Question("Which Country hosted the Summer Olympics in 2016?", ["Greece", "Brasil","China", "Spain"], "Brasil"),
];

var quiz = new Quiz(questions);
populate();