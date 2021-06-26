import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainHeader from '../MainHeader/MainHeader';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Navbar />
            <MainHeader />
            <Blogs />
        </div>
    );
};

export default Home;