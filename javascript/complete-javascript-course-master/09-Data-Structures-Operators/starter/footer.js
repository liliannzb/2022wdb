'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = [...game.players];
const [gk, ...fieldPlayers] = player1;
console.log(fieldPlayers);

const allPlayers = [...player1, ...player2];
console.log([allPlayers]);

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//   const{odds:{team1,x:draw,team2}} = game
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// const printGoals = function()

console.log(team1 < team2 ? 'team1 win! ' : 'team2 win!');

// for(const scores of game.scored){
//   console.log(scores)
// }
const allScores = [];

for (const scores of game.scored.entries()) {
  const gameScore = [[`Goal${scores[0] + 1} : ${scores[1]}`]];
  console.log(gameScore);
  allScores.push(gameScore);
}
console.log(allScores);

let sum = 0;
for (const s in game.odds) {
  sum += game.odds[s];
}
console.log(Object.keys(game.odds));

const gameAverage = sum / Object.keys(game.odds).length;
console.log(gameAverage);




const newOdds = JSON.parse(JSON.stringify(game.odds));
console.log(newOdds);


const labels = {
    team1: 'Odd of victory Bayern Munich',
  x: 'Odd of draw',
  team2: 'Odd of victory Borrussia Dortmund',
}

console.log(Object.entries(newOdds))

for(const [key,value] of Object.entries(newOdds)){
  const label =  labels[key]
  console.log(`${label}: ${value}`)
}

console.log(Object.keys(labels));
console.log(`----------`)
console.log(labels['team2']);
for (const s in labels){
  console.log(s)
}


console.log(new Set("apple"))

const staff = ['Waiter', 'chef','manager','Waiter','Waiter','chef' ];
const positions = new Set(staff);
console.log(positions);
const positionsArray = [...positions];
console.log(positionsArray);

 