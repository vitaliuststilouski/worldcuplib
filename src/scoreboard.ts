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
