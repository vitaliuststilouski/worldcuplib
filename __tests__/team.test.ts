import { Team } from "../src/team";

describe("Team", () => {
  it("Should create a Team instance with a name and intiial score 0", () => {
    const { name, score } = new Team("Brazil");
    expect(name).toBe("Brazil");
    expect(score).toBe(0);
  });
});
