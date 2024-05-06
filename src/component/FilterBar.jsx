// FilterBar.js

import React, { useState } from 'react';

const FilterBar = ({ filterBots }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updatedFilters);
    filterBots(updatedFilters);
  };

  return (
    <div className="filter-bar">
      <label>
        <input
          type="checkbox"
          value="Support"
          onChange={() => handleFilterChange('Support')}
        />
        Support
      </label>
      {/* Repeat for other bot classes */}
    </div>
  );
};

export default FilterBar;
