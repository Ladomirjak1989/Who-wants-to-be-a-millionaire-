const cathegoryUrl = window.location.href.split('/')
const cathegoryId = cathegoryUrl[cathegoryUrl.length - 1].split('.')[0]
const cathegoryQuestion = questions[cathegoryId]
const game = new Game(cathegoryQuestion.questions)

const randomQuestion = game.shuffleQuestion()
const lifeLine = document.querySelector('#life-line')
const score = document.querySelector('#score')
const gameRoot = document.querySelector('#root')

const oneQuestion = game.randomQuestion()
console.log(oneQuestion)
gameRoot.insertAdjacentHTML('beforeend', `<div class='question'>
<h2>${oneQuestion.question}</h2>
<ul class='question-list'>${oneQuestion.answers.map(answer => {
    return `<li class='question-item' id='${answer}'>${answer}</li>`
}).join('')}</ul>
</div>`)
const scoreClass = 'score-item-active'
const revScoreArray = game.scoreArray()
score.insertAdjacentHTML("beforeend", `<ul class= 'score-list'>${revScoreArray.map(element => {
    return `<li class=${element.isFixed? 'score-item-active':'score-item'} id='${element.id}'>${element.score}</li>`
}).join('')}</ul>`)
lifeLine.insertAdjacentHTML("beforeend", `<ul class='life-line-list'>${gameImg.map(element => {
    return `<li class= ''><img src='${element.src}' alt='${element.alt}' class=${element.class}></li>`
}).join('')}</ul>`)

gameRoot.addEventListener('click',(event)=>{
    const target = event.target
if (target.classList.contains('question-item')){
    console.log(target)
    const isAnswer = game.checkIsCorrect(target.id)
    if (isAnswer) {
        target.style.backgroundColor = 'green'
    }
    if(!isAnswer) {
        target.style.backgroundColor = 'red'
    }
    console.log(isAnswer)
}
})
