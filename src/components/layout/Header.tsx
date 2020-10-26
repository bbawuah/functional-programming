import React from "react";
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <Link to="/">Page 1</Link>
            <Link to="/pagetwo">Page 2</Link>
            <Link to="/pagethree">Page 3</Link>
        </nav>
        <h1>Header</h1>
    </header>
);

export default Header;