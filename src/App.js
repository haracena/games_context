import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/homePage/home-page.component'
import GameContextProvider from './contexts/GameContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameDetailsPage from './components/pages/gameDetailsPage/game-details-page.component';

const App = () => (
  <BrowserRouter>
    <Switch>
      <GameContextProvider>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/game/details/:game_id'>
          <GameDetailsPage />
        </Route>
      </GameContextProvider>
    </Switch>
  </BrowserRouter>
)

App.displayName = 'App';
export default App;