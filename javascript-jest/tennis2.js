'use strict';

const scoreToText = {
    '0': 'Love',
    '1': 'Fifteen',
    '2': 'Thirty',
    '3': 'Forty',
}

function getScore(P1point, P2point) {
    var score = "";
    let diff = Math.abs(P1point - P2point)

    if (P1point === P2point) {
        if (P1point <= 2) {
            score = `${scoreToText[P1point]}-All`
        } else {
            score = 'Deuce'
        }
    } else if (P1point < 4 && P2point < 4) {
        score = scoreToText[P1point] + "-" + scoreToText[P2point];
    } else if (diff == 1) {
        if (P1point > P2point) {
            score = "Advantage player1";
        } else {
            score = "Advantage player2";
        }
    } else {
        if (P1point > P2point) {
            score = "Win for player1";
        } else {
            score = "Win for player2";
        }
    }

    return score;
}

module.exports = getScore;
