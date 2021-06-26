import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainHeader from '../MainHeader/MainHeader';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <MainHeader />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;