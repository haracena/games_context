import React from 'react';
import './game.style.css';
import Card from 'react-bootstrap/Card';

const Game = ({ name, backgroundImage }) => {
    return (
        <Card className='card' style={{ backgroundColor:'#202020' }}>
            <Card.Img variant='top' src={ backgroundImage } />
            <Card.Body className='bg-card'>
                <Card.Title className='title-card text-center'>{ name }</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Game;