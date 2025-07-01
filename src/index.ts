import { ScoreBoard } from "./scoreboard.js";
import { Team } from "./team.js";
import { Match } from "./match.js";

const board = new ScoreBoard();

const match1 = new Match(new Team("Mexico"), new Team("Canada"));
const match2 = new Match(new Team("Spain"), new Team("Brazil"));
const match3 = new Match(new Team("Germany"), new Team("France"));
const match4 = new Match(new Team("Uruguay"), new Team("Italy"));
const match5 = new Match(new Team("Argentina"), new Team("Australia"));

board.addMatch(match1);
board.updateMatch("Mexico", "Canada", 0, 5);

board.addMatch(match2);
board.updateMatch("Spain", "Brazil", 10, 2);

board.addMatch(match3);
board.updateMatch("Germany", "France", 2, 2);

board.addMatch(match4);
board.updateMatch("Uruguay", "Italy", 6, 6);

board.addMatch(match5);
board.updateMatch("Argentina", "Australia", 3, 1);

const summary = board.sortMatches();

const container = document.getElementById("scoreboard");

summary.forEach((match, index) => {
  const div = document.createElement("div");
  div.textContent = `${index + 1}. ${match.homeTeam.name} ${
    match.homeTeamScore
  } - ${match.awayTeam.name} ${match.awayTeamScore}`;
  container?.appendChild(div);
});
