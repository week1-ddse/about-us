const test = QUnit.test;
import checkAnswers from '../src/checkAnswers.js';

test('return a score of 5 if all 5 answers are correct', assert => {
//arrange
    const dannySAnswer = 'canby';
    const dannyHAnswer = 'portland';
    const susanAnswer = 'eugene';
    const eliAnswer = 'redmond';
    const teamAcronymAnswer = 'ddse';
    const expectedResult = 5;
//act
    const score = checkAnswers(dannySAnswer, dannyHAnswer, susanAnswer, eliAnswer, teamAcronymAnswer);
//assert
    assert.equal(expectedResult, score);
});

test('return a score of 0 if all 5 answers are wrong', assert => {
    //arrange
    const dannySAnswer = 'phoenix';
    const dannyHAnswer = 'narnia';
    const susanAnswer = 'iceland';
    const eliAnswer = 'mars';
    const teamAcronymAnswer = 'esdd';
    const expectedResult = 0;
    //act
    const score = checkAnswers(dannySAnswer, dannyHAnswer, susanAnswer, eliAnswer, teamAcronymAnswer);
    //assert
    assert.equal(expectedResult, score);
});

test('return a score of 6 if all 5 answers are correct and dannyHAnswer is pdx', assert => {
    //arrange
    const dannySAnswer = 'canby';
    const dannyHAnswer = 'pdx';
    const susanAnswer = 'eugene';
    const eliAnswer = 'redmond';
    const teamAcronymAnswer = 'ddse';
    const expectedResult = 6;
    //act
    const score = checkAnswers(dannySAnswer, dannyHAnswer, susanAnswer, eliAnswer, teamAcronymAnswer);
    //assert
    assert.equal(expectedResult, score);
});

test('return a score of 4 if 4 of 5 answers are corect', assert => {
    //arrange
    const dannySAnswer = 'canby';
    const dannyHAnswer = 'narnia';
    const susanAnswer = 'eugene';
    const eliAnswer = 'redmond';
    const teamAcronymAnswer = 'ddse';
    const expectedResult = 4;
    //act
    const score = checkAnswers(dannySAnswer, dannyHAnswer, susanAnswer, eliAnswer, teamAcronymAnswer);
    //assert
    assert.equal(expectedResult, score);
});