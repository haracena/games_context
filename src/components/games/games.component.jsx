
import React from 'react';
import { listGamesGet } from '../../constants/constants.js';
import Game from '../game/game.component';
import { Link } from 'react-router-dom';

class Games extends React.Component {

    state = {
        listaJuegos: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch(listGamesGet())
            .then(response => response.json())
            .then(({ results }) => {
                console.log(results);
                this.setState({
                    listaJuegos: results
                })
            });
    }

    botonConsola = () => {
        console.log(this.state.listaJuegos);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.listaJuegos.map(juego => (
                            <Link key={juego['id']} to={`/game/details/${juego['id']}`}>
                                <Game
                                    name={juego['name']}
                                    backgroundImage={juego['background_image']}
                                />
                            </Link>
                        ))
                    }
                </ul>
            </div>
        );
    }
}



// const Games = () => {

//     return(<h1>function component</h1>);
// }

export default Games;


















// import React, { Fragment, useContext } from 'react';
// import { GameContext } from '../contexts/GameContext';

// const Games = () => {
//     const { doneFetch, games } = useContext(GameContext);
//     return (
//         <Fragment>
//             {
//                 <div>hola mundo</div>
//             }
//         </Fragment>
//     );
// }

// Games.displayName = 'Games';
// export default Games;