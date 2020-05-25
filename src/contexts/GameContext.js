import React, { createContext, useState, useEffect } from 'react';
import { listGamesGet } from '../constants/constants';

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [games, setGames] = useState([]);

    useEffect(() => getListGames(), []);

    const getListGames = () => {
        fetch(listGamesGet)
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                console.log(data['results']);
                setGames(data['results']);
            })
    }

    return (
        <GameContext.Provider value={{ doneFetch, games }}>
            { children }
        </GameContext.Provider>
    );
};

export default GameContextProvider;