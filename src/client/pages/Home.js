import React from 'react';

const Home = () => {
    return (
        <div>
            <div>SSR Home Page</div>
            <button onClick={() => {console.log('Deals are needed!')}}>Get Deals!</button>
        </div>
    )
};

export default {
    component: Home
};