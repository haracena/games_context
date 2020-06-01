import React, { useContext, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { GameContext } from '../../../contexts/GameContext';
import Game from '../game/game.component';
import Loading from '../loading/loading.component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SuggestedGames = ({ actualGame, changeActualGame }) => {
    const { doneSuggestedFetch, suggestedGames, getSuggestedGames } = useContext(GameContext);

    useEffect(() => {
        getSuggestedGames(actualGame);
    }, [actualGame]);

    return (
        <div>
            {
                doneSuggestedFetch ?
                    <Row>
                        {
                            suggestedGames.map(game => {
                                return (
                                    <Col key={game['id']} md={6} lg={3} className='pt-2 pb-2'>
                                        <div onClick={ () => changeActualGame(game['id']) }>
                                            <Game
                                                name={game['name']}
                                                backgroundImage={game['background_image']}
                                            />
                                        </div>
                                    </Col>
                                )
                            })

                        }
                    </Row>
                    :
                    <Loading />
            }
        </div>
    );

}

export default SuggestedGames;