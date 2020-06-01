import React, { useContext, useEffect } from 'react';
import { GameContext } from '../../../contexts/GameContext';
import Loading from '../loading/loading.component';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const Screenshots = ({ actualGame }) => {
    const { doneScFetch, getScreenshots, screenshots } = useContext(GameContext);
    
    useEffect(() => {
        getScreenshots(actualGame);
    }, [actualGame])

    return (
        <div>
            {
                doneScFetch ?
                    <Carousel>
                        {
                            screenshots.map(sc => {
                                return (
                                    <Carousel.Item key={sc.id} className='text-center'>
                                        <Image src={sc.image} alt='screenshot' fluid />
                                    </Carousel.Item>
                                );
                            })
                        }
                    </Carousel>
                    :
                    <Loading />
            }
        </div>
    );
}

export default Screenshots;