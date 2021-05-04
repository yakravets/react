import React, { Component } from "react";
import './favoritemenu.css'

export default class FavoriteMenu extends Component {
    state = {
        enabled: false
    }

    onFavoriteChange = () => {
        this.setState(
            { enabled: !this.state.enabled }
        );

        this.props.favoriteAction(this.state.enabled);
    }

    render() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-outline-warning col-2"
                    onClick={this.onFavoriteChange}>
                        <i className={ this.state.enabled == true? "far fa-star": "fas fa-star"}></i> Favorite
                </button>
            </>
        )
    }
}