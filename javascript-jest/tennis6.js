'use strict';

const scoreToText = {
  '0': 'Love',
  '1': 'Fifteen',
  '2': 'Thirty',
  '3': 'Forty',
}

const getScore = (player1Score, player2Score) => {
  let result;

  if (player1Score === player2Score) {
    let tieScore = player1Score > 2
      ? "Deuce"
      : `${scoreToText[player1Score]}-All`
    result = tieScore;
  }
  else if (player1Score >= 4 || player2Score >= 4) {
    let diff = player1Score - player2Score
    let endGameScore = Math.abs(diff) === 1
      ? `Advantage ${diff > 0 ? 'player1' : 'player2'}`
      : `Win for ${diff > 0 ? 'player1' : 'player2'}`
    result = endGameScore;
  }
  else {
    let regularScore = scoreToText[player1Score] + "-" + scoreToText[player2Score];
    result = regularScore;
  }
  return result;
}

module.exports = getScore;
