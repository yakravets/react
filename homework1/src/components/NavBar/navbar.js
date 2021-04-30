import React, { Component } from "react";

import './navbar.css'
import '../Search'
import Search from "../Search";
import FavoriteMenu from "../FavoriteMenu"

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div id="nav_bar">
                    <form className="d-flex">
                        <Search searchAction={this.props.searchAction}/>
                        <FavoriteMenu favoriteAction={this.props.favoriteAction}/>
                    </form>
                </div>
            </>
        )
    };
}