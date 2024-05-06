// YourBotArmy.js

import React from 'react';
import EnlistedBotCard from './EnlistedBotCard';

const YourBotArmy = ({ enlistedBots, releaseBot }) => {
  const handleRelease = (botId) => {
    releaseBot(botId);
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {enlistedBots.map((bot) => (
          <EnlistedBotCard key={bot.id} bot={bot} releaseBot={handleRelease} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
