
import React, { useContext } from 'react';
import Game from '../game/game.component';
import { Link } from 'react-router-dom';
import { GameContext } from '../../../contexts/GameContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Loading from '../loading/loading.component';

const Games = () => {
    const { doneGamesFetch, games, getNextGames, doneNextGamesFetch } = useContext(GameContext);

    const loadNextGames = () => {
        getNextGames();
    }

    return (
        <div>
            {
                doneGamesFetch
                    ?
                    <div>
                        <Row>
                            {

                                games.results.length > 0 ?
                                    (games.results.map(game => (
                                        <Col key={game.id} md={6} lg={3} className='py-2'>
                                            <Link to={`/game/details/${game.id}`}>
                                                <Game
                                                    name={game.name}
                                                    backgroundImage={game.background_image}
                                                />
                                            </Link>
                                        </Col>
                                    )))
                                    :
                                    <Col>
                                        <span>
                                            <strong>
                                                no se han encontrado resultados para este juego
                                        </strong>
                                        </span>
                                    </Col>
                            }
                        </Row>

                        {
                            doneNextGamesFetch === false && <Loading />
                        }

                        {
                            games.next !== null &&
                            <Row>
                                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className='my-3'>
                                        <Button onClick={loadNextGames} variant='dark'>Cargar más juegos</Button>
                                    </div>
                                </Col>
                            </Row>
                        }

                    </div>
                    :
                    <Loading />
            }
        </div>
    );
}

export default Games;