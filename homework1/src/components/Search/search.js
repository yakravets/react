import React, { Component } from "react";
import './search.css'

export default class Search extends Component {
    
    onSearchChange =(e)=>{
        this.props.onSearchQueryChange(e.target.value);
    }

    render() {
        return (
            <>
                <input
                    className="form-control col-6"
                    type="search" placeholder="Search"
                    aria-label="Search"
                    onChange={this.onSearchChange} />
                {/* <button className="btn btn-outline-success col-2" ><i className="fas fa-search"></i> Search</button> */}
            </>
        )
    };
}