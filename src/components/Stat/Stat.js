import React from 'react';
import './Stat.css'

const Stat = ({stat}) => {
    console.log(stat)
    return (
        <div className='singleStat'>
            <p>Topic: {stat.name}</p>
            <p>Total Questions: {stat.total}</p>
        </div>
        
    );
};

export default Stat;