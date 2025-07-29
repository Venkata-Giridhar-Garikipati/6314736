import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 88 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Shubman Gill', score: 70 },
    { name: 'Hardik Pandya', score: 65 },
    { name: 'Ravindra Jadeja', score: 60 },
    { name: 'Rishabh Pant', score: 92 },
    { name: 'Suryakumar Yadav', score: 55 },
    { name: 'Mohammed Shami', score: 40 },
    { name: 'Jasprit Bumrah', score: 35 },
    { name: 'Yuzvendra Chahal', score: 78 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {below70.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
