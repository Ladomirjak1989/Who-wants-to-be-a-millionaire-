const cathegoryUrl = window.location.href.split('/')
const cathegoryId = cathegoryUrl[cathegoryUrl.length - 1].split('.')[0]
const cathegoryQuestion = questions[cathegoryId]
const game = new Game(cathegoryQuestion.questions)
const gameRoot = document.querySelector('#root')
const randomQuestion = game.shuffleQuestion()
const letsPlayAudio = document.getElementById('lets-play');
const easyAudio = document.getElementById('easy');
const wrongAnswerAudio = document.getElementById('wrongAnswer');
const correctAnswerAudio = document.getElementById('correctAnswer');

startGame()
function startGame() {
    const oneQuestion = game.randomQuestion()
    const revScoreArray = game.scoreArray()
    renderLifeLine()
    renderMainGame(oneQuestion)
    renderScore(revScoreArray)
    handleClick()
    handleClickfiftyfifty()
    const timerParent = document.querySelector('#timer')
    game.intervalId = game.createInterval(timerParent)
    // startTimerMusic ()
    startTimerMusic ()
    // stopTimerMusic()

}
function startTimerMusic () {
    
    letsPlayAudio.play()
    letsPlayAudio.volume = 0.3
}
 
function correctAnswerMusic(){
    correctAnswerAudio.play()
    correctAnswerAudio.volume = 0.3 
}
function wrongAnswerMusic(){
    wrongAnswerAudio.play()
    wrongAnswerAudio.volume = 0.3 
}
function stopTimerMusic(){
    clearTimeout(timeoutId)
	clearInterval(game.intervalId)
    letsPlayAudio.pause()
    letsPlayAudio.currentTime = 0
    easyAudio.pause()
    easyAudio.currentTime = 0
    wrongAnswerAudio.pause()
    wrongAnswerAudio.currentTime = 0
    correctAnswerAudio.pause()
    correctAnswerAudio.currentTime = 0
}



// take it from memory game.
// left aside with lifeline

function renderLifeLine() {

    const lifeLine = document.querySelector('#life-line')
    let lifeLineHTML = ''
    gameImg.forEach(element => {
        lifeLineHTML += `<li class='life-line-item ${(game.fiftyfifty) ? 'life-line-block' : ''}' id= '${element.alt}'><img src='${element.src}' alt='${element.alt}' class=${element.class}></li>`
    })
    lifeLine.innerHTML = lifeLineHTML
}


// right aside with score
function renderScore(revScoreArray) {
    const score = document.querySelector('#score')
    let scoreHTML = ''
    revScoreArray.forEach((element, index) => {

        if (game.lastcountanswer <= index) {
            scoreHTML += `<li class='win ${element.isFixed ? 'score-item-active' : 'score-item'}' id='${element.id}'>${element.score}</li>`
        } else {
            scoreHTML += `<li class='${element.isFixed ? 'score-item-active' : 'score-item'}' id='${element.id}'>${element.score}</li>`
        }


    })
    score.innerHTML = scoreHTML
}

//main game
function renderMainGame(oneQuestion) {

    gameRoot.innerHTML = `
    <div id="timer">
    </div>
    <img src="./img/logomain.png" alt="">
    <div class='question'>
    <h2>${oneQuestion.question}</h2>
    <ul id='answers' class='question-list'></ul>
    </div>`
    const answersParent = document.querySelector('#answers')
    let answerHTML = ''
    oneQuestion.answers.forEach(element => {
        answerHTML += `<li class='question-item' id='${element}'>${element}</li>`
    });
    answersParent.innerHTML = answerHTML


}
function handleClick() {
    const targets = gameRoot.querySelectorAll('li')
    targets.forEach(element => {
        element.addEventListener('click', (event) => {
            const id = element.id.split(': ')
            clearInterval(game.intervalId)
            const isAnswer = game.checkIsCorrect(id[id.length - 1])
            targets.forEach(item => {
                item.classList.add('block')
            })
            setTimeout(() => {
                if (isAnswer) {
                    correctAnswerMusic()

                    element.style.backgroundColor = 'green'
                    const isWin = game.checkIsWin()

                    if (
                        isWin
                    ) {
                        setTimeout(() => {
                            window.location.assign("./you-win.html")
                        }, 3000)
                        return
                    }
                    console.log(game.amount)
                    console.log(game.answerCount)
                    setTimeout(() => {
                        startGame()
                        startTimerMusic ()
                        


                    }, 6000)


                }
                if (!isAnswer) {
                    wrongAnswerMusic()
                    element.style.backgroundColor = 'red'
                    setTimeout(() => {
                        game.gameOver()

                    }, 4000)
                }

            }, 2000)


        })
    })
}
function handleClickfiftyfifty() {
    const element = document.querySelector('#fiftyfifty')
    element.addEventListener('click', () => {
        const answers = game.fiftyFiftyUse()
        element.classList.add('life-line-block')

        const allAnwers = document.querySelectorAll('#root li')
        allAnwers.forEach(item => {

            if (!answers.includes(item.textContent)) {
                item.textContent = ''
            }
        })
    })


}

