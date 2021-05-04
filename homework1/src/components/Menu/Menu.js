import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import "./menu.css"

const Menu = () => {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    {" "}
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    {" "}
                    <Link to="/add">Add user</Link>
                </li>
                <li className="nav-item">
                    {" "}
                    <Link to="/about">About us</Link>
                </li>
            </ul>
        </>
    );
}

export default Menu;