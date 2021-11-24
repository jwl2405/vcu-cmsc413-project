import React from 'react';
import Signup from '../componets/Signup';
import ScrollToTop from "../componets/ScrollToTop";
import Footer from "../componets/Footer";

const SignupPage =() =>{
    return (
        <>
            <ScrollToTop />
            <Signup />
            <Footer />
        </>
    );
};

export default SignupPage;