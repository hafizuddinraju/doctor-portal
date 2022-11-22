import React from 'react';
import Contact from '../Contact/Contact';

import Info from '../Info/Info';
import Services from '../Services/Services';
import Testmonial from '../Testimonial/Testmonial';
import Treatment from '../Treatment/Treatment';
import Work from '../Work/Work';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Work></Work>
            <Treatment></Treatment>
            <Testmonial></Testmonial>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;