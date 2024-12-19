'use strict';

class TennisGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.score1 = 0;
        this.score2 = 0;
    }

    getScore(score1, score2) {
        this.score1 = score1;
        this.score2 = score2;

        let res = null

        if (this.isDeuce()) {
            res = Deuce
        } else if (this.player1HasWon()) {
            res = GamePlayer1
        } else if (this.player2HasWon()) {
            res = GamePlayer2
        } else if (this.player1HasAdvantage()) {
            res = Advantageplayer1
        } else if (this.player2HasAdvantage()) {
            res = Advantageplayer2
        } else {
            res = DefaultResult
        }

        return res.getResult(this)
    }

    player2HasAdvantage() {
        return this.score2 >= 4 && (this.score2 - this.score1) === 1;
    }

    player1HasAdvantage() {
        return this.score1 >= 4 && (this.score1 - this.score2) === 1;
    }

    player2HasWon() {
        return this.score2 >= 4 && (this.score2 - this.score1) >= 2;
    }

    player1HasWon() {
        return this.score1 >= 4 && (this.score1 - this.score2) >= 2;
    }

    isDeuce() {
        return this.score1 >= 3 && this.score2 >= 3 && (this.score1 === this.score2);
    }

}

class TennisResult {
    static format(score1, score2) {
        if ("" === score2) {
            return score1;
        }
        if (score1 === score2) {
            return score1 + "-All";
        }
        return score1 + "-" + score2;
    }
}

class Deuce {
    static getResult() {
        return TennisResult.format("Deuce", "");
    }
}

class GamePlayer1 {
    static getResult(game) {
        return TennisResult.format("Win for " + game.player1, "");
    }
}

class GamePlayer2 {
    static getResult(game) {
        return TennisResult.format("Win for " + game.player2, "");
    }
}

class Advantageplayer1 {
    static getResult(game) {
        return TennisResult.format("Advantage " + game.player1, "");
    }
}

class Advantageplayer2 {
    static getResult(game) {
        return TennisResult.format("Advantage " + game.player2, "");
    }
}

class DefaultResult {
    static getResult(game) {
        let scores = ["Love", "Fifteen", "Thirty", "Forty"];
        return TennisResult.format(scores[game.score1], scores[game.score2]);
    }
}


function getScore(score1, score2) {
    let game = new TennisGame("player1", "player2");
    return game.getScore(score1, score2);
}

module.exports = getScore;