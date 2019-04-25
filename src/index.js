import checkAnswers from './checkAnswers.js';

const dannySInput = document.getElementById('dannys-from');
const dannyHInput = document.getElementById('dannyh-from');
const susanInput = document.getElementById('susan-from');
const eliInput = document.getElementById('eli-from');
const teamAcronymInput = document.getElementById('team-acronym');
const result = document.getElementById('quiz-results');
const button = document.getElementById('submit');

button.addEventListener('click', event => {
    event.preventDefault();
    const dannySAnswer = dannySInput.value.trim();
    const dannyHAnswer = dannyHInput.value.trim();
    const susanAnswer = susanInput.value.trim();
    const eliAnswer = eliInput.value.trim();
    const teamAcronymAnswer = teamAcronymInput.value.trim();

    const score = checkAnswers(dannySAnswer, dannyHAnswer, susanAnswer, eliAnswer, teamAcronymAnswer);
    
    if(dannySAnswer === '' || dannyHAnswer === '' || susanAnswer === '' || eliAnswer === '' || teamAcronymAnswer === '') {
        alert('You did not fill in everything!!!');
    }

    const message = 'Your score: ' + score + ' out of 5!';
    
    result.textContent = message;

});
