import React from 'react';
import './game.style.css';
import Card from 'react-bootstrap/Card';

const Game = ({ name, backgroundImage }) => {
    return (
        <Card border='dark'>
            <Card.Img variant='top' src={ backgroundImage } />
            <Card.Body className='bg-card'>
                <Card.Title className='title-card'>{ name }</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Game;