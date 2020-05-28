import React, { useState, useEffect, useContext } from 'react';
import { gameDetailsGet } from '../../constants/constants';
import './game-details.style.css';
import { GameContext } from '../../contexts/GameContext';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

const GameDetails = () => {
    const { doneDetailFetch, gameDetail, getGameDetails, getScreenshots, screenshots } = useContext(GameContext);

    useEffect(() => {
        const gameId = window.location.pathname.split('/')[3];
        getGameDetails(gameId);
        getScreenshots(gameId);
    }, [])

    return (

        <Row>
            <Col />
            <Col lg={ 8 }>
                {
                    doneDetailFetch ?
                        <div>
                            <div>
                                <Image src={gameDetail.background_image} alt={`${gameDetail.name} image`} fluid />
                            </div>
                            <h1>{gameDetail.name}</h1>
                            <p dangerouslySetInnerHTML={{ __html: gameDetail.description }}></p>
                        </div>
                        :
                        <span><strong>cargando detalles del juego...</strong></span>
                }

                <div>
                    <h2>Capturas de pantalla</h2>
                    <Carousel>
                        {
                            screenshots.map(sc => {
                                return (
                                    <Carousel.Item key={sc.id}>
                                        <Image src={sc.image} alt={`${gameDetail.name} background image`} fluid />
                                    </Carousel.Item>
                                );
                            })
                        }
                    </Carousel>
                </div>
            </Col>
            <Col />
        </Row>
    );
}

export default GameDetails;