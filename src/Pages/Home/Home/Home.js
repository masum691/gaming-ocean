import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import DisplayGames from '../DisplayGames/DisplayGames';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DisplayGames></DisplayGames>
            <Category></Category>
        </div>
    );
};

export default Home;