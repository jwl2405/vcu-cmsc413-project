import React from 'react';
import Signin from '../componets/Signin';
import ScrollToTop from "../componets/ScrollToTop";
import Footer from "../componets/Footer";

const SigninPage =() =>{
    return (
        <>
            <ScrollToTop />
            <Signin />
            <Footer />
        </>
    );
};

export default SigninPage;