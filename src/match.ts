import { Team } from "./team";

export class Match {
  static startCounter = 0;

  homeTeam: Team;
  awayTeam: Team;
  homeTeamScore: number;
  awayTeamScore: number;
  startTime: Date | null;
  currentTime: Date | null;
  finishTime: Date | null;
  startOrder: number | null;
  isFinished: boolean;

  constructor(homeTeam: Team, awayTeam: Team) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeTeamScore = 0;
    this.awayTeamScore = 0;
    this.startTime = null;
    this.startOrder = null;
    this.currentTime = null;
    this.finishTime = null;
    this.isFinished = false;
  }

  startGame() {
    this.startTime = new Date();
    Match.startCounter++;
    this.startOrder = Match.startCounter;
    this.isFinished = false;
  }

}
