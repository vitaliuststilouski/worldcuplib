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
  });
});
