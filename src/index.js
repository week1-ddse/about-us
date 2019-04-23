const dannySInput = document.getElementById('dannys-from');
const dannyHInput = document.getElementById('dannyh-from');
const susanInput = document.getElementById('susan-from');
const eliInput = document.getElementById('eli-from');
const teamAcronymInput = document.getElementById('team-acronym');
const result = document.getElementById('quiz-results');
const button = document.getElementById('submit');

button.addEventListener('click', asset => {
    const dannySAnswer = dannySInput.value;
    const dannyHAnswer = dannyHInput.value;
    const susanAnswer = susanInput.value;
    const eliAnswer = eliInput.value;
    const teamAcronymAnswer = teamAcronymInput.value;

    console.log(dannySAnswer);

});
console.log(dannySInput, dannyHInput, susanInput, eliInput, teamAcronymInput, result, button);

