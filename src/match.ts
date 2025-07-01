import { Team } from "./team";

export class Match {
  static startCounter = 0;

  homeTeam: Team;
  awayTeam: Team;
 

  constructor(homeTeam: Team, awayTeam: Team) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }

}
