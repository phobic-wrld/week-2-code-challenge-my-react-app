// EnlistedBotCard.js

import React from 'react';

const EnlistedBotCard = ({ bot, releaseBot }) => {
  const handleRelease = () => {
    releaseBot(bot.id);
  };

  return (
    <div className="enlisted-bot-card">
      <h3>{bot.name}</h3>
      <p>Type: {bot.type}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleRelease}>Release</button>
    </div>
  );
};

export default EnlistedBotCard;
