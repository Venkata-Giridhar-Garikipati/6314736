import React from 'react';

const IndianPlayers = () => {
  const allPlayers = [
    'Virat Kohli', 'Rohit Sharma', 'KL Rahul',
    'Shubman Gill', 'Hardik Pandya', 'Ravindra Jadeja',
    'Rishabh Pant', 'Suryakumar Yadav', 'Mohammed Shami',
    'Jasprit Bumrah', 'Yuzvendra Chahal'
  ];

  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  const T20players = ['Virat Kohli', 'Rohit Sharma', 'Suryakumar Yadav'];
  const RanjiTrophyPlayers = ['Hanuma Vihari', 'Mayank Agarwal', 'Karun Nair'];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>

      <h2>Merged T20 and Ranji Players</h2>
      <ul>
        {mergedPlayers.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
