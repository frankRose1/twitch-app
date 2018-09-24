import React from 'react';
import Image from '../../img/gaming.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const styles = {
    height: '100vh',
    background: `linear-gradient( rgba(75,54,124,0.4),rgba(75,54,124,0.4) ), url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
};

const Hero = () => {
    return (
        <section id="top" style={styles}>
            <h1>twitch.tv</h1>
            <div className="arrow">
                <AnchorLink href="#content" className="down-arr"><i className="fas fa-arrow-circle-down"></i></AnchorLink>
            </div>
        </section>
    );
};

export default Hero;