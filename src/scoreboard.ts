import { Match } from "./match";

export class ScoreBoard {
  #matches: { [key: string]: Match } = {};

  addMatch(match: Match) {
    const key = match.homeTeam.name + "-" + match.awayTeam.name;
    match.startGame();

    if (!this.#matches[key]) {
      this.#matches[key] = match;
    }
  }
}
