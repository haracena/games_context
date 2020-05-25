import React from 'react';
import { gameDetailsGet } from '../../constants/constants';

class GameDetails extends React.Component {

    state = {
        name: '',
        description: '',
        screenshots: null
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const game_id = window.location.pathname.split('/')[3];
        fetch(gameDetailsGet(game_id))
            .then(res => res.json())
            .then(({ name, description }) => {
                this.setState({
                    name,
                    description
                })
            })
    }



    render(){
        return(
            <div>
                <h1>{ this.state.name }</h1>
                <p>{ this.state.description }</p>
                {
                    this.screenshots != null ? <img></img> : <span>no hay screenshoots</span>
                }
            </div>
        )
    }
}

export default GameDetails;