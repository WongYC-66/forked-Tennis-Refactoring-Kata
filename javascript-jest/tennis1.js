'use strict';

const scoreToText = {
    '0': 'Love',
    '1': 'Fifteen',
    '2': 'Thirty',
    '3': 'Forty',
}

function getScore(m_score1, m_score2) {
    var score = "";
    if (m_score1 === m_score2) {
        if (m_score1 <= 2) {
            score = `${scoreToText[m_score1]}-All`;
        } else {
            score = "Deuce"
        }
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        let diff = Math.abs(m_score1 - m_score2)
        if (m_score1 > m_score2) {
            score = diff >= 2 ? "Win for player1" : "Advantage player1"
        } else {
            score = diff >= 2 ? "Win for player2" : "Advantage player2"
        }
    } else {
        score = `${scoreToText[m_score1]}-${scoreToText[m_score2]}`
    }
    return score;
}

module.exports = getScore;
