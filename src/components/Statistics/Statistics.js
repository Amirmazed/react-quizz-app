import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Stat from '../Stat/Stat';

const Statistics = () => {
    const statisticss = useLoaderData();
    const stats = (statisticss.data)
    //console.log(stats)
    return (
        <div>
           
            {
                stats.map(stat=> <Stat stat={stat} key={stat.id}></Stat>)
            }
        </div>
    );
};

export default Statistics;