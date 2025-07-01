export class Team {
  name: string;
  score: number;

  constructor(name: string) {
    if (!name || typeof name !== "string" || name.trim() === "") {
      throw new Error("Team name must be a non-empty string");
    }
    if (name === null || name === undefined) {
      throw new Error("Team name is null or undefined");
    }

    this.name = name;
    this.score = 0;
  }
}
