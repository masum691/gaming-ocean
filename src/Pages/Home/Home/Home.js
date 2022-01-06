import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import DisplayGames from '../DisplayGames/DisplayGames';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DisplayGames></DisplayGames>
            <Category></Category>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;