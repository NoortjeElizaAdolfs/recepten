import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import NavbarItem from './NavbarItem';

function Navbar() {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        window.location.href = "/login";
    };

    return (
        <nav>  
            <NavbarItem url={"/"} text={"Home"} />
            <NavbarItem url={"/recepten"} text={"Recepten"} />
            <NavbarItem url={"/inspiratie"} text={"Inspiratie"} />
            <NavbarItem url={"/cocktails"} text={"Cocktails"} />
            <NavbarItem url={"/login"} text={"Logout"} onClick={handleLogout} />
        </nav>
    );
}

export default Navbar;
