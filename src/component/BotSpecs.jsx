import React from "react";
import { useParams } from "react-router-dom";

const BotSpecs = ({ bots, enlistBot }) => {
  const { botId } = useParams();
  const bot = bots.find((bot) => bot.id === parseInt(botId));

  if (!bot) {
    return <div>Bot not found</div>;
  }

  return (
    <div>
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <img src={bot.avatar_url} alt={bot.name} />
      <button onClick={() => enlistBot(bot)}>Enlist</button>
      <button>Go Back</button>
    </div>
  );
};

export default BotSpecs;