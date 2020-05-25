
import React, { useState, useEffect } from 'react';
import { listGamesGet } from '../../constants/constants.js';
import Game from '../game/game.component';
import { Link } from 'react-router-dom';

const Games = () => {
    const [listGames, setListGames] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch(listGamesGet())
            .then(response => response.json())
            .then(({ results }) => {
                console.log(results);
                setListGames([...results]);
            });
    }

    return (
        <div>
            {
                listGames.map(game => (
                    <Link key={game['id']} to={`/game/details/${game['id']}`}>
                        <Game
                            name={game['name']}
                            backgroundImage={game['background_image']}
                        />
                    </Link>
                ))
            }
        </div>
    );
}

export default Games;