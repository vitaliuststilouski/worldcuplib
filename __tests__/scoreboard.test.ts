import { ScoreBoard } from "../src/scoreboard";
import { Match } from "../src/match";
import { Team } from "../src/team";

describe("ScoreBoard", () => {
  let board: ScoreBoard;
  let match1: Match;
  let match2: Match;

  beforeEach(() => {
    board = new ScoreBoard();
    match1 = new Match(new Team("Mexico"), new Team("Canada"));
    match2 = new Match(new Team("Spain"), new Team("Brazil"));
  });

  it("should add and start a match", () => {
    board.addMatch(match1);
    expect(board.sortMatches()).toContain(match1);
    expect(match1.startTime).not.toBeNull();
  });

  it("should not add duplicate matches", () => {
    board.addMatch(match1);
    board.addMatch(match1);
    expect(board.sortMatches().length).toBe(1);
  });

  it("should update match scores", () => {
    board.addMatch(match1);
    board.updateMatch("Mexico", "Canada", 2, 3);
    expect(match1.homeTeamScore).toBe(2);
    expect(match1.awayTeamScore).toBe(3);
  });
});
