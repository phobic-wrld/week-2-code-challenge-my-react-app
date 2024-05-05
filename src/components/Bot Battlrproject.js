import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  const enlistBot = (bot) => {
    setYourBotArmy([...yourBotArmy, bot]);
  };

  const releaseBot = (botId) => {
    setYourBotArmy(yourBotArmy.filter(bot => bot.id !== botId));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy yourBotArmy={yourBotArmy} releaseBot={releaseBot} />
    </div>
  );
};

export default App;