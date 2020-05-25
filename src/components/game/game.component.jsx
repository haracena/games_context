import React from 'react';
import './game.style.css';

class Game extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img className='img-bg' src={this.props.backgroundImage}></img>
                    <h3>{this.props.name}</h3>
                </div>
            </div>
        )
    }
}

export default Game;