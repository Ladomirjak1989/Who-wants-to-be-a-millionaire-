class Game {
    constructor(questions) {
        this.questions = questions
        this.amount = 0
        this.answer = null




    }
    fiftyFifty() {

    }
    callFriend() {

    }
    helpAudience() {

    }
    checkIsCorrect (answer) {
return this.answer === answer
    }
    shuffleQuestion() {
        let currentIndex = this.questions.length
        let temp = null
        let randomIndex = null
        while (currentIndex) {
            currentIndex -= 1
            randomIndex = Math.floor(Math.random() * currentIndex)
            temp = this.questions[currentIndex]
            this.questions[currentIndex] = this.questions[randomIndex]
            this.questions[randomIndex] = temp

        }
        return this.questions
    }
    randomQuestion() {
        const randomIndex = Math.floor(Math.random() * this.questions.length - 1)
        const question = this.questions[randomIndex]
       
        this.answer = question.correctAnswer

        return question
    }
    scoreArray() {
        const revScoreArray = [].concat(scoreArray).reverse()
        return revScoreArray
    }
}