import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Games from './components/games/games.component';
import GameDetails from './components/gameDetails/game-details.component';

const App = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path='/'>
            <Games />
        </Route>
        <Route path='/game/details/:game_id'>
          <GameDetails />
        </Route>
    </Switch>
  </BrowserRouter>
)

App.displayName = 'App';
export default App;