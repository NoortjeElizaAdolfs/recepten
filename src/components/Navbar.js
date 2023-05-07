import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav>
            <div className="nav-container">

                <ul className="topmenu">
                    <li className="links">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="links">
                        <Link to="/recepten" >Recepten</Link>
                    </li>
                    <li className="links">
                        <Link to="/inspiratie" >Inspiratie</Link>
                    </li>

                    <li className="links">
                        <Link to="/mood">Mood</Link>
                    </li>
                    <li className="links">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="links">
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;