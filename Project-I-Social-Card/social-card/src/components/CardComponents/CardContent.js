import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className = "bannerContent">
        <p className = "cardContentTitle">
            Get started with React
        </p>
        <p className = "cardContent">
        React makes it painless to make interactive UI's. Design simple views
       for each state in your application.
        </p>
        <p className = "cardContentWebsite">
            Reactjs.org
        </p>
        </div>
    );
};

export default CardContent;
