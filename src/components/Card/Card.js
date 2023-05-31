import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
const Card = ({card}) => {
    //console.log(card);
    const {id} = card;
    console.log(id)
    return (
        <div className='card'>
            <img src={card.logo} alt="" />
            <div className='TextBtn'>
                <p>{card.name}</p>
               
                
                <Link to={`/card/${id}`}> <button className='cardBtn'>Start Practice</button></Link>
            </div>
            
        </div>
    );
};

export default Card;