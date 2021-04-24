import React, { Component } from "react";

import Info from "../Info";
import Header from "../Header";
import Controls from "../Controls";

import "./card.css";

export default class Card extends Component {
  state = {
     selected: false,
     className : "card col-3"
    }

  onSelect = () => {
    this.setState(({selected})=>{

      return {
        selected: !selected,
        className: (!selected == true ? "card col-3 selected": "card col-3")
      }

    });
  }

  render() {
    const { id } = this.props;
    return (
      <div className= {this.state.className}>
        <Header name={this.props.name} />
        <h2>Age: {this.props.age}</h2>
        <Info name={this.props.age} />
        <Controls
          id={id}
          onDelete={this.props.onDelete}
          onFavouriteChange={this.props.onFavouriteChange}
          favourite={this.props.favourite}
          onSelect={()=>this.onSelect()}
          selected={this.state.selected}
        />
      </div>
    );
  }
}
