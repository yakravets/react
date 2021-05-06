import React, { Component } from "react";
import './favoritemenu.css'

export default class FavoriteMenu extends Component {
    state = {
        onlyFavorite: false
    }

    onFavoriteChange = (e) => {
        e.preventDefault();
        let newValue = !this.state.onlyFavorite;
        this.setState(
            { onlyFavorite: newValue }
        );
        this.props.favoriteAction(newValue);
    }

    render() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-outline-warning col-2"
                    onClick={this.onFavoriteChange}>
                        <i className={ this.state.onlyFavorite == true ? "fas fa-star":"far fa-star"}></i> Favorite
                </button>
            </>
        )
    }
}