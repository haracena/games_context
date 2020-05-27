import React, { useContext, useState } from 'react';
import { GameContext } from '../../contexts/GameContext';

const SearchForm  = () => {
    const { searchGame } = useContext(GameContext);
    const [textValue, setTextValue] = useState('');

    const handleChange = (event) => {
        setTextValue(event.target.value);
    }

    const handleSubmit = (event) => {
        searchGame(textValue.trim());
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <input type='text' onChange={ handleChange } />
                <input type='submit' value='submit' />
            </form>
        </div>
    );
}

export default SearchForm;