import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Games from './components/games/games.component';
import GameDetails from './components/gameDetails/game-details.component';
import GameContextProvider from './contexts/GameContext';
import 'bootstrap/dist/css/bootstrap.min.css';

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