import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = ({url, text}) => (
    <Link to={url}>{text}</Link>
);

export default NavbarItem;