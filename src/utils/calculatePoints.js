
export const calculatePoints = (players, matches) => {
    const pointsTable = players.map(player => ({
      id: player.id,
      name: player.name,
      points: 0,
      totalScore: 0
    }));
    matches.forEach(match => {
      const player1 = pointsTable.find(player => player.id === match.player1);
      const player2 = pointsTable.find(player => player.id === match.player2);
      player1.totalScore += match.player1Score;
      player2.totalScore += match.player2Score;
      if (match.player1Score > match.player2Score) {
        player1.points += 3;
      } else if (match.player2Score > match.player1Score) {
        player2.points += 3;
      } else {
        player1.points += 1;
        player2.points += 1;
      }
    });
  
    
    pointsTable.sort((a, b) => {
      if (b.points === a.points) {
        return b.totalScore - a.totalScore;
      }
      return b.points - a.points;
    });
  
    return pointsTable;
  };
  