import React from 'react';
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className='home'>
            
            <h3>This is a Quiz app. Click <Link to="/cards">Cards</Link> and choose your topic</h3>

           
        </div>
    );
};

export default Home;