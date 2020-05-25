import React from 'react';
import './game.style.css';

const Game = ({ name, backgroundImage }) => {
    return (
        <div>
            <div>
                <img className='img-bg' src={ backgroundImage }></img>
                <h3>{ name }</h3>
            </div>
        </div>
    );
}

export default Game;