import React from 'react';
import Spiner from 'react-bootstrap/Spinner';

const Loading = ({ text }) => {
    return(
        <div className='text-center my-1'>
            <Spiner animation='border' variant='secondary' />
        </div>
    );
}

export default Loading;