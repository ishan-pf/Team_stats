const team = {
  _players:[{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 23
},{
  firstName: 'Lionel',
  lastName: 'Messi',
  age: 24
},{
  firstName: 'Cristiano',
  lastName: 'Ronaldo',
  age: 25
}],
  _games:[
    {
      Opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      Opponent: 'Las Vegas Raiders',
      teamPoints: 30,
      opponentPoints: 22
    },
    {
      Opponent: 'New England Patriots',
      teaamPoints: '32',
      opponentPoints: 11
    }
  ],
 get players(){
   return this._players
 },
 get games(){
   return this._games
 },
 addPlayer(firstName,lastName,age){
   let player = {
     firstname: firstName,
     lastname: lastName,
     age: age
   };
   this.players.push(player);
 },
 addGame(oppname,tpoints,oppoints){
   const game = {
   Opponents_Name: oppname,
   My_Team_Points: tpoints,
   Opponents_Points: oppoints
   };
   this.games.push(game);
}
};
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
team.addGame('Titans', 100, 98);
console.log(team);
