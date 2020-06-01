import React, { createContext, useState, useEffect } from 'react';
import { listGamesGet, gameDetailsGet, searchGameGet, screenshotsGet, suggestedGamesGet } from '../constants/constants';

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const [doneGamesFetch, setDoneGamesFetch] = useState(false);
    const [games, setGames] = useState([]);

    const [doneDetailFetch, setDoneDetailFetch] = useState(false);
    const [gameDetail, setGameDetail] = useState({});

    const [doneScFetch, setDoneScFetch] =  useState(false);
    const [screenshots, setScreenshots] = useState([]);

    const [doneSuggestedFetch, setDoneSuggestedFetch] = useState(false);
    const [suggestedGames, setSuggestedGames] = useState([]);

    const [doneNextGamesFetch, setDoneNextGamesFetch] = useState(null);
    const [nextGames, setNextGames] = useState('');

    useEffect(() => {
        getListGames();
    }, []);

    useEffect(() => {}, [games]);

    const getListGames = () => {
        setDoneGamesFetch(false);
        fetch(listGamesGet())
            .then(res => res.json())
            .then(({ results, next }) => {
                setDoneGamesFetch(true);
                setGames(results);
                setNextGames(next);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const getNextGames = () => {
        setDoneNextGamesFetch(false);
        fetch(nextGames)
            .then(res => res.json())
            .then(({ results, next }) => {
                setDoneNextGamesFetch(true);
                addGamesToList(results);
                setNextGames(next);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const addGamesToList = (nextGamesList) => {
        setGames([...games, ...nextGamesList]);
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
        setDoneScFetch(false);
        fetch(screenshotsGet(gameId))
            .then(res => res.json())
            .then(({ results }) => {
                setDoneScFetch(true);
                setScreenshots(results);
            })
            .catch(err => console.error(err));
    }

    const getSuggestedGames = (idGame) => {
        setDoneSuggestedFetch(false);
        fetch(suggestedGamesGet(idGame))
            .then(res => res.json())
            .then(({ results }) => {
                setDoneSuggestedFetch(true);
                setSuggestedGames(results);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <GameContext.Provider value={{
            doneGamesFetch,
            games,
            doneDetailFetch,
            gameDetail,
            getGameDetails,
            searchGame,
            getScreenshots,
            screenshots,
            doneScFetch,
            getSuggestedGames,
            suggestedGames,
            doneSuggestedFetch,
            getNextGames,
            doneNextGamesFetch
        }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;