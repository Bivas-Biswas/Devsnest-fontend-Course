// quizes queries
function Quiz(questions){
    this.questions = questions
    this.score = 0
    this.currentQuestionIndex = 0
}

Quiz.prototype.getCurrentQuestion = function (){
    return this.questions[this.currentQuestionIndex]
}

Quiz.prototype.nextQuestion = function (){
    this.currentQuestionIndex++
}

Quiz.prototype.hasEnded = function (){
    if(this.currentQuestionIndex === this.questions.length)
        return true
}

Quiz.prototype.guess = function (guess){
    let currentQuestion = this.questions[this.currentQuestionIndex]
    if(currentQuestion.isCorrect(guess))
        this.score++
    this.nextQuestion()
}

// define question object
function Question(question, choices, correct){
    this.question = question
    this.choices = choices
    this.correct = correct
}

Question.prototype.isCorrect = function (guess){
    if(guess === this.correct)
        return true
}

let QuizUI = {
    displayNext: function ()
    {
        if(quiz.hasEnded())
            this.displayScore()
        else
        {
            this.displayQuestion()
            this.displayChoices()
            this.displayProgress()
        }
    },
    displayQuestion: function ()
    {
        let question = quiz.getCurrentQuestion().question
        this.setText('question', question)
    },
    displayChoices: function ()
    {
        let choices = quiz.getCurrentQuestion().choices
        for(let i = 0; i < choices.length; i++){
            this.setText('choice'+i, choices[i])
            this.guessHandler('guess'+i, i)
        }
    },
    displayScore: function (){
        let gameOverHtml = `<h1>Game Over</h1>`

        gameOverHtml += `<h2> Your Score is: ${quiz.score}</h2>
                         <button onclick="reload()">Reload</button>`
        this.setText('quiz', gameOverHtml)
    },

    setText: function (id, text){
        let element = document.getElementById(id)
        element.innerHTML = text
    },

    displayProgress: function (){
        let questionNo = quiz.currentQuestionIndex
        this.setText('progress',`Question ${questionNo+1} of ${quiz.questions.length}`)
    },

    guessHandler:function (id, guess){
        let choiceButton = document.getElementById(id)
        choiceButton.onclick = function (){
            quiz.guess(guess)
            QuizUI.displayNext()
        }
    }
}


//for reload button
function reload(){
    window.location.reload()
}


let question1 = new Question("What is 5+5 ?", ["10", "34"], 0);
let question2 = new Question("Which animal is larger", ["Elephant", "Chicken"], 0);
let question3 = new Question("Who is Barack Hussein Obama II?", ["A famous electrician.", "Current president of America"], 1);

let quiz = new Quiz([question1,question2, question3])
QuizUI.displayNext()