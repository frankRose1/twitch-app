import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <section id="top">
            <div className="container">
                <h1>twitch.tv</h1>
                <div className="arrow">
                    <AnchorLink href="#content" className="down-arr"><i className="fas fa-arrow-circle-down"></i></AnchorLink>
                </div>
            </div>
        </section>
    );
};

export default Hero;