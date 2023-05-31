import React from 'react';
import logo from '../../images/Capture.PNG'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to="/"><img src={logo} alt="" /></Link>
               

                <div>
                    <Link to="/home">Home</Link>
                    {/* <Link to="/about">About</Link> */}
                    {/* <Link to="/topics">Topics</Link> */}
                    <Link to="/cards">Cards</Link>

                    <Link to="/stats">Statistics</Link>
                    <Link to="/blogs">Blogs</Link>
                    

                </div>
            </nav>
        </div>
    );
};

export default Header;