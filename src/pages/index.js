import React, {useState} from 'react';
import Footer from '../componets/Footer';
import HeroSection from '../componets/HeroSection';
import InfoSection from '../componets/InfoSection';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree
} from '../componets/InfoSection/Data';
import Navbar from '../componets/Navbar';
import Sidebar from '../componets/Sidebar';
import Services from "../componets/services";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
