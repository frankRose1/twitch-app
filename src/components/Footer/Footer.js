import React from 'react';
import IconList from './IconList';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="icons-container">
                    <h3>Use these links to follow twitch.tv!</h3>
                    <IconList />
                </div>
            </div>
        </footer>
    );
};

export default Footer;