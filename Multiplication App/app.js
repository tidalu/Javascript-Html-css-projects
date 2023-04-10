const min = 0;
const max = 10;
let random1, random2, answerEL;
let score = JSON.parse(localStorage.getItem('score'));

const questionEL = document.getElementById('question');
const inputEl = document.getElementById('input');
const formEl = document.getElementById('form');
const scoreEL = document.getElementById('score');

if (!score) {
    score = 0;
}

function generateRandomNumbers() {
    random1 = Math.floor(Math.random() * (max - min + 1)) + min;
    random2 = Math.floor(Math.random() * (max - min + 1)) + min;
    answerEL = random1 * random2;
    questionEL.innerText = `What is ${random1} multiplied by ${random2}?`;
}

generateRandomNumbers();

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const userAns = parseInt(inputEl.value); // Convert the user's answer to a number
    if (userAns === answerEL) {
        score += 1;
    } else {
        score -= 1;
    }
    updateLocalStorage();
    scoreEL.innerText = `Score: ${score}`;
    generateRandomNumbers();
    inputEl.value = '';
});

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score));
}
