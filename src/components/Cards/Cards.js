import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import './Cards.css'

const Cards = () => {
    const cards = useLoaderData();
    
    return (
        <div className='cards'>
           
            {
                cards.data.map(card => <Card card={card} key={card.id}></Card>)
            }
        </div>
    );
};

export default Cards;