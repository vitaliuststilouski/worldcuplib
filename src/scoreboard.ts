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

  updateMatch(
    homeTeam: string,
    awayTeam: string,
    homeScore: number,
    awayScore: number
  ) {
    const key = homeTeam + "-" + awayTeam;
    const match = this.#matches[key];

    if (!match) throw new Error("Already finished");

    match.updateScore(homeScore, awayScore);
  }

  finishMatch(homeTeam: string, awayTeam: string) {
    const key = homeTeam + "-" + awayTeam;
    const match = this.#matches[key];

    if (!match) throw new Error("Match not found");
    if (match.isFinished) throw new Error("Already finished");

    match.finishGame();
    delete this.#matches[key];
  }

  sortMatches(): Match[] {
    const inProgressMatcheList = Object.values(this.#matches).filter(
      (m) => !m.isFinished
    );
    inProgressMatcheList.sort((a, b) => {
      const homeScore = a.homeTeamScore + a.awayTeamScore;
      const awayScore = b.homeTeamScore + b.awayTeamScore;
      if (awayScore !== homeScore) return awayScore - homeScore;
      return (b.startOrder ?? 0) - (a.startOrder ?? 0);
    });
    return inProgressMatcheList;
  }
}
