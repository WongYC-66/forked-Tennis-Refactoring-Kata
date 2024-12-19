'use strict';

const scoreToText = {
  '0': 'Love',
  '1': 'Fifteen',
  '2': 'Thirty',
  '3': 'Forty',
}

const getScore = (player1Score, player2Score) => {
  let result = "Current score: ";

  if (player1Score === player2Score) {  // tie score
    result += player1Score <= 2
      ? `${scoreToText[player1Score]}-All`
      : "Deuce"
  }
  else if (player1Score >= 4 || player2Score >= 4) {  // end-game score
    let diff = player1Score - player2Score
    if (diff === 1) {
      result += "Advantage " + "player1";
    } else if (diff === -1) {
      result += "Advantage " + "player2";
    } else if (diff >= 2) {
      result += "Win for " + "player1";
    } else {
      result += "Win for " + "player2";
    }
  }
  else {  // regular score
    result += scoreToText[player1Score] + "-" + scoreToText[player2Score]
  }

  return result + ", enjoy your game!";
}

module.exports = getScore;
