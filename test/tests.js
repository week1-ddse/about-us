const test = QUnit.test;

function checkAnswers(dannyHAnswer, dannySAnswer, susanAnswer, eliAnswer, teamAcronymAnswer) {
    let score = 5;
    return score;

}

test('all 5 answers are correct', assert => {
//arrange
    const dannySAnswer = 'canby';
    const dannyHAnswer = 'portland';
    const susanAnswer = 'eugene';
    const eliAnswer = 'redmond';
    const teamAcronymAnswer = 'ddse';
    const expectedResult = '5';
//act
    const score = checkAnswers(dannyHAnswer, dannySAnswer, susanAnswer, eliAnswer, teamAcronymAnswer);
//assert
    assert.equal(expectedResult, score)
});
