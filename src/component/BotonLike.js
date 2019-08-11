import React from 'react'
import likeImg from '../images/like.png'
import notLikeImg from '../images/donotlike.png'

class BotonLike extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isEncendido: true };

        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isEncendido: !state.isEncendido
        }));
    }

    render() {
        return (
            <div className="my-3">
                <button onClick={this.handleClick}>
                    {this.state.isEncendido ?
                 <img src={likeImg} width="60"  alt="images Like" /> 
                 : 
                 <img src={notLikeImg} width="60" alt="images no like" />}
                </button>
            </div>

        );
    }
}

export default BotonLike;