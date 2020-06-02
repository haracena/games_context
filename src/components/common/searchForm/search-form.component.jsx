import React, { useContext, useState } from 'react';
import { GameContext } from '../../../contexts/GameContext';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './search-form.style.css'

const SearchForm = () => {
    const { searchGame } = useContext(GameContext);
    const [textValue, setTextValue] = useState('');

    const handleChange = (event) => {
        setTextValue(event.target.value);
    }

    const handleSubmit = (event) => {
        searchGame(textValue.trim());
        setTextValue('');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchGame(textValue.trim());
            setTextValue('');
        }
    }

    return (
        <InputGroup>
            <FormControl 
                placeholder='Nombre del juego'
                onChange={handleChange}
                onKeyPress={ handleKeyPress }
                value={textValue} />
            <InputGroup.Append>
                <Button 
                    onClick={ handleSubmit }
                    variant='dark'
                    size='sm'>
                    Buscar
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
}

export default SearchForm;