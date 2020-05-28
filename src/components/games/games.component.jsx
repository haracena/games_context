
import React, { useContext } from 'react';
import Game from '../game/game.component';
import { Link } from 'react-router-dom';
import { GameContext } from '../../contexts/GameContext.js';
import SearchForm from '../searchForm/search-form.component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Games = () => {
    const { doneGamesFetch, games } = useContext(GameContext);

    return (
        <div>
            <Row>
                <Col lg={ 4 } />
                <Col lg={ 4 }>
                    <SearchForm />
                </Col>
                <Col lg={ 4 } />
            </Row>
            {
                doneGamesFetch
                    ?
                    <Row>
                        {
                            (games.map(game => (
                                <Col key={game['id']} sm={ 6 } mg={ 4 } lg={ 3 }>
                                    <Link to={`/game/details/${game['id']}`}>
                                        <Game
                                            name={game['name']}
                                            backgroundImage={game['background_image']}
                                        />
                                    </Link>
                                </Col>
                            )))
                        }
                    </Row>
                    :
                    <span><strong>Cargando juegos...</strong></span>
            }
        </div>
    );
}

export default Games;