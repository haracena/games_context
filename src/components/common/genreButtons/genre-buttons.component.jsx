import React from 'react';
import Badge from 'react-bootstrap/Badge';

const GenreButtons = ({ genres }) => {
    return (
        <div>
            {
                genres.map(genre => {
                    return (
                        <h4 key={genre.id } className='d-inline-block'>
                            <Badge variant='secondary' className='m-1'>{genre.name}</Badge>
                        </h4>
                    );
                })
            }
        </div>
    );
}

export default GenreButtons;