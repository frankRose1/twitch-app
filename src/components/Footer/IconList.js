import React from 'react';
import ListItem from './ListItem';

const IconList = () => {
    return (
        <ul className="icon-list">
            <ListItem link="https://www.twitch.tv/" iconClass="fab fa-twitch" />
            <ListItem link="https://www.facebook.com/Twitch/" iconClass="fab fa-facebook-square" />
            <ListItem link="https://www.instagram.com/twitch/?hl=en" iconClass="fab fa-instagram" />
        </ul>
    );
};

export default IconList;