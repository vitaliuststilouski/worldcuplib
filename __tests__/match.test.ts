import { Match } from "../src/match";
import { Team } from "../src/team";

describe("Match", () => {
  let homeTeam: Team;
  let awayTeam: Team;

  beforeEach(() => {
    homeTeam = new Team("Home");
    awayTeam = new Team("Away");
  });

  it("should create a Match instance with initial scores 0 and not finished", () => {
    const match = new Match(homeTeam, awayTeam);

    expect(match.homeTeam).toBe(homeTeam);
    expect(match.awayTeam).toBe(awayTeam);
    expect(match.homeTeamScore).toBe(0);
    expect(match.awayTeamScore).toBe(0);
    expect(match.startTime).toBeNull();
    expect(match.finishTime).toBeNull();
    expect(match.isFinished).toBe(false);
  });

  it("should start the game, setting startTime, startOrder, and isFinished", () => {
    const match = new Match(homeTeam, awayTeam);
    match.startGame();

    expect(match.startTime).toBeInstanceOf(Date);
    expect(match.startOrder).toBeGreaterThan(0);
    expect(match.isFinished).toBe(false);
  });

  it("should update the scores", () => {
    const match = new Match(homeTeam, awayTeam);
    match.updateScore(3, 2);

    expect(match.homeTeamScore).toBe(3);
    expect(match.awayTeamScore).toBe(2);
  });

  it("updateScore should throw if scores are negative", () => {
    const match = new Match(homeTeam, awayTeam);
    expect(() => match.updateScore(-1, 2)).toThrow();
    expect(() => match.updateScore(1, -5)).toThrow();
  });

  it("should not update score after game is finished", () => {
    const match = new Match(homeTeam, awayTeam);
    match.startGame();
    match.finishGame();

    expect(() => match.updateScore(2, 2)).toThrow(
      "Cannot update score after the game is finished"
    );
  });
});
