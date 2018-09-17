import React from 'react';
import Aux from '../hoc/Auxilliary';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';

const Layout = (props) => {
    return (
        <Aux>
            <Hero />
            <main id="content">
                {props.children}
            </main>
            <Footer />
        </Aux>
    );
};

export default Layout;