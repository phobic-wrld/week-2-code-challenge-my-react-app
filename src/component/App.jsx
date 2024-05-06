// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BotCollection from './BotCollection';
import BotSpecs from './BotSpecs';
import YourBotArmy from './YourBotArmy';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={BotCollection} />
          <Route exact path="/bots/:botId" component={BotSpecs} />
          <Route exact path="/your-bot-army" component={YourBotArmy} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
