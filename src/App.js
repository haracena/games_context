import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Games from './components/games/games.component';
import GameDetails from './components/gameDetails/game-details.component';
import GameContextProvider from './contexts/GameContext';

const App = () => (
  <BrowserRouter>
    <Switch>
      <GameContextProvider>
        <Route exact path='/'>
          <Games />
        </Route>
        <Route path='/game/details/:game_id'>
          <GameDetails />
        </Route>
      </GameContextProvider>
    </Switch>
  </BrowserRouter>
)

App.displayName = 'App';
export default App;