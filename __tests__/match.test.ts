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

});
