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

  it("should throw 'Match not found' if finishing a match that no longer exists", () => {
    board.addMatch(match1);
    board.finishMatch("Mexico", "Canada");
    expect(() => board.finishMatch("Mexico", "Canada")).toThrow(
      "Match not found"
    );
  });

  it("should finish and remove a match", () => {
    board.addMatch(match1);
    board.finishMatch("Mexico", "Canada");
    expect(board.sortMatches()).not.toContain(match1);
  });

  it("should sort matches by total score and start order", () => {
    board.addMatch(match1);
    board.addMatch(match2);

    board.updateMatch("Mexico", "Canada", 2, 2);
    board.updateMatch("Spain", "Brazil", 3, 1);

    const sorted = board.sortMatches();

    expect(sorted[0]).toBe(match2);
    expect(sorted[1]).toBe(match1);
  });
});
