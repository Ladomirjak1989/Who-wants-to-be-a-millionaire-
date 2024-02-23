class Game {
    constructor(questions) {
        this.questions = questions
        this.answer = null
        this.usedQuestion = []
        this.amount = 0
        this.answerCount = 0
        this.fiftyFifty = false
        this.callFriendUse = false
        this.helpAudienceUse = false
        this.lastcountanswer = 15
        this.currentQuestion = null
        this.timer = 40000
        this.intervalId = null
        this.timeoutId
        this.currentTime = 0
        this.correctAnswer = 0
        this.wrongAnswer = 0
    }
    fiftyFiftyUse() {
        this.fiftyFifty = true
        const rightAnswerIndex = this.currentQuestion.answers.findIndex((item) => {
            const array = item.split(': ')
            return array[array.length - 1] === this.answer

        })

        const array = [...this.currentQuestion.answers]
        const correctAnswer = array.splice(rightAnswerIndex, 1)
        const random = Math.floor(Math.random() * array.length)
        const newArray = [...correctAnswer, ...array.splice(random, 1)]

        return newArray
    }
    callFriend() {
        this.callFriendUse = !this.callFriendUse
    }
    helpAudience() {
        this.helpAudienceUse = !this.helpAudienceUse

    }
    calcSum() {
        switch (this.answerCount) {
            case 1:
                return 100
            case 2:
                return 200
            case 3:
                return 300
            case 4:
                return 500
            case 5:
                return 1000
            case 6:
                return 2000
            case 7:
                return 4000
            case 8:
                return 8000
            case 9:
                return 16000
            case 10:
                return 32000
            case 11:
                return 64000
            case 12:
                return 125000
            case 13:
                return 250000
            case 14:
                return 500000
            case 15:
                return 1000000


        }
    }


    checkIsCorrect(answer) {
        const isCorrect = this.answer === answer
        if (isCorrect) {
            this.lastcountanswer -= 1
            this.answerCount += 1
            this.amount = this.calcSum()
        }
        return isCorrect
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

        this.currentQuestion = question
        this.answer = question.correctAnswer
        this.usedQuestion.push(question)
        this.questions.splice(randomIndex, 1)
        return question
    }

    scoreArray() {
        const revScoreArray = [].concat(scoreArray).reverse()
        return revScoreArray
    }

    checkIsWin() {
        return this.answerCount === 15
    }

    createInterval(timerParent) {
        let leftToNext = this.timer
        return setInterval(() => {
            leftToNext -= 10
            if (leftToNext <= 0) {
                clearInterval(this.intervalId)
                this.gameOver()
            }
            timerParent.textContent = (leftToNext / 1000).toFixed(3)
        }, 10)

    }

    gameOver() {
        window.location.assign("./you-lose.html")
        stopTimerMusic();
        wrongAnswerAudio.play();
        wrongAnswerAudio.volume = 0.3;
    }


}
