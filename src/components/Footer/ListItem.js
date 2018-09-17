import React from 'react';

const ListItem = props => {
    return (
        <li>
            <a href={props.link} target="_blank">
                <i className={props.iconClass}></i>
            </a>
        </li>
    );
};

export default ListItem;