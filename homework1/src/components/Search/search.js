import React, { Component } from "react";
import './search.css'

export default class Search extends Component {
    render() {
        return (
            <>
                <input className="form-control col-6" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success col-2" onClick={this.props.searchAction}><i className="fas fa-search"></i> Search</button>
            </>
        )
    };
}