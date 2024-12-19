'use strict';

function getScore(score1, score2) {
    if ((score1 < 4 && score2 < 4) && (score1 + score2 < 6)) {
        var scoreName = ["Love", "Fifteen", "Thirty", "Forty"];
        let s1 = scoreName[score1];
        let s2 = scoreName[score2];
        return (score1 === score2)
            ? `${s1}-All`
            : `${s1}-${s2}`
    } else {
        let playerName = score1 > score2 ? "player1" : "player2";

        if (score1 === score2) return "Deuce";

        return (Math.abs(score1 - score2) === 1)
            ? `Advantage ${playerName}`
            : `Win for ${playerName}`;
    }
}

module.exports = getScore;
