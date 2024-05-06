// BotCard.js

import React from 'react';

const BotCard = ({ bot, enlistBot }) => {
  const handleEnlist = () => {
    enlistBot(bot.id);
  };

  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <p>Type: {bot.type}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleEnlist}>Enlist</button>
    </div>
  );
};

export default BotCard;
