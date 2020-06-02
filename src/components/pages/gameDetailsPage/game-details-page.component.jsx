import React, { useState, useEffect } from 'react'
import GameDetails from '../../common/gameDetails/game-details.component';
import Screenshots from '../../common/screenshots/screeshots.component';
import Container from 'react-bootstrap/Container';
import SuggestedGames from '../../common/suggestedGames/suggested-games.component';
import NavBar from '../../common/navBar/navbar.component';
const GameDetailsPage = () => {

    const [actualGame, setActualGame] = useState(window.location.pathname.split('/')[3]);
    useEffect(() => {
        console.log(actualGame);
    }, [actualGame])

    return (
        <Container style={{ backgroundColor: '#292929' }}>
            <NavBar />
            <GameDetails actualGame={ actualGame } />
            <h2 className='mb-lg-3 mt-lg-4'>Capturas de pantalla</h2>
            <Screenshots actualGame={ actualGame } />
            <h2 className='mb-lg-3 mt-lg-4'>Juegos sugeridos</h2>
            <SuggestedGames actualGame={ actualGame } changeActualGame={ setActualGame } />
        </Container>
    );
}

export default GameDetailsPage;