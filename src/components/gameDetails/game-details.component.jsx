import React, { useState, useEffect } from 'react';
import { gameDetailsGet } from '../../constants/constants';
import './game-details.style.css';

const GameDetails = () => {
    const [game, setGame] = useState({});

    useEffect(() => {
        getData();
    },[])

    const getData = () => {
        const game_id = window.location.pathname.split('/')[3];
        fetch(gameDetailsGet(game_id))
            .then(res => res.json())
            .then(({ name, description, background_image }) => {
                setGame({ name, description, background_image, screenshot: null });
            })
    }

    return (
        <div>
            <div>
                <img className="bg-img" src={ game.background_image } alt={ `${game.name} background image` }/>
            </div>
            <h1>{ game.name }</h1>
            <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
            {
                game.screenshots != null ? <img></img> : <span><strong>no hay screenshoots</strong></span>
            }
        </div>
    );
}

export default GameDetails;