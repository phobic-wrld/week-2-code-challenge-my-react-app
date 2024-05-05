import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';


const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    // Fetch data about available bots
    // Update the state with the fetched data
  }, []);

  const enlistBot = (bot) => {
    // Implement enlist functionality
  };

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy army={army} releaseBot={releaseBot} />
    </div>
  );
};

export default App;