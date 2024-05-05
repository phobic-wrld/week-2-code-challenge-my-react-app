import React from 'react';

const YourBotArmy = ({ army, releaseBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <button onClick={() => releaseBot(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;