import { Team } from "../src/team";

describe("Team", () => {
  it("Should create a Team instance with a name and intiial score 0", () => {
    const { name, score } = new Team("Brazil");
    expect(name).toBe("Brazil");
    expect(score).toBe(0);
  });

  it("should throw if name is empty", () => {
    expect(() => new Team("")).toThrow("Team name must be a non-empty string");
  });

  it("should throw an error if name is onyl whitespace", () => {
    expect(() => new Team("   ")).toThrow(
      "Team name must be a non-empty string"
    );
  });
  it("should throw if name is null or undefined", () => {
    expect(() => new Team(null as unknown as string)).toThrow(
      "Team name must be a non-empty string"
    );
    expect(() => new Team(undefined as unknown as string)).toThrow(
      "Team name must be a non-empty string"
    );
  });
});
