import React, { Component } from "react";

import "./controls.css";

export default class Controls extends Component {
  render() {
    const className =
      this.props.favourite == true ? "fas fa-star" : "far fa-star";
    const selectClassName = 
      this.props.selected == true ? "d-block btn-select text-success" : "d-block btn-select";

    return (
      <>
        <span className="d-block btn-delete">
          <i onClick={this.props.onDelete} className="fas fa-trash"></i>
        </span>
        <span className="d-flex">
          <span className="d-block btn-favorite">
            <i onClick={this.props.onFavouriteChange} className={className}></i>
          </span>
          <span className={selectClassName}>
            <i onClick={this.props.onSelect} className="fas fa-check-circle"></i>
          </span>
        </span>
      </>
    );
  }
}
