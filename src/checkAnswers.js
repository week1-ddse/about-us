function checkAnswers(dannySAnswer, dannyHAnswer, susanAnswer, eliAnswer, teamAcronymAnswer) {
    let score = 0;

    

    if(dannySAnswer.toLowerCase() === 'canby') {
        score += 1;
    }
    
    if(dannyHAnswer.toLowerCase() === 'portland') {
        score += 1;
    } else if(dannyHAnswer.toLowerCase() === 'pdx') {
        score += 2;
    }
    
    if(susanAnswer.toLowerCase() === 'eugene') {
        score += 1;
    }

    if(eliAnswer.toLowerCase() === 'redmond') {
        score += 1;
    }

    if(teamAcronymAnswer.toLowerCase() === 'ddse') {
        score += 1;
    }

    return score;

}

export default checkAnswers;