import QUESTIONS from "./questions.js"

// добавить El
const question = document.querySelector('.question')
const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')
const commentary = document.querySelector('.commentary')
const labels = document.querySelectorAll('label')
const result = document.querySelector('.content')
const questionNumberLabel = document.querySelector('.question-number')
const progressBar = document.querySelector('#progress-bar')
const optionLabels = [
    document.querySelector('#firstLabel'),
    document.querySelector('#secondLabel'),
    document.querySelector('#thirdLabel'),
    document.querySelector('#fourthLabel')
]

let chosenOption = ''
let questionNumber = 0
let chosenIndex = ''
let correctAnswersCount = 0

// Почему если переписываю на стандартную функцию, то не работает в блоке setTimeout?
function getNextQuestion () {
    if (questionNumber <= QUESTIONS.length - 1) {
        questionNumberLabel.textContent = `${questionNumber + 1} из ${QUESTIONS.length} вопросов`
        question.textContent = QUESTIONS[questionNumber].question
        commentary.textContent = ''

        QUESTIONS[questionNumber].options.forEach((option, index) => {
            optionLabels[index].textContent = option
        })
    } else {
        result.innerHTML = `<p>У вас ${correctAnswersCount} правильных ответа из ${QUESTIONS.length} вопросов</p>`
    }
}

function updateProgress () {
    progressBar.value = questionNumber
} 

function uncheckInput () {
    inputs[chosenIndex].checked = false
}

function removeLabelsStyles () {
    labels[chosenIndex].classList.remove('wrong-answer')
    labels[chosenIndex].classList.remove('right-answer')
}

getNextQuestion()

inputs.forEach((element, i) => {
    element.addEventListener('click', () => {
        chosenOption = element.value
        chosenIndex = i
    })
})

// Тоже похожие блоки, нужно выносить в функцию для минимизации кода?
button.addEventListener('click', () => {
    if (chosenOption === QUESTIONS[questionNumber].answer) {
        commentary.textContent = QUESTIONS[questionNumber].correctCommentary
        labels[chosenIndex].classList.add('right-answer')
        correctAnswersCount++     
    } else {
        commentary.textContent = QUESTIONS[questionNumber].wrongCommentary
        labels[chosenIndex].classList.add('wrong-answer')
    }

    // Тоже получается из этого сделать функцию, если повторяется?
    questionNumber++
    // Добавить кнопку следующий вопрос 
    setTimeout(removeLabelsStyles, 1000)
    setTimeout(updateProgress, 1000)
    setTimeout(uncheckInput, 1500)
    setTimeout(getNextQuestion, 2500) 
})