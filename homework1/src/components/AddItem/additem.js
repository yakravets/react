import React, { Component } from "react";
import "./additem.css";

export default class AddItem extends Component {
    render() {
        return (
            <>
                <div className="bottom-right">
                    <button type="button" className="btn btn-success" onClick={this.props.onAdd}><i className="fas fa-plus-circle"></i>
                    </button>
                </div>
            </>
        );
    }
}