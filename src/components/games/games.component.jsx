
import React, { useContext } from 'react';
import Game from '../game/game.component';
import { Link } from 'react-router-dom';
import { GameContext } from '../../contexts/GameContext.js';
import SearchForm from '../searchForm/search-form.component';

const Games = () => {
    const { doneGamesFetch, games } = useContext(GameContext);
    
    return (
        <div>
            <SearchForm />
            {
                doneGamesFetch
                    ? (games.map(game => (
                        <Link key={game['id']} to={`/game/details/${game['id']}`}>
                            <Game
                                name={game['name']}
                                backgroundImage={game['background_image']}
                            />
                        </Link>
                    )))
                    : <span><strong>Cargando juegos...</strong></span>
            }
        </div>
    );
}

export default Games;