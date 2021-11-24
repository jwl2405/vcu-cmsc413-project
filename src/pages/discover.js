import React from 'react';
import Discover from '../componets/Discover';
import ScrollToTop from "../componets/ScrollToTop";
import Footer from "../componets/Footer";

const DiscoverPage =() =>{
    return (
        <>
            <ScrollToTop />
            <Discover />
            <Footer />
        </>
    );
};

export default DiscoverPage;