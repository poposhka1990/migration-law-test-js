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

const answers = [
    [ false, false, false, true ],
    [ false, false, true, false ],
    [ false, true, false, false ],
]

let question = document.querySelector('.question')
const form = document.querySelector('.question__form')
let firstOption = document.getElementById('firstLabel')
let secondOption = document.getElementById('secondLabel')
let thirdOption = document.getElementById('thirdLabel')
let fourthOption = document.getElementById('fourthLabel')


question.textContent = questions[0]
firstOption.textContent = options[0][0]
secondOption.textContent = options[0][1]
thirdOption.textContent = options[0][2]
fourthOption.textContent = options[0][3]

console.log(firstOption)