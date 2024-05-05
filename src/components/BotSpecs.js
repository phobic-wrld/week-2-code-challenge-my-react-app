import React from 'react';

const BotSpecs = ({ bot, enlistBot }) => {
  return (
    <div>
      <h2>{bot.name} Specs</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;