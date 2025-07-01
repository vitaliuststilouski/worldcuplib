# WorldCupLib

A TypeScript library for managing World Cup match scores.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Jest

```bash
 npm run test // run jest
 npm run test:watch // watch jest
```

## Compile TS into JS

all .ts files will be output to ./dist directory

```bash
tsc
```

Live server should be launched to see the result

---

# ScoreBoard Usage Guide

This guide explains how to create matches, add them to a scoreboard, update scores, sort matches, and display results.

## 1. Create a new ScoreBoard instance

```javascript
const board = new ScoreBoard();

2. Initialize matches with teams

const match1 = new Match(new Team("Mexico"), new Team("Canada"));
const match2 = new Match(new Team("Spain"), new Team("Brazil"));
const match3 = new Match(new Team("Germany"), new Team("France"));
const match4 = new Match(new Team("Uruguay"), new Team("Italy"));
const match5 = new Match(new Team("Argentina"), new Team("Australia"));

3. Add matches to the scoreboard and update their scores
board.addMatch(match1);
board.updateMatch("Mexico", "Canada", 0, 5);

board.addMatch(match2);
board.updateMatch("Spain", "Brazil", 10, 2);

board.addMatch(match3);
board.updateMatch("Germany", "France", 2, 2);

board.addMatch(match4);
board.updateMatch("Uruguay", "Italy", 6, 6);

board.addMatch(match5);
board.updateMatch("Argentina", "Australia", 3, 1);

4. Sort the matches
const summary = board.sortMatches();

5. Display the sorted scoreboard on a webpage
const container = document.getElementById("scoreboard");

summary.forEach((match, index) => {
  const div = document.createElement("div");
  div.textContent = `${index + 1}. ${match.homeTeam.name} ${match.homeTeamScore} - ${match.awayTeam.name} ${match.awayTeamScore}`;
  container?.appendChild(div);
});

1. Uruguay 6 - Italy 6
2. Spain 10 - Brazil 2
3. Mexico 0 - Canada 5
4. Argentina 3 - Australia 1
5. Germany 2 - France 2

```
