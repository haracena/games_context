import React, { useEffect, useContext } from 'react';
import './game-details.style.css';
import { GameContext } from '../../../contexts/GameContext';
import Screenshots from '../screenshots/screeshots.component';
import Loading from '../loading/loading.component';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GenreButtons from '../genreButtons/genre-buttons.component';

const GameDetails = ({ actualGame }) => {
    const { doneDetailFetch, gameDetail, getGameDetails } = useContext(GameContext);

    useEffect(() => {
        getGameDetails(actualGame);
    }, [actualGame])

    return (

        <div>
            <Row>
                <Col>
                    {
                        doneDetailFetch ?
                            <div>
                                <Image className='max-height' src={gameDetail.background_image} alt={`${gameDetail.name} image`} fluid />
                                <h1 className='mb-lg-1 mt-lg-4 d-inline-block'>{`${gameDetail.name} (${gameDetail.released})`}</h1>
                                {
                                    gameDetail.genres && <GenreButtons genres={ gameDetail.genres } id={ gameDetail.id } />
                                }
                                <p dangerouslySetInnerHTML={{ __html: gameDetail.description }}></p>
                            </div>
                            :
                            <Loading />
                    }
                </Col>
            </Row>
        </div>

    );
}

export default GameDetails;