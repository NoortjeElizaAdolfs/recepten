import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';

function Navbar() {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        window.location.href = "/login";
    };

    return (
        <nav>
            <div className="nav-container">

                <ul className="topmenu">
                    <li className="links">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="links">
                        <Link to="/recepten" >Recepten</Link>
                    </li>
                    <li className="links">
                        <Link to="/inspiratie" >Inspiratie</Link>
                    </li>

                    <li className="links">
                        <Link to="/cocktails">Cocktails</Link>
                    </li>
                    <li className="links" onClick={handleLogout}>
                        <Link to="/login">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
