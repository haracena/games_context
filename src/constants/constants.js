const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url  = 'https://api.rawg.io/api';
const games = 'games';
const gameSeries = 'game-series'; // https://api.rawg.io/api/games/{game_pk}/game-series
const screenshots = 'screenshots'; // https://api.rawg.io/api/games/{game_pk}/screenshots
const stores = 'stores';  // https://api.rawg.io/api/games/{game_pk}/stores
const trailers = 'movies'; // https://api.rawg.io/api/games/{id}/movies
const suggested = 'suggested'; // https://api.rawg.io/api/games/{id}/suggested
const genres = 'genres'; // https://api.rawg.io/api/genres
const platforms = 'platforms' // https://api.rawg.io/api/platforms

export const listGamesGet = () => `${base_url}/${games}`;

export const gameDetailsGet = (idGame) => `${base_url}/${games}/${idGame}`;

export const searchGameGet =  (nameGame) => `${base_url}/${games}?search=${nameGame}`;

export const screenshotsGet = (idGame) => `${base_url}/${games}/${idGame}/${screenshots}`;