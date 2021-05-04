import React, { Component } from "react";
import "./additem.css";

export default class AddItem extends Component {

    state = {
        name: "",
        age: ""
    }

    onSubmitContact = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.setState({
            name: "",
            age: ""
        });
    }


    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onAgeChange = (e) => {
        this.setState({
            age: e.target.value
        });
    }

    render() {
        return (
            <>
                <div id="add-form">
                    <form className="form-group mt-4" onSubmit={this.onSubmitContact}>
                        <input
                            name="name"
                            className="form-control mb-3"
                            placeholder="Name:"
                            onChange={this.onNameChange}
                            value={this.state.name} />
                        <input
                            name="age"
                            className="form-control mb-3"
                            placeholder="Age:"
                            onChange={this.onAgeChange} 
                            value={this.state.age} />
                        <div className="bottom-right">
                            <button type="submit" className="btn btn-success"><i className="fas fa-plus-circle"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}