// BotCollection.js

import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import SortBar from './SortBar';
import FilterBar from './FilterBar';
import { getAllBots } from '../api/bots';

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [sortedBots, setSortedBots] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      const data = await getAllBots();
      setBots(data);
      setSortedBots(data);
    };
    fetchBots();
  }, []);

  // Sorting function
  const sortBots = (criteria) => {
    // Implement sorting logic based on criteria (health, damage, armor)
    // Update sortedBots state with sorted list
  };

  // Filtering function
  const filterBots = (selectedFilters) => {
    // Implement filtering logic based on selected filters
    // Update sortedBots state with filtered list
  };

  // Enlist bot function
  const enlistBot = (botId) => {
    // Implement logic to enlist bot
    const botToEnlist = bots.find((bot) => bot.id === botId);
    // Check if bot is already enlisted
    if (!enlistedBots.some((bot) => bot.id === botId)) {
      setEnlistedBots([...enlistedBots, botToEnlist]);
    }
    // Remove enlisted bot from sortedBots
    setSortedBots(sortedBots.filter((bot) => bot.id !== botId));
};
// Release bot function
const releaseBot = (botId) => {
  // Implement logic to release bot
  setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
};

// Discharge bot function
const dischargeBot = (botId) => {
  // Implement logic to permanently delete bot
  // Make API call to backend to delete bot
  // Remove bot from both frontend and backend
};
  };

  return (
    <div>
      <h2>Bot Collection</h2>
      <SortBar sortBots={sortBots} />
      <FilterBar filterBots={filterBots} />
      <div className="bot-collection">
        {sortedBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
