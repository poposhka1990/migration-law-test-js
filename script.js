const questions = [
    'Сколько дней предоставляется иностранному студенту по прибытию в Россию для оформления регистрации?',
    'За сколько времени нужно принести документы для продления учебной визы?',
    'Сколько дней оформляется приглашение?'
]

const options = [
    [ '1 день', '3 дня', '5 дней', '7 дней' ],
    [ '1 день', '1 неделя', '1 месяц', '2 месяца' ],
    [ '1 день', '2 недели', '1 месяц', '2 месяца' ]
]

const answers = {
    0: 'fourth',
    1: 'third',
    2: 'second'
}

const question = document.querySelector('.question')
const form = document.querySelector('.question__form')
const input = document.querySelectorAll('input')
const firstOptionLabel = document.querySelector('#firstLabel')
const secondOptionLabel = document.querySelector('#secondLabel')
const thirdOptionLabel = document.querySelector('#thirdLabel')
const fourthOptionLabel = document.querySelector('#fourthLabel')
const button = document.querySelector('button')
const answerLabel = document.querySelector('.answer')
const label = document.querySelectorAll('label')
let chosenOption = null
let questionNumber = 0
let chosenInput

const nextQuestion = () => {
    question.textContent = questions[questionNumber]
    firstOptionLabel.textContent = options[questionNumber][0]
    secondOptionLabel.textContent = options[questionNumber][1]
    thirdOptionLabel.textContent = options[questionNumber][2]
    fourthOptionLabel.textContent = options[questionNumber][3]
    answerLabel.textContent = ''
}

const uncheckInput = () => {
    input[chosenInput].checked = false
}

const removeStyles = () => {
    label[chosenInput].classList.remove('wrong-answer')
    label[chosenInput].classList.remove('right-answer')
}

nextQuestion(questionNumber) 

input.forEach((element, i, arr) => {
    element.addEventListener('click', () => {
      chosenOption = arr[i].value
      chosenInput = i
    })
})

button.addEventListener('click', () => {
    if (chosenOption === answers[0]) {
        answerLabel.textContent = 'Правильно!'
        label[chosenInput].classList.add('right-answer')
        questionNumber++
        setTimeout(removeStyles, 1000)
        setTimeout(uncheckInput, 1500)
        setTimeout(nextQuestion, 1500)      
    } else {
        answerLabel.textContent = 'Не правильно'
        label[chosenInput].classList.add('wrong-answer')
        questionNumber++
        setTimeout(removeStyles, 1000)
        setTimeout(uncheckInput, 1500)
        setTimeout(nextQuestion, 1500)  
         
    }
})