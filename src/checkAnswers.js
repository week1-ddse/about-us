function checkAnswers(dannySAnswer, dannyHAnswer, susanAnswer, eliAnswer, teamAcronymAnswer) {
    let score = 0;

    if(dannySAnswer === 'canby') {
        score += 1;
    }
    
    if(dannyHAnswer === 'portland') {
        score += 1;
    } else if(dannyHAnswer === 'pdx') {
        score += 2;
    }
    
    if(susanAnswer === 'eugene') {
        score += 1;
    }

    if(eliAnswer === 'redmond') {
        score += 1;
    }

    if(teamAcronymAnswer === 'ddse') {
        score += 1;
    }

    return score;

};

export default checkAnswers;