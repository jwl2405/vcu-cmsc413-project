import React from 'react';
import LogOut from '../componets/LogOut';
import ScrollToTop from "../componets/ScrollToTop";
import Footer from "../componets/Footer";

const LogOutPage =() =>{
    return (
        <>
            <ScrollToTop />
            <LogOut />
                <Footer />
        </>
    );
};

export default LogOutPage;