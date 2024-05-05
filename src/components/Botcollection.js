import React from 'react';

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map(bot => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>Class: {bot.class}</p>
          <button onClick={() => enlistBot(bot)}>Enlist</button>
          <button onClick={() => viewBotDetails(bot)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;