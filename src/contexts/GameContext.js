import React, { createContext, useState, useEffect } from 'react';
import { listGamesGet, gameDetailsGet, searchGameGet, screenshotsGet } from '../constants/constants';

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const [doneGamesFetch, setDoneGamesFetch] = useState(false);
    const [games, setGames] = useState([]);

    const [doneDetailFetch, setDoneDetailFetch] = useState(false);
    const [gameDetail, setGameDetail] = useState({});

    const [screenshots, setScreenshots] = useState([]);

    useEffect(() => {
        getListGames();
    }, []);

    const getListGames = () => {
        setDoneGamesFetch(false);
        fetch(listGamesGet())
            .then(res => res.json())
            .then(({ results }) => {
                setDoneGamesFetch(true);
                setGames(results);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const getGameDetails = (gameId) => {
        setDoneDetailFetch(false);
        fetch(gameDetailsGet(gameId))
            .then(res => res.json())
            .then(({ name, description, background_image }) => {
                setDoneDetailFetch(true);
                setGameDetail({ name, description, background_image });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const searchGame = (gameName) => {
        fetch(searchGameGet(gameName))
            .then(res => res.json())
            .then(({ results }) => {
                setGames(results);
            })
            .catch(err => console.error(err));
    }

    const getScreenshots = (gameId) => {
        fetch(screenshotsGet(gameId))
            .then(res => res.json())
            .then(({ results }) => {
                setScreenshots(results);
            })
            .catch(err => console.error(err));
    }

    return (
        <GameContext.Provider value={{
            doneGamesFetch,
            games,
            doneDetailFetch,
            gameDetail,
            getGameDetails,
            searchGame,
            screenshots,
            getScreenshots
        }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;