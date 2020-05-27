import React, { useState, useEffect, useContext } from 'react';
import { gameDetailsGet } from '../../constants/constants';
import './game-details.style.css';
import { GameContext } from '../../contexts/GameContext';

const GameDetails = () => {
    const { doneDetailFetch, gameDetail, getGameDetails, getScreenshots, screenshots } = useContext(GameContext);

    useEffect(() => {
        const gameId = window.location.pathname.split('/')[3];
        getGameDetails(gameId);
        getScreenshots(gameId);
    }, [])

    return (
        <div>
            {
                doneDetailFetch ?
                    <div>
                        <div>
                            <img className="bg-img" src={gameDetail.background_image} alt={`${gameDetail.name} background image`} />
                        </div>
                        <h1>{gameDetail.name}</h1>
                        <p dangerouslySetInnerHTML={{ __html: gameDetail.description }}></p>
                    </div>
                    :
                    <span><strong>cargando detalles del juego...</strong></span>
            }

            {
                screenshots.map(sc => {
                    return (
                        <div key={ sc.id }>
                            <img className="bg-img" src={sc.image} alt={`${gameDetail.name} background image`} />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default GameDetails;