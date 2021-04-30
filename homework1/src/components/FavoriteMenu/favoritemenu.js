import React, { Component } from "react";
import './favoritemenu.css'

export default class FavoriteMenu extends Component {
    render() {
        return (
            <>
                <button type="button" className="btn btn-outline-warning col-2" onClick={this.props.favoriteAction}><i className="far fa-star"></i> Favorite</button>
            </>
        )
    }
}